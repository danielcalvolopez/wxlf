import useTranslation from "../../language/useTranslation";
import "./get-in-touch-slogan.scss";
import { BsArrowReturnRight } from "react-icons/bs";

const GetInTouchSlogan = () => {
  const { translate } = useTranslation();
  return (
    <div className="slogan">
      <div className="content">
        <div className="title">
          <BsArrowReturnRight size={160} className="icon" />
          <h3>
            <span>{translate("youAre")}</span>{" "}
            <span className="color"> {translate("good")}</span>{" "}
            <span>{translate("hands")}</span>
          </h3>
        </div>
        <p>{translate("slogan")}</p>
      </div>
    </div>
  );
};

export default GetInTouchSlogan;
