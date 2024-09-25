import { FaGear } from "react-icons/fa6";
import SettingsNav from "../features/settings/SettingsNav";
// import Search from "../features/settings/Search";
import { IoMdArrowBack } from "react-icons/io";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Settings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="px-5 pb-32 pt-5">
      <div>
        <div className="flex items-center justify-between  ">
          <div className=" flex items-center gap-2 ">
            <span className="p-1 bg-blue-100 rounded-lg">
              <FaGear size={22} />
            </span>
            <h2 className="text-2xl font-semibold uppercase">Settings</h2>
          </div>
          {location.pathname.includes("user-details") && (
            <span className="p-1 bg-blue-100 rounded-lg">
              <IoMdArrowBack
                size={25}
                className="cursor-pointer"
                onClick={() => navigate(-1)}
              />
            </span>
          )}
        </div>
        {!location.pathname.includes("user-details") ? (
          <SettingsNav />
        ) : (
          <h1 className="text-2xl text-center pb-3 font-semibold text-blue-950">
            Agent Info
          </h1>
        )}
      </div>
      {/* {!location.pathname.includes("user-details") &&
        !location.pathname.includes("add-agent") && <Search />} */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
