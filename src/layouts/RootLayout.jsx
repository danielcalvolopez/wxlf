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
    ${currentPath === "about-us" && "about-us"}
    ${currentPath === "artists" && "artists"}
    ${currentPath === "get-in-touch" && "get-in-touch"}
    ${currentPath.length >= 12 && "artist"}
    `}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
