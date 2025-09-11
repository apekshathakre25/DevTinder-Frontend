import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { addUser } from "../store/userSlice";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const hydrate = async () => {
    if (token && !user) {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/profile/view`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(addUser(response.data.data));
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    hydrate();
  }, [token, user, dispatch]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (token && !user && loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  return children;
};

export default ProtectedRoute;
