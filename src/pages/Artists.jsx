import ArtistCard from "../components/artists/ArtistCard";
import useArtists from "../utils/artists/useArtists";
import "./artists.scss";

const Artists = () => {
  const { artists } = useArtists();

  return (
    <div className="artists-container">
      {artists
        ? artists.map(({ name, info, artistPhoto }) => (
            <ArtistCard
              key={name}
              name={name}
              info={info}
              photo={artistPhoto}
            />
          ))
        : null}
    </div>
  );
};

export default Artists;
