import useTranslation from "../../language/useTranslation";
import "./message-confirmation-modal.scss";
import { GrClose } from "react-icons/gr";

const MessageConfirmationModal = ({ setConfirmationModal }) => {
  const { translate } = useTranslation();
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
        <p>{translate("success")}</p>
      </div>
    </div>
  );
};

export default MessageConfirmationModal;
