import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ParkDetailMain.css";
import parkImage from "../assets/park_1.jpg";

function ParkDetailMain({
  visitCount = 2,
  tags = ["스케이트 보드", "자전거", "갈대밭"],
}) {
  const [copyMessage, setCopyMessage] = useState("");
  const navigate = useNavigate();

  const parkData = {
    id: 1, // id 추가
    name: "삼락 생태공원",
    description: "다양한 스포츠를 즐길 수 있는 공원",
    type: "생태공원",
    likes: 24,
    location: "부산광역시 사상구 삼락동 686",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(parkData.location).then(() => {
      setCopyMessage("클립보드에 복사되었습니다.");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  const handleWriteReview = () => {
    navigate(`/reviewWrite/${parkData.id}`);
  };

  return (
    <div className="park-detail-main">
      <button className="back-button">이전</button>

      <div className="image-placeholder">
        <img src={parkImage} alt="공원 이미지" />
      </div>

      <div className="park-info">
        <h4>{parkData.type}</h4>
        <p className="park-info-name">{parkData.name}</p>
        <p className="park-info-des">{parkData.description}</p>
      </div>

      <div className="tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="like-count-container">
        <div className="like-counter">
          <p className="like-counter-label">좋아요</p>
          <p className="like-counter-value">{parkData.likes}</p>
        </div>
        <div className="visit-counter">
          <p className="visit-counter-label">가본 횟수</p>
          <p className="visit-counter-value">{visitCount}</p>
        </div>
      </div>

      <button className="write-review-button" onClick={handleWriteReview}>
        후기 쓰기
      </button>

      <section className="popular-review">
        <h3>인기 많은 후기</h3>
        <div className="review-card">
          <h4>아이랑 함께 왔어요</h4>
          <p>
            오늘 아침에 같이 산책겸 생태공원에 왔어요. 여기에 오늘 보니깐
            이벤트가 있..
          </p>
          <p>태연맘 | 24.11.14</p>
        </div>
      </section>

      <div className="location-info">
        <h4>위치 정보</h4>
        <div className="map-placeholder">구글지도</div>
        <div className="location-copy-container">
          <p>{parkData.location}</p>
          <button className="copy-button" onClick={handleCopy}>
            복사하기
          </button>
        </div>
        {copyMessage && <p className="copy-message">{copyMessage}</p>}
      </div>
    </div>
  );
}

export default ParkDetailMain;
