import { useLoaderData } from "react-router-dom";
import ArtistCard from "../components/artists/ArtistCard";
import "./artists.scss";

const Artists = () => {
  const data = useLoaderData();

  const artists = data.artists;

  return (
    <div className="artists-container">
      {artists?.map(({ name, info, infoSpanish, artistPhoto, slug }) => (
        <ArtistCard
          key={name}
          name={name}
          info={info}
          slug={slug}
          photo={artistPhoto}
          infoSpanish={infoSpanish}
        />
      ))}
    </div>
  );
};

export const artistsLoader = async () => {
  const response = await fetch("/json/artists.json");

  return response.json();
};

export default Artists;
