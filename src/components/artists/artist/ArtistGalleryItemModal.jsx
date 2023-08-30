import { useContext } from "react";
import "./artist-gallery-item-modal.scss";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { galleryCtx } from "../../../context/galleryCtx";
import useTranslation from "../../../language/useTranslation";
import { motion } from "framer-motion";

const ArtistGalleryItemModal = ({ gallery }) => {
  const { setModalOpen, currentIndex, handleGoForward, handleGoBackward } =
    useContext(galleryCtx);

  const { translate } = useTranslation();

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
    return;
  };

  return (
    <motion.div
      onClick={handleCloseModal}
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="modal"
    >
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="image"
      >
        <motion.img
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          src={gallery[currentIndex]}
          loading="lazy"
          alt=""
        />
      </motion.div>

      <div
        className={` ${currentIndex === 0 ? "arrows-first-item" : "arrows"}`}
      >
        {currentIndex > 0 && (
          <SlArrowLeft size={30} onClick={handleGoBackward} className="arrow" />
        )}
        {currentIndex < gallery.length - 1 && (
          <SlArrowRight size={30} onClick={handleGoForward} className="arrow" />
        )}
      </div>

      <motion.p
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 500, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onClick={() => setModalOpen(false)}
      >
        {translate("close")}
      </motion.p>
    </motion.div>
  );
};

export default ArtistGalleryItemModal;
