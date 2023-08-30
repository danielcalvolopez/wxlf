import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "./hero.scss";
import useTranslation from "../../language/useTranslation";
import { motion } from "framer-motion";

const Hero = () => {
  const { translate } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hero"
    >
      <div className="hero-text">
        <motion.h2>
          <span>{translate("where")}</span>{" "}
          <span className="color">tattoos </span>
          <span>{translate("meetFine")} </span>
          <span className="color">{translate("art")}</span>
        </motion.h2>
        <p>{translate("heroText")}</p>
        <Link to="artists">
          <Button>{translate("explore")}</Button>
        </Link>
      </div>

      <img className="hero-image" src="/photos/home.jpg" alt="" />
    </motion.div>
  );
};

export default Hero;
