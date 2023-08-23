import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop";
import "./mobile-menu.scss";
import { HiChevronDown, HiChevronUp, HiMiniCheck } from "react-icons/hi2";
import { useState } from "react";

const MobileMenu = ({ handleToggleMenu }) => {
  const [isActive, setIsActive] = useState(false);
  const handleAccordion = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <Backdrop onClick={handleToggleMenu} />

      <div className="mobile-menu">
        <div onClick={handleToggleMenu} className="close">
          <img className="icon" src="/close.png" alt="" />
        </div>
        <nav className="menu">
          <NavLink onClick={handleToggleMenu} className="menu-item" to="/">
            home
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

          <div className="language">
            <div onClick={handleAccordion} className="language-button">
              <p>Language</p>
              <span>
                {isActive ? (
                  <HiChevronUp size={17} />
                ) : (
                  <HiChevronDown size={17} />
                )}
              </span>
            </div>
            {isActive && (
              <div className="options">
                <p>ES </p>
                <p>
                  EN <HiMiniCheck className="check" />
                </p>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
