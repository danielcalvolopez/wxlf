import "./backdrop.scss";
import { motion } from "framer-motion";

const Backdrop = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="backdrop"
    />
  );
};

export default Backdrop;
