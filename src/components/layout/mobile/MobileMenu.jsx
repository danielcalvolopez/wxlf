import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop";
import "./mobile-menu.scss";

const MobileMenu = ({ handleToggleMenu }) => {
  return (
    <>
      <Backdrop onClick={handleToggleMenu} />

      <div className="mobile-menu">
        <div onClick={handleToggleMenu} className="close">
          <img className="icon" src="/close.png" alt="" />
        </div>
        <nav className="menu">
          <NavLink onClick={handleToggleMenu} className="menu-item" to="/">
            home <span>*</span>
          </NavLink>
          <NavLink
            onClick={handleToggleMenu}
            className="menu-item"
            to="/about-us"
          >
            about us
          </NavLink>
          <NavLink
            onClick={handleToggleMenu}
            className="menu-item"
            to="/artists"
          >
            artists
          </NavLink>
          <NavLink
            onClick={handleToggleMenu}
            className="menu-item"
            to="/get-in-touch"
          >
            get in touch
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
