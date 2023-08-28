import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span className="bar" />
      <div className="sub-text">
        <p>murcia</p>
        <p>tattoo studio</p>
      </div>
      <p className="signature">
        Designed & built by{" "}
        <a target="_blank" href="https://www.danielcalvolopez.com/">
          Daniel Calvo
        </a>
      </p>
    </div>
  );
};

export default Footer;
