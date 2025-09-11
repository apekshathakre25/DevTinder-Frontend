import { useEffect } from "react";
import {
  removePendingConnections,
  setPendingConnections,
} from "../store/pendingConnectionSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PendingConnection = () => {
  const dispatch = useDispatch();
  const pendingConnection = useSelector((store) => store.pendingConnection);

  const getAllPendingConnect = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/user/pending`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setPendingConnections(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const reviewPendingConnections = async (status, requestId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/connection/review/${status}/${requestId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(removePendingConnections({ requestId }));
      toast.success(`${status} succesfully` || response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPendingConnect();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-400">
        Pending Connections
      </h2>
      <div className="space-y-4">
        {pendingConnection?.map((request) => (
          <div
            key={request._id}
            className="card bg-base-100 max-w-4xl mx-auto shadow-lg border border-gray-700"
          >
            <div className="card-body">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={request.fromUserId.photoUrl}
                    alt={`${request.fromUserId.firstName} ${request.fromUserId.lastName}`}
                    className="rounded-lg w-20 h-20 object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/80/cccccc/666666?text=No+Image";
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    {request.fromUserId.firstName} {request.fromUserId.lastName}
                  </h3>
                  <h3 className="text-md font-light text-gray-300 mb-2">
                    {request.fromUserId.about?.slice(0, 100)}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <div className="badge badge-outline">
                      Age: {request.fromUserId.age}
                    </div>
                    <div className="badge badge-secondary">
                      {request.fromUserId.gender}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 ml-auto">
                  <button
                    onClick={() =>
                      reviewPendingConnections("accepted", request._id)
                    }
                    className="btn btn-success btn-sm px-6"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() =>
                      reviewPendingConnections("rejected", request._id)
                    }
                    className="btn btn-error btn-sm px-6"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {(!pendingConnection || pendingConnection.length === 0) && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-xl text-gray-600">
            No pending connections found. Keep exploring to find new
            connections!
          </p>
        </div>
      )}
    </div>
  );
};

export default PendingConnection;
