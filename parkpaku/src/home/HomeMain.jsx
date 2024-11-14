import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import PopularPakuCard from "./PopularPakuCard";
import SummaryItem from "./SummaryItem";
import "./HomeMain.css";
import logoPath from "../assets/Logo.svg";
import profilePath from "../assets/home/ic_profile.png";

import visitedIcon from "../assets/home/ic_visitedPaku.png";
import badgeIcon from "../assets/home/ic_badge.png";
import noVisitedIcon from "../assets/home/ic_noVisitedPaku.png";

function HomeMain() {
  const [popularPacus, setPopularPacus] = useState([]);
  const navigate = useNavigate(); // 네비게이션을 위한 useNavigate 훅

  const userData = {
    visited: 24,
    notVisited: 256,
    badge: 7,
    todayVisit: 2,
  };

  // park_detail.json에서 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchPopularPacus = async () => {
      try {
        const response = await fetch("/park_detail.json", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPopularPacus(data); // 데이터를 상태에 설정
      } catch (error) {
        console.error("데이터를 가져오는 중 에러 발생:", error);
      }
    };

    fetchPopularPacus();
  }, []);

  const detailHandle = (id) => {
    navigate(`/paku/${id}`); // 특정 id에 대한 페이지로 이동
  };

  return (
    <div className="home-main">
      <section className="header-section">
        <div className="header-image-placeholder">
          <img src={logoPath} alt="로고" />
        </div>
        <Link to="/signup">
          <div className="profile-placeholder">회원가입</div>
        </Link>
        <Link to="/my">
          <img src={profilePath} className="profile-placeholder" alt="프로필" />
        </Link>
      </section>

      <h2>
        오늘은
        <br />
        {userData.todayVisit}곳의 Paku를 다녀왔어요
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
          path={visitedIcon}
          iconPlaceholder="아이콘"
          label="다녀온 Paku"
          value={`${userData.visited}곳`}
        />
        <SummaryItem
          path={noVisitedIcon}
          iconPlaceholder="아이콘"
          label="안가본 Paku"
          value={`${userData.notVisited}곳`}
        />
        <SummaryItem
          path={badgeIcon}
          iconPlaceholder="아이콘"
          label="나의 배지"
          value={`${userData.badge}개`}
        />
      </section>

      <section className="popular-section">
        <h3>인기있는 Paku</h3>
        <div className="popular-paku-scroll-container">
          {popularPacus.map((paku) => (
            <PopularPakuCard
              key={paku.id}
              title={paku.name} // park_detail.json의 name 사용
              description={paku.description}
              id={paku.id}
              onClick={() => detailHandle(paku.id)} // 클릭 핸들러 추가
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeMain;
