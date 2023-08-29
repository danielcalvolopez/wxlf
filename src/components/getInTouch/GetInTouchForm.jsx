import Button from "../UI/Button";
import GetInTouchFormItem from "./GetInTouchFormItem";
import "./get-in-touch-form.scss";
import { useForm } from "react-hook-form";
import MessageConfirmationModal from "./MessageConfirmationModal";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import useTranslation from "../../language/useTranslation";

const GetInTouchForm = () => {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const { translate } = useTranslation();

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
        (result) => {},
        (error) => {}
      );
    reset();
    setConfirmationModal(true);
  };

  const nameRequired = translate("requiredName");
  const emailRequired = translate("requiredEmail");
  const messageRequired = translate("requiredMessage");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-item-wrapper">
        <GetInTouchFormItem
          register={register}
          required={nameRequired}
          type="text"
          title={translate("name")}
          itemName="Name"
        />
        {errors.Name ? (
          <span>{errors.Name.message}</span>
        ) : (
          <span className="hidden">no error</span>
        )}
      </div>
      <div className="form-item-wrapper">
        <GetInTouchFormItem
          required={emailRequired}
          register={register}
          type="email"
          title="Email"
          itemName="Email"
        />
        {errors.Email ? (
          <span>{errors.Email.message}</span>
        ) : (
          <span className="hidden">no error</span>
        )}
      </div>
      <div className="form-item-wrapper">
        <GetInTouchFormItem
          required={messageRequired}
          register={register}
          message
          title={translate("message")}
          itemName="Message"
        />
        {errors.Message ? (
          <span>{errors.Message.message}</span>
        ) : (
          <span className="hidden">no error</span>
        )}
      </div>

      <div className="submit">
        <Button btnClassName="yellow">{translate("submit")}</Button>
      </div>
      {confirmationModal && (
        <MessageConfirmationModal setConfirmationModal={setConfirmationModal} />
      )}
    </form>
  );
};

export default GetInTouchForm;
