import { MdLogout } from "react-icons/md";
const Header = () => {
  return (
    <div className="header bg-gray-200 p-5 flex justify-between items-center px-5 shadow-lg">
      <h1 className="text-gray-900 font-medium">
        @Admin: <span>Addo Michael</span>
      </h1>
      <button className="flex items-center justify-center gap-2 bg-[#f0f8ff] p-2 rounded-lg px-4 hover:bg-[#deefff] shadow-md transition-all duration-300">
        <span>Logout</span>
        <MdLogout />
      </button>
    </div>
  );
};

export default Header;
