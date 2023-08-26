import { useEffect, useState } from "react";

const useArtists = () => {
  const [artists, setArtists] = useState(undefined);
  const [error, setError] = useState(undefined);

  const fetchArtists = async () => {
    try {
      const response = await fetch("src/utils/artists/artists.json");
      const artists = await response.json();
      setArtists(artists.artists);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return { artists, error };
};

export default useArtists;
