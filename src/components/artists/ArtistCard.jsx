import { Link } from "react-router-dom";
import "./artist-card.scss";
import { BsArrowUpRight } from "react-icons/bs";

const ArtistCard = ({ name, photo, info, slug, gallery }) => {
  return (
    <Link
      className="artist-card-container"
      to={`/artists/${slug}`}
      state={{ name, gallery }}
    >
      <div className="artist-card">
        <div className="title">
          <p>{name}</p>
          <span className="arrow-button">
            <BsArrowUpRight />
          </span>
        </div>
        <img src={photo} alt={name} />
        <p className="info">{info}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
