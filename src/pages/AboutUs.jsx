import useTranslation from "../language/useTranslation";
import "./about-us.scss";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { translate } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="about-us"
    >
      <div className="image-wrapper">
        <img className="about-us-img" src="/photos/about-us.jpg" alt="" />
      </div>
      <p className="about-us-text">
        <span>{translate("minimalistStudio")}</span>{" "}
        <span className="color"> Murcia </span>
        <span>{translate("spain")}</span>
      </p>
    </motion.div>
  );
};

export default AboutUs;
