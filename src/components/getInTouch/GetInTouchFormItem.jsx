import "./get-in-touch-form-item.scss";

const GetInTouchFormItem = ({
  title,
  type,
  message,
  register,
  required,
  itemName,
}) => {
  return (
    <div className="form-item">
      <label>{title}</label>
      {message ? (
        <textarea {...register(itemName, { required: required })} />
      ) : (
        <input {...register(itemName, { required: required })} type={type} />
      )}
    </div>
  );
};

export default GetInTouchFormItem;
