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
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              <span className="text-3xl">💝</span>
              <span>DevTinder</span>
            </Link>
          </div>

          {user && (
            <div className="flex items-center space-x-4">
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 font-medium"
                >
                  Discover
                </Link>
                <Link
                  to="/connections"
                  className="px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 font-medium"
                >
                  Connections
                </Link>
                <Link
                  to="/pending-connections"
                  className="px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 font-medium"
                >
                  Requests
                </Link>
              </div>

              {/* User Menu */}
              <div className="relative">
                <div className="dropdown dropdown-end">
                  <div className="flex items-center space-x-3">
                    <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Hi, {user?.firstName}!
                    </span>
                    <div
                      tabIndex={0}
                      role="button"
                      className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-200 dark:border-purple-600 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-200 cursor-pointer hover:scale-110"
                    >
                      <img
                        alt="Profile"
                        src={
                          user?.photoUrl ||
                          "https://via.placeholder.com/40x40?text=U"
                        }
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/40x40?text=U";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-2xl z-50 mt-3 w-64 p-3 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md"
                  >
                    <li className="mb-2">
                      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                        <img
                          src={user?.photoUrl || "https://via.placeholder.com/32x32?text=U"}
                          alt="Profile"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-white text-sm">
                            {user?.firstName} {user?.lastName}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link 
                        to="/profile" 
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <span className="text-lg">👤</span>
                        <span>Edit Profile</span>
                      </Link>
                    </li>
                    <li className="md:hidden">
                      <Link 
                        to="/connections"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <span className="text-lg">👥</span>
                        <span>Connections</span>
                      </Link>
                    </li>
                    <li className="md:hidden">
                      <Link 
                        to="/pending-connections"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <span className="text-lg">⏳</span>
                        <span>Pending Requests</span>
                      </Link>
                    </li>
                    <li>
                      <button 
                        onClick={handleLogout}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-colors duration-200 w-full"
                      >
                        <span className="text-lg">🚪</span>
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
