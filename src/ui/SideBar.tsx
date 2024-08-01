import NavBar from "../components/NavBar";
import { MdOutlineSecurity } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="sideBar bg-gray-200 pt-28 pl-2 gap-4 flex  items-center shadow-lg">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center">
          <MdOutlineSecurity size={40} />
          <img src="" alt="logo" />
        </div>
        <h2 className="text-lg font-bold">Ghana Police Service</h2>
      </div>
      <div className=" pt-10 ">
        <NavBar />
      </div>
    </div>
  );
};

export default SideBar;
