import { useState } from "react";
import "./lang-selector.scss";
import { HiChevronDown, HiMiniCheck } from "react-icons/hi2";
import Backdrop from "./Backdrop";
import { AnimatePresence, motion } from "framer-motion";

const LangSelector = ({ handleChange, setLanguage, language }) => {
  const [toggle, setToggle] = useState(false);

  const handleLanguageModal = () => {
    setToggle((prev) => !prev);
  };

  const handleClickLanguage = (event) => {
    setLanguage(event.target.id);
    localStorage.setItem("lang", event.target.id);
    handleChange(event.target.id);
    handleLanguageModal();
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {toggle && <Backdrop onClick={handleLanguageModal} />}
      </AnimatePresence>
      <div className="lang-wrapper">
        <div onClick={handleLanguageModal} className="lang">
          <span>{language}</span>
          <HiChevronDown />
        </div>
        <AnimatePresence mode="wait">
          {toggle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="dropdown"
            >
              <div className="option">
                <p
                  onClick={handleClickLanguage}
                  id="es"
                  className={`option-text ${language === "es" && "check"}`}
                >
                  ES {language === "es" && <HiMiniCheck className="check" />}
                </p>
              </div>
              <div className="option">
                <p
                  onClick={handleClickLanguage}
                  id="en"
                  className={`option-text ${language === "en" && "check"}`}
                >
                  EN {language === "en" && <HiMiniCheck className="check" />}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LangSelector;
