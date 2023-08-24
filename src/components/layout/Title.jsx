import "./title.scss";

const Title = ({ title }) => {
  return (
    <div className="layout-title">
      <h1>{title}</h1>
      <span className="bar" />
    </div>
  );
};

export default Title;
