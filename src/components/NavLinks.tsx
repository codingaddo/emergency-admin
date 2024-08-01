import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
  name: string;
  children?: React.ReactNode;
}
const NavLinks = ({ to, name, children }: LinkProps) => {
  return (
    <NavLink
      to={to}
      className="flex items-center text-center hover:bg-[#f0f8ff] w-[250px] gap-5 pl-14  p-[8px] rounded-l-full "
    >
      {children}
      <span className="text-[17px] text-blue-950 font-semibold">{name}</span>
    </NavLink>
  );
};

export default NavLinks;
