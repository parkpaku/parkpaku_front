import React from "react";
import "./PopularPakuCard.css";

function PopularPacuCard({ title, description }) {
  return (
    <div className="popular-pacu-card">
      <div className="card-image-placeholder">이미지</div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PopularPacuCard;
