const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow mb-8">
      <img
        src="https://i.pravatar.cc/100"
        alt="avatar"
        className="w-16 h-16 rounded-full"
      />

      <div>
        <h3 className="font-bold">
          {user.userFirstName} {user.userLastName}
        </h3>

        <p className="text-gray-500">{user.userEmail}</p>
      </div>
    </div>
  );
};

export default UserProfile;
