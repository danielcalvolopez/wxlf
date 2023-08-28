import { createContext, useState } from "react";

export const galleryCtx = createContext();

const GalleryCtxProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);

  const handleGoForward = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleGoBackward = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleModal = (index) => {
    setModalOpen(true);
    setCurrentIndex(index);
  };
  const values = {
    currentIndex,
    setCurrentIndex,
    handleGoForward,
    handleGoBackward,
    handleModal,
    modalOpen,
    setModalOpen,
  };
  return <galleryCtx.Provider value={values}>{children}</galleryCtx.Provider>;
};

export default GalleryCtxProvider;
