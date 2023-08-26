import "./artist-card.scss";
import { BsArrowUpRight } from "react-icons/bs";

const ArtistCard = ({ name, photo, info }) => {
  return (
    <div className="artist-card">
      <div className="title">
        <p>{name}</p>
        <span className="arrow-button">
          <BsArrowUpRight />
        </span>
      </div>
      <img src={photo} alt="" />
      <p className="info">{info}</p>
    </div>
  );
};

export default ArtistCard;
