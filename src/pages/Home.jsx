import HorizontalBars from "../components/designShapes/HorizontalBars";
import Hero from "../components/home/Hero";
import Signature from "../components/layout/footer/Signature";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <HorizontalBars />
      <Signature />
    </div>
  );
};

export default Home;
