import Button from "../UI/Button";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>
          where <span>tattoos</span> meet fine <span>art</span>
        </h2>
        <p>
          Discover the range of our residents, from minimalism to realism,
          passing through fine line, japanese and aesthetic.
        </p>
        <Button>explore</Button>
      </div>

      <img className="hero-image" src="/photos/home.jpg" alt="" />
    </div>
  );
};

export default Hero;
