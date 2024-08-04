import { FaUserLarge } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
// import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { MdOutlineMenuOpen } from "react-icons/md";

const SettingsNav = () => {
  return (
    <div className="flex flex-col gap-2 py-3 ">
      <div className="flex justify-around bg-blue-950">
        <NavLinks to="all-agents" name="All Agents">
          <FaUserLarge color="#f0f8ff" />
        </NavLinks>
        <NavLinks to="add-agent" name="Add Agents">
          <FaPlusCircle color="#f0f8ff" />
        </NavLinks>
      </div>
    </div>
  );
};

export default SettingsNav;

interface LinkProps {
  to: string;
  name: string;
  children?: React.ReactNode;
}
const NavLinks = ({ to, name, children }: LinkProps) => {
  return (
    <NavLink
      to={to}
      className=" nav-set flex items-center  text-center border-x hover:bg-[#2e4d64] w-[100%] gap-1 pl-14  p-[8px]"
    >
      {children}
      <span className="text-[16px] text-end text-[#f0f8ff] font-semibold">
        {name}
      </span>
    </NavLink>
  );
};
