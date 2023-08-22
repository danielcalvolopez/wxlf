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
          className={({ isActive }) =>
            isActive ? "current-path nav-item" : "nav-item"
          }
          to="/"
        >
          <span dataText="home">Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "current-path nav-item" : "nav-item"
          }
          to="about-us"
        >
          <span dataText="about us">About Us</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "current-path nav-item" : "nav-item"
          }
          to="artists"
        >
          <span dataText="artists">Artists</span>
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
