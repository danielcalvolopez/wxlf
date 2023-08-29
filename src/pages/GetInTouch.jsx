import GetInTouchForm from "../components/getInTouch/GetInTouchForm";
import GetInTouchSlogan from "../components/getInTouch/GetInTouchSlogan";
import Map from "../components/getInTouch/Map";
import MessageConfirmationModal from "../components/getInTouch/MessageConfirmationModal";
import "./get-in-touch.scss";

const GetInTouch = () => {
  return (
    <div className="get-in-touch-wrapper">
      <div className="get-in-touch-container">
        <GetInTouchForm />
        <GetInTouchSlogan />
      </div>
      <Map />
    </div>
  );
};

export default GetInTouch;
