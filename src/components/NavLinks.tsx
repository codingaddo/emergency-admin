import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
  name: string;
  children?: React.ReactNode;
  onClick: () => void;
}
const NavLinks = ({ to, name, children, onClick }: LinkProps) => {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className=" nav flex items-center  text-center hover:bg-[#f0f8ff] w-[250px] gap-1 pl-14  p-[8px] rounded-l-full "
    >
      {children}
      <span className="text-[18px] text-end text-blue-950 font-semibold">
        {name}
      </span>
    </NavLink>
  );
};

export default NavLinks;
