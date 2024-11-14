import React from "react";
import PopularPacuCard from "./PopularPakuCard"; // 파일명도 일치시키기
import "./HomeMain.css";

function HomeMain() {
  // 예시 데이터
  const popularPacus = [
    { title: "Pacu 1", description: "인기있는 Pacu 1 설명" },
    { title: "Pacu 2", description: "인기있는 Pacu 2 설명" },
    { title: "Pacu 3", description: "인기있는 Pacu 3 설명" },
    { title: "Pacu 4", description: "인기있는 Pacu 4 설명" },
  ];

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
        <h3>인기있는 Paku</h3>
        <div className="popular-paku-scroll-container">
          {" "}
          {/* 클래스명 통일 */}
          {popularPacus.map((pacu, index) => (
            <PopularPacuCard
              key={index}
              title={pacu.title}
              description={pacu.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeMain;
