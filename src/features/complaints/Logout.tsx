import { MdLogout } from "react-icons/md";
import { useLogout } from "../../hooks/useLogout";

const Logout = () => {
  const { logoutFn, isLoading } = useLogout();

  return (
    <button
      onClick={() => logoutFn()}
      disabled={isLoading}
      className="flex items-center justify-center gap-2 bg-[#f0f8ff]  p-2 rounded-lg px-4 hover:bg-[#deefff] lg:shadow-md transition-all duration-300"
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
  );
};

export default Logout;
