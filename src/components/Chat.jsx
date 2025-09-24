import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const Chat = () => {
  const { toUserId } = useParams();
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store?.user);
  const { firstName, _id } = loggedInUser || {};

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [toUser, setToUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [otherUserTyping, setOtherUserTyping] = useState(false);
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Fetch recipient user details
  const getUserDetail = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/user/${toUserId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setToUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Fetch chat history
  const getChatHistory = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/message/${toUserId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessages(response.data.messages || []);

      // Mark messages as seen after fetching
      await markMessagesAsSeen();
    } catch (error) {
      console.error("Error fetching chat history:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const markMessagesAsSeen = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`${BASE_URL}/message/seen/${toUserId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error marking messages as seen:", error);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load user and chat history on mount
  useEffect(() => {
    if (toUserId) {
      getUserDetail();
      getChatHistory();
    }
  }, [toUserId]);

  // Initialize socket connection
  useEffect(() => {
    if (!_id || !firstName) return;

    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.emit("joinChat", { firstName, _id, toUserId });

    socket.on("messageReceived", (msg) => {
      setMessages((prev) => [...prev, msg]);

      // If the message is from the other user, mark it as seen
      if (msg.senderId !== _id) {
        socket.emit("markAsSeen", { senderId: _id, toUserId });
      }
    });

    socket.on("messagesSeen", ({ fromUserId, toUserId: seenByUserId }) => {
      // Update messages to show as seen
      setMessages((prev) =>
        prev.map(msg =>
          msg.senderId === _id ? { ...msg, seen: true } : msg
        )
      );
    });

    // Online status events
    socket.on("userOnline", ({ userId }) => {
      if (userId === toUserId) {
        setIsOnline(true);
      }
    });

    socket.on("userOffline", ({ userId }) => {
      if (userId === toUserId) {
        setIsOnline(false);
      }
    });

    // Typing events
    socket.on("userTyping", ({ userId, isTyping }) => {
      if (userId === toUserId) {
        setOtherUserTyping(isTyping);
      }
    });

    // Request online status for the user we're chatting with
    socket.emit("checkUserStatus", { userId: toUserId });

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      socket.disconnect();
    };
  }, [firstName, _id, toUserId]);

  // Handle typing indicator
  const handleTyping = (value) => {
    setMessage(value);

    if (!socketRef.current) return;

    // Emit typing start
    socketRef.current.emit("typing", { toUserId, isTyping: true });

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      socketRef.current?.emit("typing", { toUserId, isTyping: false });
    }, 1000);
  };

  // Send message
  const handleSend = () => {
    if (!message.trim()) return;

    const newMsg = {
      text: message,
      senderId: _id,
      senderName: firstName,
      toUserId,
      createdAt: new Date().toISOString(),
      seen: false,
    };

    setMessages((prev) => [...prev, newMsg]);
    socketRef.current?.emit("sendMessage", newMsg);

    // Stop typing indicator
    socketRef.current?.emit("typing", { toUserId, isTyping: false });
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    setMessage("");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl border border-gray-600 flex flex-col h-[600px] rounded-3xl overflow-hidden backdrop-blur-sm bg-opacity-95">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-600 p-4 bg-gradient-to-r from-purple-800 to-blue-800 rounded-t-3xl">
          <div className="relative">
            <img
              src={toUser?.photoUrl || "https://via.placeholder.com/80"}
              alt="User"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
            />
            {/* Online status indicator */}
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${isOnline ? 'bg-green-500' : 'bg-gray-500'
              } shadow-lg`}></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">
              {toUser?.firstName || "Chat"}
            </h3>
            <p className="text-xs text-gray-200 opacity-80">
              {isOnline ? 'Online' : 'Offline'}
              {otherUserTyping && isOnline && (
                <span className="ml-2 text-green-300 animate-pulse">typing...</span>
              )}
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-sm text-white rounded-full"
          >
            ←
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="loading loading-spinner loading-lg text-primary"></div>
            </div>
          ) : (
            <>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`chat ${msg.senderId === _id ? "chat-end" : "chat-start"
                    }`}
                >
                  <div className="chat-header opacity-50 text-xs mb-1">
                    {msg.createdAt && formatTimestamp(msg.createdAt)}
                  </div>
                  <div
                    className={`chat-bubble ${msg.senderId === _id
                        ? "chat-bubble-primary shadow-lg"
                        : "chat-bubble-secondary shadow-lg"
                      }`}
                  >
                    {msg.text}
                  </div>
                  {msg.senderId === _id && (
                    <div className="chat-footer opacity-50 text-xs mt-1">
                      {msg.seen ? (
                        <span className="text-blue-400">✓✓</span>
                      ) : (
                        <span className="text-gray-400">✓</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {otherUserTyping && (
                <div className="chat chat-start">
                  <div className="chat-bubble chat-bubble-secondary animate-pulse">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-600 flex items-center gap-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-b-3xl">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-1 bg-white dark:bg-slate-600 border-gray-300 dark:border-gray-500 rounded-full px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-inner"
            value={message}
            onChange={(e) => handleTyping(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="btn btn-primary rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-purple-600 to-blue-600 border-none hover:from-purple-700 hover:to-blue-700"
            onClick={handleSend}
            disabled={!message.trim()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
