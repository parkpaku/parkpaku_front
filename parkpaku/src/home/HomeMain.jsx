import React from "react";
import { Link } from "react-router-dom";
import PopularPakuCard from "./PopularPakuCard";
import SummaryItem from "./SummaryItem";
import "./HomeMain.css";

function HomeMain() {
  const popularPacus = [
    { title: "Paku 1", description: "인기있는 Paku 1 설명" },
    { title: "Paku 2", description: "인기있는 Paku 2 설명" },
    { title: "Paku 3", description: "인기있는 Paku 3 설명" },
    { title: "Paku 4", description: "인기있는 Paku 4 설명" },
  ];

  return (
    <div className="home-main">
      <section className="header-section">
        <div className="header-image-placeholder" />
        <h2>오늘은</h2>
        <h2>1곳의 Paku를 다녀왔어요</h2>
      </section>

      <section className="colored-area">
        <Link to="/myPaku" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="colored-area-placeholder">
            <h3>색칠 된 녹지</h3>
          </div>
        </Link>
      </section>

      <section className="summary-section">
        <SummaryItem
          iconPlaceholder="아이콘"
          label="다녀온 Paku"
          value="44곳"
        />
        <SummaryItem
          iconPlaceholder="아이콘"
          label="안가본 Paku"
          value="256곳"
        />
        <SummaryItem iconPlaceholder="아이콘" label="나의 배지" value="12개" />
      </section>

      <section className="popular-section">
        <h3>인기있는 Paku</h3>
        <div className="popular-paku-scroll-container">
          {popularPacus.map((paku, index) => (
            <PopularPakuCard
              key={index}
              title={paku.title}
              description={paku.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeMain;
