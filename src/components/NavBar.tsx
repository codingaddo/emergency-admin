import NavLink from "./NavLinks";
import { MdDashboard } from "react-icons/md";
// import { IoMdStats } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleShow } from "../features/slices/modalSlice";
import { useAuth } from "../hooks/getUser";

const NavBar = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleShow());
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <NavLink to="dashboard" name="Dashboard" onClick={handleToggle}>
        <MdDashboard size={22} />
      </NavLink>
      <NavLink to="complaints" name="Complaints" onClick={handleToggle}>
        <IoMdNotifications size={26} />
      </NavLink>
      {user.data.user.role === "admin" && (
        <NavLink to="settings" name="Settings" onClick={handleToggle}>
          <FaGear size={21} />
        </NavLink>
      )}
      <NavLink to="help" name="Help and Tips" onClick={handleToggle}>
        <MdTipsAndUpdates size={25} />
      </NavLink>
    </div>
  );
};

export default NavBar;
