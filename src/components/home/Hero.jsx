import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "./hero.scss";
import useTranslation from "../../language/useTranslation";

const Hero = () => {
  const { translate } = useTranslation();
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>
          <span>{translate("where")}</span>{" "}
          <span className="color">tattoos </span>
          <span>{translate("meetFine")} </span>
          <span className="color">{translate("art")}</span>
        </h2>
        <p>{translate("heroText")}</p>
        <Link to="artists">
          <Button>{translate("explore")}</Button>
        </Link>
      </div>

      <img className="hero-image" src="/photos/home.jpg" alt="" />
    </div>
  );
};

export default Hero;
