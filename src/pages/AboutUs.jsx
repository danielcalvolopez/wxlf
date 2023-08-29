import useTranslation from "../language/useTranslation";
import "./about-us.scss";

const AboutUs = () => {
  const { translate } = useTranslation();
  return (
    <div className="about-us">
      <div className="image-wrapper">
        <img className="about-us-img" src="/photos/about-us.jpg" alt="" />
      </div>
      <p className="about-us-text">
        <span>{translate("minimalistStudio")}</span>{" "}
        <span className="color"> Murcia </span>
        <span>{translate("spain")}</span>
      </p>
    </div>
  );
};

export default AboutUs;
