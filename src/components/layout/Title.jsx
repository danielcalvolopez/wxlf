import "./title.scss";
import { motion } from "framer-motion";

const Title = ({ title }) => {
  return (
    <div className="layout-title">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.span
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bar"
      />
    </div>
  );
};

export default Title;
