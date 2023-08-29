import Button from "../UI/Button";
import GetInTouchFormItem from "./GetInTouchFormItem";
import "./get-in-touch-form.scss";
import { useForm } from "react-hook-form";
import MessageConfirmationModal from "./MessageConfirmationModal";
import { useState } from "react";

const GetInTouchForm = () => {
  const [confirmationModal, setConfirmationModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    setConfirmationModal(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-item-wrapper">
        <GetInTouchFormItem
          register={register}
          required="Name is required."
          type="text"
          title="Name"
        />
        {errors.Name ? (
          <span>{errors.Name.message}</span>
        ) : (
          <span className="hidden">no error</span>
        )}
      </div>
      <div className="form-item-wrapper">
        <GetInTouchFormItem
          required="Email is required."
          register={register}
          type="email"
          title="Email"
        />
        {errors.Email ? (
          <span>{errors.Email.message}</span>
        ) : (
          <span className="hidden">no error</span>
        )}
      </div>
      <div className="form-item-wrapper">
        <GetInTouchFormItem
          required="Message is required."
          register={register}
          message
          title="Message"
        />
        {errors.Message ? (
          <span>{errors.Message.message}</span>
        ) : (
          <span className="hidden">no error</span>
        )}
      </div>

      <div className="submit">
        <Button btnClassName="yellow">submit</Button>
      </div>
      {confirmationModal && (
        <MessageConfirmationModal setConfirmationModal={setConfirmationModal} />
      )}
    </form>
  );
};

export default GetInTouchForm;
