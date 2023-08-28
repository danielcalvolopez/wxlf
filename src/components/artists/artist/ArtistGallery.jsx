import { useContext } from "react";
import ArtistGalleryItem from "./ArtistGalleryItem";
import ArtistGalleryItemModal from "./ArtistGalleryItemModal";
import "./artist-gallery.scss";
import { galleryCtx } from "../../../context/galleryCtx";

const ArtistGallery = ({ gallery }) => {
  const { modalOpen, handleModal } = useContext(galleryCtx);

  return (
    <>
      {modalOpen && <ArtistGalleryItemModal gallery={gallery} />}
      <div className="gallery">
        {gallery.map((item, index) => (
          <ArtistGalleryItem
            handleModal={() => handleModal(index)}
            key={item}
            img={item}
          />
        ))}
      </div>
    </>
  );
};

export default ArtistGallery;
