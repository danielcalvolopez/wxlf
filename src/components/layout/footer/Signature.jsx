import useTranslation from "../../../language/useTranslation";
import "./signature.scss";

const Signature = () => {
  const { translate } = useTranslation();
  return (
    <div className="signature-container">
      <p className="signature">
        {translate("signature")}{" "}
        <a target="_blank" href="https://www.danielcalvolopez.com/">
          Daniel Calvo
        </a>
      </p>
    </div>
  );
};

export default Signature;
