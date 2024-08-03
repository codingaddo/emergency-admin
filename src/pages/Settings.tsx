import { FaGear } from "react-icons/fa6";
import SettingsNav from "../features/settings/SettingsNav";
import Search from "../features/settings/Search";
import UserCard from "../features/settings/UserCard";

const Settings = () => {
  return (
    <div className="px-5 py-5">
      <div></div>
      <div className="flex items-center gap-2  ">
        <div className="p-1 bg-blue-100 rounded-lg">
          <FaGear size={22} />
        </div>
        <h2 className="text-2xl font-semibold uppercase">Settings</h2>
      </div>
      <SettingsNav />
      <Search />
      <div className="sm:flex flex-wrap sm:gap-4 md:grid grid-cols-2 gap-5 pt-7">
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
        <UserCard userName="Addo Michael" />
      </div>
    </div>
  );
};

export default Settings;
