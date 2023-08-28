import "./get-in-touch-slogan.scss";
import { BsArrowReturnRight } from "react-icons/bs";

const GetInTouchSlogan = () => {
  return (
    <div className="slogan">
      <div className="content">
        <div className="title">
          <BsArrowReturnRight size={160} className="icon" />
          <h3>
            you are in <span> good</span> hands
          </h3>
        </div>
        <p>
          We are specialists in meeting client expectations. Let us know your
          idea, and we will translate that into a piece of art on your skin.
        </p>
      </div>
    </div>
  );
};

export default GetInTouchSlogan;
