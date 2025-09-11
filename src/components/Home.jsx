import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Home = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      if (feed?.length) return;
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/user/feed`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(addFeed(response.data.data));
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to load feed");
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  const acceptOrIgnore = async (status, userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/connection/send/${status}/${userId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(response.data.message);
      const updatedFeed = feed.filter((u) => u._id !== userId);
      dispatch(addFeed(updatedFeed));
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="mt-48 bg-base-100 flex items-center justify-center">
      <div className="relative w-80 h-96">
        {feed?.map((user, index) => (
          <div
            key={user._id || index}
            className="absolute inset-0"
            style={{
              zIndex: feed.length - index,
              transform: `translateY(${index * 16}px) translateX(${
                index * 2
              }px) rotate(${index * 8}deg)`,
            }}
          >
            <UserCard user={user} onAction={acceptOrIgnore} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
