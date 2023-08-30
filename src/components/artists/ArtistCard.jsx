import { Link } from "react-router-dom";
import "./artist-card.scss";
import { BsArrowUpRight } from "react-icons/bs";
import useTranslation from "../../language/useTranslation";
import { motion } from "framer-motion";

const ArtistCard = ({ name, photo, info, slug, infoSpanish, transition }) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  return (
    <Link className="artist-card-container" to={`/artists/${slug}`}>
      <motion.div
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
        className="artist-card"
      >
        <div className="title">
          <p>{name}</p>
          <span className="arrow-button">
            <BsArrowUpRight />
          </span>
        </div>
        <img src={photo} alt={name} loading="lazy" />
        <p className="info">{currentLang === "en" ? info : infoSpanish}</p>
      </motion.div>
    </Link>
  );
};

export default ArtistCard;
