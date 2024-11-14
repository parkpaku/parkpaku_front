import React from "react";
import "./PopularPakuCard.css";

function PopularPakuCard({ title, description, onClick }) {
  return (
    <div
      className="popular-paku-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image-placeholder">{/* 이미지 예시 */}</div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PopularPakuCard;
