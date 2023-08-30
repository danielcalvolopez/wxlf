import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/Header";
import "./root-layout.scss";

const RootLayout = () => {
  return (
    <div className="main-content">
      <div className="main-content-wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
