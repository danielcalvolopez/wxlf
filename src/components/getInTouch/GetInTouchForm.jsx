import Button from "../UI/Button";
import GetInTouchFormItem from "./GetInTouchFormItem";
import "./get-in-touch-form.scss";
import { useForm } from "react-hook-form";
import MessageConfirmationModal from "./MessageConfirmationModal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const GetInTouchForm = () => {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
    setConfirmationModal(true);
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="form">
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
