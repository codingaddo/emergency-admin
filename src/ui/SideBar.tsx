import NavBar from "../components/NavBar";
import { MdOutlineSecurity } from "react-icons/md";
import { useAuth } from "../hooks/getUser";
import Logout from "../features/complaints/Logout";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const SideBar = () => {
  const user = useAuth();
  const service = user.user.data.user.serviceType;
  const isShow = useSelector((state: RootState) => state.modal.isShow);

  return (
    <div
      className={
        isShow
          ? `sideBar show  bg-gray-200 sm:pt-10 lg:pt-28 pl-2 gap-4 flex  items-center shadow-lg`
          : `sideBar hide bg-gray-200 sm:pt-10 lg:pt-28 pl-2 gap-4 flex  items-center shadow-lg`
      }
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center">
          <MdOutlineSecurity size={40} />
          <img src="" alt="logo" />
        </div>
        <h2 className="text-lg font-bold capitalize">
          Ghana {service} Service
        </h2>
      </div>
      <div className=" pt-10 ">
        <NavBar />
      </div>
      <div className="sm:block lg:hidden sm:pt-10 sm:pb-10">
        <Logout />
      </div>
    </div>
  );
};

export default SideBar;
