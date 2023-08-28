import { useLocation } from "react-router-dom";
import "./button.scss";
import { HiArrowLongRight } from "react-icons/hi2";

const Button = ({ children, btnClassName }) => {
  const location = useLocation();
  return (
    <div className={`button-wrapper ${btnClassName ? btnClassName : ""}`}>
      <button
        type="submit"
        className={`${
          location.pathname === "/get-in-touch" ? "active-button" : ""
        }`}
      >
        {children}
      </button>
      <HiArrowLongRight className="arrow" size={25} />
    </div>
  );
};

export default Button;
