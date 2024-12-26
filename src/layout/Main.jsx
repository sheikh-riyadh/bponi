import { Outlet } from "react-router";
import Header from "./Header";
import Theme from "../components/common/Theme";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex my_container">
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <Theme />
    </div>
  );
};

export default Main;
