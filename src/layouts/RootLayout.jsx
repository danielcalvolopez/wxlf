import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import "./root-layout.scss";

const RootLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  return (
    <div
      className={`main-content 
    ${currentPath === "" && "home"}
    ${currentPath === "about-us" && "about"}
    ${currentPath === "artists" && "artists"}
    ${currentPath === "get-in-touch" && "get-in-touch"}
    ${currentPath.length >= 12 && "artist"}
    `}
    >
      <div className="main-content-wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
