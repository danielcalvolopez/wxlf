import Signature from "./Signature";
import "./footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
      <motion.span
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bar"
      />
      <div className="sub-text">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          murcia
        </motion.p>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          tattoo studio
        </motion.p>
      </div>
      <Signature />
    </div>
  );
};

export default Footer;
