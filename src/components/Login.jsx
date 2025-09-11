import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { toast } from "react-toastify";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLoginOpen ? "login" : "signup";
      const payload = isLoginOpen
        ? { email: mail, password }
        : { firstName, lastName, email: mail, password };

      const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);

      dispatch(addUser(response.data.data));
      toast.success(response.data.message);

      const token = response?.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      }

      setFirstName("");
      setLastName("");
      setMail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center pt-48 max-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[400px] text-center border border-zinc-300/60 dark:border-zinc-700 rounded-2xl px-8 bg-white dark:bg-base-200"
      >
        <h1 className="text-zinc-900 dark:text-white text-3xl mt-10 font-medium">
          {isLoginOpen ? "Login" : "Register"}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 pb-6">
          {isLoginOpen ? "Welcome Back" : "Please sign up to continue"}
        </p>

        {!isLoginOpen && (
          <>
            <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <input
                type="text"
                placeholder="Firstname"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <input
                type="text"
                placeholder="Lastname"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
      
          <input
            type="email"
            placeholder="Email id"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
         
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-info-content cursor-pointer hover:opacity-90 transition-opacity"
        >
          {isLoginOpen ? "Login" : "Register"}
        </button>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 mb-11">
          {isLoginOpen ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            className="text-indigo-500 dark:text-white cursor-pointer"
          >
            {isLoginOpen ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
