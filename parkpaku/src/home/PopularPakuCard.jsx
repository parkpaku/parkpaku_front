import React from "react";
import "./PopularPakuCard.css";
import logo from "../assets/reactlogo.png";

function PopularPacuCard({ title, description }) {
  return (
    <div className="popular-pacu-card">
      <div className="card-image-placeholder">
        <img src={logo} alt="사진"></img>
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PopularPacuCard;
