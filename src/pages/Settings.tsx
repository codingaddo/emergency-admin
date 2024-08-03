import { FaGear } from "react-icons/fa6";
import SettingsNav from "../features/settings/SettingsNav";
import Search from "../features/settings/Search";
import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div className="px-5 pb-32 pt-5">
      <div></div>
      <div className="flex items-center gap-2  ">
        <div className="p-1 bg-blue-100 rounded-lg">
          <FaGear size={22} />
        </div>
        <h2 className="text-2xl font-semibold uppercase">Settings</h2>
      </div>
      <SettingsNav />
      <Search />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
