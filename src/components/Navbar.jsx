import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      dispatch(removeUser());
      navigate("/login");
      toast.success(response.data?.message || "Logged out successfully");
    } catch (error) {
      console.log("Logout failed:", error);
      toast.error(
        error.response?.data?.message || "Logout failed, but session cleared!"
      );
    }
  };

  return (
    <div className="navbar bg-info-content shadow-sm sticky top-0">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          🧑🏻‍💻 Dev-Tinder
        </Link>
      </div>

      {user && (
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-4 flex">
            <p className="mt-2 mr-2">Welcome, {user?.firstName}</p>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src={
                    user?.photoUrl ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-10 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Friends</Link>
              </li>
              <li>
                <Link to="/pending-connections">Pending Friend Request</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
