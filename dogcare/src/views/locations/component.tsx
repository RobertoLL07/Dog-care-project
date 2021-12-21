import { FC } from "react";
import "./styles.css";

const Locations: FC = () => {
  return (
    <div className="locations-container">
      <div className="locations-top">
        <p className="locations-title">OUR LOCATIONS</p>
        <p className="locations-description">
          This is the Dog-Care locator. Use it to find establishments near you.
          If you want to adopt or you need help taking care of a dog, come to
          us!
        </p>
      </div>
      <div className="locations-bar"></div>

      <div className="locations-map">
        <iframe
          title="dogcareLocationsMaps"
          src={`https://maps.google.com/maps?q=25.519280,%20-100.200975&t=&z=15&output=embed`}
          className="map-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Locations;
