import { Outlet } from "react-router-dom";
import Footer from "../components/layout/footer/Footer";
import Title from "../components/layout/Title";

const PagesLayout = () => {
  return (
    <>
      <Title />
      <Outlet />
      <Footer />
    </>
  );
};

export default PagesLayout;
