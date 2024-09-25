import React from "react";

interface UserDetailsProps {
  imageUrl: string;
  name: string;
  phone: string;
  email: string;
  role: "Admin" | "Responder" | "User";
}

const UserDetails: React.FC<UserDetailsProps> = ({
  imageUrl,
  name,
  phone,
  email,
  role,
}) => {
  return (
    <div className=" px-10 py-5 bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          {/* User Profile Image */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src={imageUrl || "/src/assets/default.jpg"}
              alt={`${name}'s profile`}
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-300"
            />
          </div>

          {/* User Info */}
          <div className="md:ml-8 flex-1">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Role:</strong> {role}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> {phone}
            </p>
          </div>
        </div>

        {/* Additional Info or Actions */}
        <div className="mt-8 flex gap-10 text-center md:text-left">
          {/* Add any actions like buttons for editing user, etc. */}
          <button className="bg-blue-500 text-white py-2 px-7 rounded-md hover:bg-blue-600">
            Edit User
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600">
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
