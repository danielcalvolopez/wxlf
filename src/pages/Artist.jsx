import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import ArtistGallery from "../components/artists/artist/ArtistGallery";
import GalleryCtxProvider from "../context/galleryCtx";
import { useEffect, useState } from "react";

const Artist = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [currentArtistGallery, setCurrentArtistGallery] = useState(undefined);
  const location = useLocation();

  const findArtistGallery = () => {
    if (location.pathname === "/artists/sophie-lee") {
      const findArtist = data.artists.find(
        (artist) => artist.slug === "sophie-lee"
      );
      setCurrentArtistGallery(findArtist?.galleryUrls);
    } else if (location.pathname === "/artists/fred") {
      const findArtist = data.artists.find((artist) => artist.slug === "fred");
      setCurrentArtistGallery(findArtist?.galleryUrls);
    } else if (location.pathname === "/artists/carlos") {
      const findArtist = data.artists.find(
        (artist) => artist.slug === "carlos"
      );
      setCurrentArtistGallery(findArtist?.galleryUrls);
    } else if (location.pathname === "/artists/pol") {
      const findArtist = data.artists.find((artist) => artist.slug === "pol");
      setCurrentArtistGallery(findArtist?.galleryUrls);
    } else {
      navigate("/artists/not-found");
    }
  };

  useEffect(() => {
    findArtistGallery();
  }, [location.pathname]);

  return (
    <GalleryCtxProvider>
      <ArtistGallery gallery={currentArtistGallery} />
    </GalleryCtxProvider>
  );
};

export const artistLoader = async () => {
  const response = await fetch("/data/artists.json");

  return response.json();
};

export default Artist;
