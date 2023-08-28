import "./artist-gallery-item.scss";

const ArtistGalleryItem = ({ img, handleModal }) => {
  return (
    <>
      <div onClick={handleModal} className="gallery-item">
        <div className="img-wrapper">
          <img loading="lazy" className="img" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ArtistGalleryItem;
