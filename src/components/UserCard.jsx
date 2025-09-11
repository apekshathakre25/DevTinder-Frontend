const UserCard = ({ user, onAction }) => {
  const { _id, firstName, lastName, photoUrl, gender, age, email, about } =
    user;

  return (
    <div className="w-full h-full">
      <div className="bg-base-200 rounded-2xl shadow-xl p-6 text-center flex flex-col justify-between h-full border-2 border-gray-300">
        <div className="flex-1">
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`}
            className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-200 shadow-md object-cover"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">
            {firstName} {lastName}
          </h2>
          <p className="text-gray-300">{email}</p>

          <div className="mt-3 space-y-1 text-gray-500">
            <p className="text-sm">
              <span className="font-medium">Age:</span> {age}
            </p>
            <p className="text-sm">
              <span className="font-medium">Gender:</span> {gender}
            </p>
            {about && (
              <p className="text-xs italic text-gray-400 mt-2 line-clamp-2">
                "{about}"
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => onAction("ignored", _id)}
            className="px-6 py-3 cursor-pointer bg-red-500 text-white text-sm font-medium rounded-full shadow-lg hover:bg-red-600 transition-all transform hover:scale-105"
          >
            ❌ Ignore
          </button>
          <button
            onClick={() => onAction("interested", _id)}
            className="px-6 py-3 cursor-pointer bg-green-500 text-white text-sm font-medium rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
          >
            ❤️ Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
