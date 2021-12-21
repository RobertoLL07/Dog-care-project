import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";

const Medical: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="medical-container">
      <div className="medical-top">
        <p className="medical-title">Medical Care</p>
        <p className="medical-description">
          This is the Dog-Care log. Use it to fill information about your dog(s)
          and we will give you recomendations!
        </p>
      </div>
      <div className="medical-zipcode"></div>

      <div className="medical-map">
        <div className="medical-restaurant-info"></div>
      </div>
    </div>
  );
};

export default Medical;
