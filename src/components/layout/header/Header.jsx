import { NavLink } from "react-router-dom";
import "./header.scss";
import Button from "../../UI/Button";
import LangSelector from "../../UI/LangSelector";
import MobileMenu from "../mobile/MobileMenu";
import { useState } from "react";
import useTranslation from "../../../language/useTranslation";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  const { i18n, translate } = useTranslation();

  const handleChange = (value) => {
    setLanguage(value);
    localStorage.setItem("lang", value);
    i18n.changeLanguage(value);
  };

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
          <span datatext={translate("home")}>{translate("home")}</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "current-path nav-item" : "nav-item"
          }
          to="about-us"
        >
          <span datatext={translate("aboutUs")}>{translate("aboutUs")}</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "current-path nav-item" : "nav-item"
          }
          to="artists"
        >
          <span datatext={translate("artists")}>{translate("artists")}</span>
        </NavLink>

        <LangSelector
          handleChange={handleChange}
          setLanguage={setLanguage}
          language={language}
        />

        <NavLink
          className={({ isActive }) => (isActive ? "current-path" : "")}
          to="get-in-touch"
        >
          <Button>{translate("getInTouch")}</Button>
        </NavLink>
      </nav>

      <img
        onClick={handleToggleMenu}
        className="burger-menu"
        src="/burger.png"
        alt=""
      />

      {toggle && (
        <MobileMenu
          handleChange={handleChange}
          language={language}
          setLanguage={setLanguage}
          handleToggleMenu={handleToggleMenu}
        />
      )}
    </div>
  );
};

export default Header;
