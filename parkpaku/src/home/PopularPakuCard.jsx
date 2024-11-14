import React from "react";
import "./PopularPakuCard.css"; // 스타일링을 위한 CSS 파일

function PopularPacuCard({ title, description }) {
  return (
    <div className="popular-pacu-card">
      <div className="card-image-placeholder" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default PopularPacuCard;
