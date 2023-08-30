import "./artist-gallery-item.scss";
import { motion } from "framer-motion";

const ArtistGalleryItem = ({ img, handleModal, transition }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
      className="gallery-item"
    >
      <div onClick={handleModal} className="img-wrapper">
        <img loading="lazy" className="img" src={img} alt="" />
      </div>
    </motion.div>
  );
};

export default ArtistGalleryItem;
