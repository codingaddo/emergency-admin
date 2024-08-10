import Logout from "../features/complaints/Logout";
import ToggleMenu from "../features/complaints/ToggleMenu";
import { useAuth } from "../hooks/getUser";
const Header = () => {
  const user = useAuth();
  const username = user.user.data.user.name;

  return (
    <div className="header bg-gray-200 p-5 flex justify-between items-center px-5 shadow-lg">
      <h1 className="text-gray-900 font-medium">
        @Admin: <span>{username}</span>
      </h1>
      <div className="sm:hidden lg:block">
        <Logout />
      </div>
      <div className="lg:hidden sm:block">
        <ToggleMenu />
      </div>
    </div>
  );
};

export default Header;
