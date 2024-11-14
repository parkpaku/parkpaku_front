import React from "react";
import "./PopularPakuCard.css";

import parkImage from "../assets/park_default.jpg";
import parkImage0 from "../assets/park_0.jpg";
import parkImage1 from "../assets/park_1.svg";

function PopularPakuCard({ title, description, onClick, id }) {
  // id에 따라 이미지를 선택하는 로직
  const selectImage = (id) => {
    switch (id) {
      case 0:
        return parkImage0;
      case 1:
        return parkImage1;
      default:
        return parkImage; // 기본 이미지
    }
  };

  return (
    <div
      className="popular-paku-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image-placeholder">
        <img src={selectImage(id)} alt="img"></img>
      </div>
      <div className="card-info">
        <p className="card-info-title">{title}</p>
        <p className="card-info-description">{description}</p>
      </div>
    </div>
  );
}

export default PopularPakuCard;
