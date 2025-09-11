import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-base-100 h-screen flex items-center justify-center gap-16">
      <EditProfile user={user} />
    </div>
  );
};

export default Profile;
