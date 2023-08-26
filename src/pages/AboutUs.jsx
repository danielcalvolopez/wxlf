import "./about-us.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="image-wrapper">
        <img className="about-us-img" src="/photos/about-us.jpg" alt="" />
      </div>
      <p className="about-us-text">
        Minimalist tattoo studio based in <span> Murcia </span>(Spain). Our goal
        is to transform your tattoo idea into reality using the most advanced
        techniques. We guarantee the best quality, so you can rest assure that
        your tattoo will look spectacular.
      </p>
    </div>
  );
};

export default AboutUs;
