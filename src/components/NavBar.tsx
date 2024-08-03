import NavLink from "./NavLinks";
import { MdDashboard } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <NavLink to="dashboard" name="Dashboard">
        <MdDashboard size={25} />
      </NavLink>
      <NavLink to="complaints" name="Complaints">
        <IoMdNotifications size={25} />
      </NavLink>
      <NavLink to="stat" name="Statistics">
        <IoMdStats size={25} />
      </NavLink>
      <NavLink to="settings" name="Settings">
        <FaGear size={25} />
      </NavLink>
    </div>
  );
};

export default NavBar;
