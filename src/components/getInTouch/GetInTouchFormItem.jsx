import "./get-in-touch-form-item.scss";

const GetInTouchFormItem = ({ title, type, message }) => {
  return (
    <div className="form-item">
      <label>{title}</label>
      {message ? <textarea /> : <input type={type} />}
    </div>
  );
};

export default GetInTouchFormItem;
