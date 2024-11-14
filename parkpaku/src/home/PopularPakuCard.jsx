import React from "react";
import "./PopularPakuCard.css";

import parkImage from "../assets/park_1.jpg";

function PopularPakuCard({ title, description, onClick }) {
  return (
    <div
      className="popular-paku-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image-placeholder">
        <img src={parkImage} alt="img"></img>
      </div>
      <div className="card-info">
        <p className="card-info-title">{title}</p>
        <p className="card-info-description">{description}</p>
      </div>
    </div>
  );
}

export default PopularPakuCard;
