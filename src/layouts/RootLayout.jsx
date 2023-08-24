import { Outlet, useLocation, useRoutes } from "react-router-dom";
import Header from "../components/layout/header/Header";
import "./root-layout.scss";

const RootLayout = () => {
  const location = useLocation();

  const currentPath = location.pathname.slice(1);

  return (
    <div className={`main-content `}>
      <div className="main-content-wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
