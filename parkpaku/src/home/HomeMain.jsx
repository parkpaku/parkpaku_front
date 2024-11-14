import React from "react";
import { useNavigate, Link } from "react-router-dom"; // React Router v6에서 useNavigate 사용
import PopularPakuCard from "./PopularPakuCard";
import SummaryItem from "./SummaryItem";
import "./HomeMain.css";

function HomeMain() {
  const navigate = useNavigate(); // 네비게이션을 위한 useNavigate 훅

  const popularPacus = [
    { id: 1, title: "Paku 1", description: "인기있는 Paku 1 설명" },
    { id: 2, title: "Paku 2", description: "인기있는 Paku 2 설명" },
    { id: 3, title: "Paku 3", description: "인기있는 Paku 3 설명" },
    { id: 4, title: "Paku 4", description: "인기있는 Paku 4 설명" },
  ];

  const detailHandle = (id) => {
    navigate(`/paku/${id}`); // 특정 id에 대한 페이지로 이동
  };

  return (
    <div className="home-main">
      <section className="header-section">
        <div className="header-image-placeholder">로고</div>
        <Link to="/myPaku">
          <div className="profile-placeholder">프로필</div>
        </Link>
      </section>

      <h2>
        오늘은
        <br />
        1곳의 Paku를 다녀왔어요
      </h2>

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
          {popularPacus.map((paku) => (
            <PopularPakuCard
              key={paku.id}
              title={paku.title}
              description={paku.description}
              onClick={() => detailHandle(paku.id)} // 클릭 핸들러 추가
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeMain;
