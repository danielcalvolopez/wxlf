import "./map.scss";

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        className="map"
        src="https://snazzymaps.com/embed/519518"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
};

export default Map;
