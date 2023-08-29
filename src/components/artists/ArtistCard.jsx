import { Link } from "react-router-dom";
import "./artist-card.scss";
import { BsArrowUpRight } from "react-icons/bs";
import useTranslation from "../../language/useTranslation";

const ArtistCard = ({ name, photo, info, slug, infoSpanish }) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  return (
    <Link className="artist-card-container" to={`/artists/${slug}`}>
      <div className="artist-card">
        <div className="title">
          <p>{name}</p>
          <span className="arrow-button">
            <BsArrowUpRight />
          </span>
        </div>
        <img src={photo} alt={name} />
        <p className="info">{currentLang === "en" ? info : infoSpanish}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
