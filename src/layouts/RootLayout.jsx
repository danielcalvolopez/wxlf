import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/header/Header";
import "./root-layout.scss";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const location = useLocation();
  const [isArtistPage, setIsArtistPage] = useState(undefined);

  useEffect(() => {
    location.pathname === "artists";
  }, []);
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
