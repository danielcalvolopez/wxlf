import "./button.scss";
import { HiArrowLongRight } from "react-icons/hi2";

const Button = ({ children, btnClassName }) => {
  return (
    <div className={`button-wrapper ${btnClassName ? btnClassName : ""}`}>
      <button type="submit">{children}</button>
      <HiArrowLongRight className="arrow" size={25} />
    </div>
  );
};

export default Button;
