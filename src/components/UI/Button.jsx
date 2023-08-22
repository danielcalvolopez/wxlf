import "./button.scss";
import { HiArrowLongRight } from "react-icons/hi2";

const Button = ({ children, className }) => {
  return (
    <div className={`button-wrapper ${className}`}>
      <button type="submit">{children}</button>
      <HiArrowLongRight className="arrow" size={25} />
    </div>
  );
};

export default Button;
