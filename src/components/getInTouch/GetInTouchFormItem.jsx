import "./get-in-touch-form-item.scss";

const GetInTouchFormItem = ({ title, type, message, register, required }) => {
  return (
    <div className="form-item">
      <label>{title}</label>
      {message ? (
        <textarea {...register(title, { required: required })} />
      ) : (
        <input {...register(title, { required: required })} type={type} />
      )}
    </div>
  );
};

export default GetInTouchFormItem;
