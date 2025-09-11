import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addConnection } from "../store/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connection = useSelector((store) => store.connection);

  const getAllMyConnection = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/user/connections`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Connections fetched successfully");
      dispatch(addConnection(response.data.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMyConnection();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-400">
        My Connections
      </h2>
      <div className="space-y-4">
        {connection?.map((person) => (
          <div key={person._id} className="card bg-base-100 max-w-md mx-auto shadow-lg border border-gray-700">
            <div className="card-body">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={person.photoUrl} 
                    alt={`${person.firstName} ${person.lastName}`}
                    className="rounded-lg w-20 h-20 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80/cccccc/666666?text=No+Image';
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    {person.firstName} {person.lastName}
                  </h3>
                  <h3 className="text-md font-light text-gray-300 mb-2">
                    {person.about?.slice(0, 100)}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <div className="badge badge-outline">
                      Age: {person.age}
                    </div>
                    <div className="badge badge-secondary">
                      {person.gender}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {(!connection || connection.length === 0) && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔗</div>
          <p className="text-xl text-gray-600">
            No connections found. Start connecting with other developers!
          </p>
        </div>
      )}
    </div>
  );
};

export default Connections;
