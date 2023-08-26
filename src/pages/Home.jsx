import HorizontalBars from "../components/designShapes/HorizontalBars";
import Hero from "../components/home/Hero";
import useArtists from "../utils/artists/useArtists";
import "./home.scss";

const Home = () => {
  const { artists } = useArtists();
  console.log(artists);
  return (
    <div className="home-page">
      <Hero />
      <HorizontalBars />
    </div>
  );
};

export default Home;
