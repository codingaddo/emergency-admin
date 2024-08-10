import { MdLogout } from "react-icons/md";
import { useAuth } from "../hooks/getUser";
import { useLogout } from "../hooks/useLogout";
const Header = () => {
  const user = useAuth();
  const { logoutFn, isLoading } = useLogout();
  const username = user.user.data.user.name;

  return (
    <div className="header bg-gray-200 p-5 flex justify-between items-center px-5 shadow-lg">
      <h1 className="text-gray-900 font-medium">
        @Admin: <span>{username}</span>
      </h1>
      <button
        onClick={() => logoutFn()}
        disabled={isLoading}
        className="flex items-center justify-center gap-2 bg-[#f0f8ff] p-2 rounded-lg px-4 hover:bg-[#deefff] shadow-md transition-all duration-300"
      >
        {isLoading ? (
          "logging out..."
        ) : (
          <>
            <span>Logout</span>
            <MdLogout />
          </>
        )}
      </button>
    </div>
  );
};

export default Header;
