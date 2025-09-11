import { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { toast } from "react-toastify";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    photoUrl: user.photoUrl || "",
    age: user.age || "",
    gender: user.gender || "",
    about: user.about || "",
    skills: Array.isArray(user.skills) ? user.skills.join(", ") : "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      skills: formData.skills
        ? formData.skills.split(",").map((s) => s.trim())
        : [],
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${BASE_URL}/profile/edit`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(addUser(response.data.data));
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className="flex justify-center p-12 gap-12 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[500px] text-center border border-zinc-300/60 dark:border-zinc-700 rounded-2xl px-8 py-8 bg-white dark:bg-base-200"
      >
        <h1 className="text-zinc-900 dark:text-white text-3xl font-medium">
          Edit Profile
        </h1>

        {/* First Name */}
        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6">
          <input
            type="text"
            placeholder="Last Name"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
            required
          />
        </div>

        {/* Photo URL */}
        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6">
          <input
            type="url"
            placeholder="Photo URL"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleOnChange}
          />
        </div>

        {/* Gender */}
        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full pl-6 pr-3">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleOnChange}
            className="bg-transparent text-zinc-600 dark:text-zinc-200 outline-none text-sm w-full h-full"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Age */}
        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6">
          <input
            type="number"
            value={formData.age}
            onChange={handleOnChange}
            placeholder="Age"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="age"
            min="0"
          />
        </div>

        {/* Skills */}
        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6">
          <input
            type="text"
            placeholder="Skills (comma separated)"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="skills"
            value={formData.skills}
            onChange={handleOnChange}
          />
        </div>

        {/* About */}
        <div className="flex items-start w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 rounded-2xl overflow-hidden p-4">
          <textarea
            placeholder="About you..."
            value={formData.about}
            onChange={handleOnChange}
            className="bg-transparent resize-none text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-28"
            name="about"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-info-content cursor-pointer hover:opacity-90 transition-opacity"
        >
          Save Profile
        </button>
      </form>

      <div className="w-80 h-96">
        <UserCard
          user={{
            firstName: formData.firstName,
            lastName: formData.lastName,
            photoUrl: formData.photoUrl,
            gender: formData.gender,
            age: formData.age,
            email: formData.email,
            about: formData.about,
          }}
        />
      </div>
    </div>
  );
};

export default EditProfile;
