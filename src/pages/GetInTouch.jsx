import GetInTouchForm from "../components/getInTouch/GetInTouchForm";
import GetInTouchSlogan from "../components/getInTouch/GetInTouchSlogan";
import Map from "../components/getInTouch/Map";
import "./get-in-touch.scss";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="get-in-touch-wrapper"
    >
      <div className="get-in-touch-container">
        <GetInTouchForm />
        <GetInTouchSlogan />
      </div>
      <Map />
    </motion.div>
  );
};

export default GetInTouch;
