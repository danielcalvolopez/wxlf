import Signature from "./Signature";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span className="bar" />
      <div className="sub-text">
        <p>murcia</p>
        <p>tattoo studio</p>
      </div>
      <Signature />
    </div>
  );
};

export default Footer;
