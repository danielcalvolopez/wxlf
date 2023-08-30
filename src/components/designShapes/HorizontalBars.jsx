import "./horizontal-bars.scss";
import { motion } from "framer-motion";

const bars = ["bar1", "bar2", "bar3", "bar4", "bar5", "bar6"];

const HorizontalBars = () => {
  return (
    <div className="bars">
      {bars.map((bar, index) => (
        <motion.span
          className={bar}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
        />
      ))}
    </div>
  );
};

export default HorizontalBars;
