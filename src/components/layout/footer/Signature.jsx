import useTranslation from "../../../language/useTranslation";
import "./signature.scss";
import { motion } from "framer-motion";

const Signature = () => {
  const { translate } = useTranslation();
  return (
    <div className="signature-container">
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.9 }}
        className="signature"
      >
        {translate("signature")}{" "}
        <a target="_blank" href="https://www.danielcalvolopez.com/">
          Daniel Calvo
        </a>
      </motion.p>
    </div>
  );
};

export default Signature;
