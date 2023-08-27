import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/layout/footer/Footer";
import Title from "../components/layout/Title";
import { useEffect, useState } from "react";

const PagesLayout = () => {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(undefined);

  const getCurrentPath = () => {
    if (location.pathname === "/about-us") {
      setCurrentPath("about us");
    }
    if (location.pathname === "/artists") {
      setCurrentPath("artists");
    }
    if (location.pathname === "/get-in-touch") {
      setCurrentPath("get in touch");
    }
    if (location.pathname === "/artists/sophie-lee") {
      setCurrentPath("sophie lee");
    }
    if (location.pathname === "/artists/pol") {
      setCurrentPath("pol");
    }
    if (location.pathname === "/artists/carlos") {
      setCurrentPath("carlos");
    }
    if (location.pathname === "/artists/fred") {
      setCurrentPath("fred");
    }
    return;
  };

  useEffect(() => {
    getCurrentPath();
  }, [location.pathname]);

  return (
    <>
      <Title title={currentPath} />
      <Outlet />
      <Footer />
    </>
  );
};

export default PagesLayout;
