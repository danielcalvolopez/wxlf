import { NavLink } from "react-router-dom";
import "./header.scss";
import Button from "../../UI/Button";
import LangSelector from "../../UI/LangSelector";
import MobileMenu from "../mobile/MobileMenu";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="header-container">
      <img src="/main-logo.png" alt="" />
      <nav className="nav-menu">
        <NavLink
          className={({ isActive }) =>
            isActive ? "current-path nav-item" : "nav-item"
          }
          to="/"
        >
          <span datatext="home">Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "current-path nav-item" : "nav-item"
          }
          to="about-us"
        >
          <span datatext="about us">About Us</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "current-path nav-item" : "nav-item"
          }
          to="artists"
        >
          <span datatext="artists">Artists</span>
        </NavLink>

        <LangSelector />

        <NavLink
          className={({ isActive }) => (isActive ? "current-path" : "")}
          to="get-in-touch"
        >
          <Button>get in touch</Button>
        </NavLink>
      </nav>

      <img
        onClick={handleToggleMenu}
        className="burger-menu"
        src="/burger.png"
        alt=""
      />

      {toggle && <MobileMenu handleToggleMenu={handleToggleMenu} />}
    </div>
  );
};

export default Header;
