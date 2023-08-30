import useTranslation from "../../language/useTranslation";
import "./message-confirmation-modal.scss";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

const MessageConfirmationModal = ({ setConfirmationModal }) => {
  const { translate } = useTranslation();
  const handleCloseConfirmationModal = (event) => {
    if (event.target === event.currentTarget) {
      setConfirmationModal(false);
    }
    return;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleCloseConfirmationModal}
      className="message-confirmation"
    >
      <div className="content">
        <div className="close">
          <GrClose onClick={handleCloseConfirmationModal} />
        </div>
        <p>{translate("success")}</p>
      </div>
    </motion.div>
  );
};

export default MessageConfirmationModal;
