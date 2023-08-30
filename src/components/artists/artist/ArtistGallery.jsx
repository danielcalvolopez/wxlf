import { useContext } from "react";
import ArtistGalleryItem from "./ArtistGalleryItem";
import ArtistGalleryItemModal from "./ArtistGalleryItemModal";
import "./artist-gallery.scss";
import { galleryCtx } from "../../../context/galleryCtx";
import { AnimatePresence } from "framer-motion";

const ArtistGallery = ({ gallery }) => {
  const { modalOpen, handleModal } = useContext(galleryCtx);

  return (
    <>
      <AnimatePresence mode="wait">
        {modalOpen && <ArtistGalleryItemModal gallery={gallery} />}
      </AnimatePresence>
      <div className="gallery">
        {gallery?.map((item, index) => (
          <ArtistGalleryItem
            transition={{ duration: 0.3, delay: index * 0.2 }}
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
