import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../pages/AppBar";

const Layout = () => {
  return (
    <>
      <div className="routet">
        <PrimarySearchAppBar/>
      <div className="mx-auto" >
        <Outlet />
      </div>
      </div>
    </>
  );
};

export default Layout;
