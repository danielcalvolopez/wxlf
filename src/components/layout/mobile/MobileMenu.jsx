import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop";
import "./mobile-menu.scss";
import { HiChevronDown, HiChevronUp, HiMiniCheck } from "react-icons/hi2";
import { useState } from "react";
import useTranslation from "../../../language/useTranslation";

const MobileMenu = ({
  handleToggleMenu,
  language,
  setLanguage,
  handleChange,
}) => {
  const [isActive, setIsActive] = useState(false);
  const { translate } = useTranslation();

  const handleAccordion = () => {
    setIsActive((prev) => !prev);
  };

  const handleClickLanguage = (event) => {
    setLanguage(event.target.id);
    localStorage.setItem("lang", event.target.id);
    handleChange(event.target.id);
    handleAccordion();
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
            {translate("home")}
          </NavLink>
          <NavLink
            onClick={handleToggleMenu}
            className="menu-item"
            to="/about-us"
          >
            {translate("aboutUs")}
          </NavLink>
          <NavLink
            onClick={handleToggleMenu}
            className="menu-item"
            to="/artists"
          >
            {translate("artists")}
          </NavLink>
          <NavLink
            onClick={handleToggleMenu}
            className="menu-item"
            to="/get-in-touch"
          >
            {translate("getInTouch")}
          </NavLink>

          <div className="language">
            <div onClick={handleAccordion} className="language-button">
              <p>{language}</p>
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
                <p
                  onClick={handleClickLanguage}
                  id="es"
                  className={`${language === "es" && "check"}`}
                >
                  ES {language === "es" && <HiMiniCheck className="check" />}
                </p>
                <p
                  onClick={handleClickLanguage}
                  id="en"
                  className={`${language === "en" && "check"}`}
                >
                  EN {language === "en" && <HiMiniCheck className="check" />}
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
