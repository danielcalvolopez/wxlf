import Button from "../UI/Button";
import GetInTouchFormItem from "./GetInTouchFormItem";
import "./get-in-touch-form.scss";

const GetInTouchForm = () => {
  return (
    <form className="form">
      <GetInTouchFormItem type="text" title="Name" />
      <GetInTouchFormItem type="email" title="Email" />
      <GetInTouchFormItem message title="Message" />
      <div className="submit">
        <Button btnClassName="yellow">submit</Button>
      </div>
    </form>
  );
};

export default GetInTouchForm;
