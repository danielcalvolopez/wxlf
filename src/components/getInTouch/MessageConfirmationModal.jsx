import "./message-confirmation-modal.scss";
import { GrClose } from "react-icons/gr";

const MessageConfirmationModal = ({ setConfirmationModal }) => {
  const handleCloseConfirmationModal = (event) => {
    if (event.target === event.currentTarget) {
      setConfirmationModal(false);
    }
    return;
  };
  return (
    <div
      onClick={handleCloseConfirmationModal}
      className="message-confirmation"
    >
      <div className="content">
        <div className="close">
          <GrClose onClick={handleCloseConfirmationModal} />
        </div>
        <p>Your message was succesfully sent!</p>
      </div>
    </div>
  );
};

export default MessageConfirmationModal;
