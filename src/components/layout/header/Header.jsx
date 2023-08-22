import { NavLink } from "react-router-dom";
import "./header.scss";
import Button from "../../UI/Button";
import LangSelector from "../../UI/LangSelector";

const Header = () => {
  return (
    <div className="header-container">
      <img src="/main-logo.png" alt="" />
      <nav className="nav-menu">
        <NavLink
          className={({ isActive }) => (isActive ? "current-path" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "current-path" : "")}
          to="about-us"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "current-path" : "")}
          to="artists"
        >
          Artists
        </NavLink>

        <LangSelector />

        <NavLink
          className={({ isActive }) => (isActive ? "current-path" : "")}
          to="get-in-touch"
        >
          <Button>get in touch</Button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
