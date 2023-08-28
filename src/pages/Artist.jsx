import { useLocation } from "react-router-dom";
import ArtistGallery from "../components/artists/artist/ArtistGallery";
import GalleryCtxProvider from "../context/galleryCtx";

const Artist = () => {
  const location = useLocation();

  const { gallery } = location.state;

  return (
    <GalleryCtxProvider>
      <ArtistGallery gallery={gallery} />
    </GalleryCtxProvider>
  );
};

export default Artist;
