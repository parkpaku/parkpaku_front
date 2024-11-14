import React, { useState } from "react";
import "./ParkDetailMain.css";

function ParkDetailMain({
  parkName = "삼락 생태공원",
  parkType = "생태공원",
  parkDescription = "다양한 스포츠를 즐길 수 있는 공원",
  likes = 24,
  visitCount = 2,
  tags = ["스케이트 보드", "자전거", "갈대밭"],
  location = "부산광역시 사상구 삼락동 686",
}) {
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(location).then(() => {
      setCopyMessage("클립보드에 복사되었습니다.");
      setTimeout(() => setCopyMessage(""), 2000); // 2초 후 메시지 지우기
    });
  };

  return (
    <div className="park-detail-main">
      <button className="back-button">이전</button>

      <div className="image-placeholder">
        <img src="/path/to/your/image.png" alt="공원 이미지" />
      </div>

      <div className="park-info">
        <h4>{parkType}</h4>
        <p className="park-info-name">{parkName}</p>
        <p className="park-info-des">{parkDescription}</p>
      </div>

      <div className="like-count-container">
        <div className="like-counter">
          <p className="like-counter-label">좋아요</p>
          <p className="like-counter-value">{likes}</p>
        </div>
        <div className="visit-counter">
          <p className="visit-counter-label">가본 횟수</p>
          <div className="visit-controls">
            <button>-</button>
            <p className="visit-counter-value">{visitCount}</p>
            <button>+</button>
          </div>
        </div>
      </div>

      <div className="tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

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
          <p>{location}</p>
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
