import { useLocation } from "react-router-dom";

const Artist = () => {
  const location = useLocation();

  const { name, gallery } = location.state;

  console.log(gallery);

  return <div>{name}</div>;
};

export default Artist;
