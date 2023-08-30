import { useLocation } from "react-router-dom";
import "./button.scss";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const Button = ({ children, btnClassName }) => {
  const location = useLocation();
  return (
    <motion.div
      className={`button-wrapper ${btnClassName ? btnClassName : ""}`}
    >
      <button
        type="submit"
        className={`${
          location.pathname === "/get-in-touch" ? "active-button" : ""
        }`}
      >
        {children}
      </button>
      <motion.span
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HiArrowLongRight className="arrow" size={25} />
      </motion.span>
    </motion.div>
  );
};

export default Button;
