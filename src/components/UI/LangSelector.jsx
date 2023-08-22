import { useState } from "react";
import "./lang-selector.scss";
import { HiChevronDown, HiMiniCheck } from "react-icons/hi2";

const LangSelector = () => {
  const [toggle, setToggle] = useState(false);

  const handleLanguageModal = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      {toggle && <div onClick={handleLanguageModal} className="backdrop" />}
      <div className="lang-wrapper">
        <div onClick={handleLanguageModal} className="lang">
          <span>EN</span>
          <HiChevronDown />
        </div>
        {toggle && (
          <div className="dropdown">
            <div className="option">
              <p className="option-text">ES</p>
            </div>
            <div className="option">
              <p className="option-text">EN</p>
              <HiMiniCheck />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LangSelector;
