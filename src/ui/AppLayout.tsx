import SideBar from "./SideBar";
import Header from "./Header";
import Main from "./Main";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="applayout">
      <SideBar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default AppLayout;
