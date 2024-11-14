import React from "react";
import "./HomeMain.css"; // CSS 파일 추가

function HomeMain() {
  return (
    <div className="home-main">
      <section className="header-section">
        <div className="header-image-placeholder" />
        <h2>오늘은</h2>
        <h2>1곳의 Pacu를 다녀왔어요</h2>
      </section>

      <section className="colored-area">
        <h3>색칠 된 녹지</h3>
        <div className="colored-area-placeholder" />
      </section>

      <section className="summary-section">
        <div className="summary-item">
          <div className="summary-image-placeholder" />
          <p>다녀온 Pacu</p>
          <p>4곳</p>
        </div>
        <div className="summary-item">
          <div className="summary-image-placeholder" />
          <p>안가본 Pacu</p>
          <p>12곳</p>
        </div>
        <div className="summary-item">
          <div className="summary-image-placeholder" />
          <p>나의 배지</p>
          <p>4개</p>
        </div>
      </section>

      <section className="popular-section">
        <h3>인기있는 Pacu</h3>
        <div className="popular-item-list">
          <div className="popular-item-placeholder" />
          <div className="popular-item-placeholder" />
          <div className="popular-item-placeholder" />
          <div className="popular-item-placeholder" />
        </div>
      </section>
    </div>
  );
}

export default HomeMain;
