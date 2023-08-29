import { useContext } from "react";
import "./artist-gallery-item-modal.scss";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { galleryCtx } from "../../../context/galleryCtx";
import useTranslation from "../../../language/useTranslation";

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
    <div onClick={handleCloseModal} className="modal">
      <div className="image">
        <img src={gallery[currentIndex]} loading="lazy" alt="" />
      </div>

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

      <p onClick={() => setModalOpen(false)}>{translate("close")}</p>
    </div>
  );
};

export default ArtistGalleryItemModal;
