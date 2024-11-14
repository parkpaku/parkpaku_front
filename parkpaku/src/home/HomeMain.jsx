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

import { ReactComponent as GangseoSVG } from "../assets/강서구.svg"; // 강서구
import { ReactComponent as GeumjeongSVG } from "../assets/금정구.svg"; // 금정구
import { ReactComponent as GijangSVG } from "../assets/기장군.svg"; // 기장군
import { ReactComponent as NamguSVG } from "../assets/남구.svg"; // 남구
import { ReactComponent as DongguSVG } from "../assets/동구.svg"; // 동구
import { ReactComponent as DongnaeSVG } from "../assets/동래구.svg"; // 동래구
import { ReactComponent as BusanjinSVG } from "../assets/부산진구.svg"; // 부산진구
import { ReactComponent as BukguSVG } from "../assets/북구.svg"; // 북구
import { ReactComponent as SasangSVG } from "../assets/사상구.svg"; // 사상구
import { ReactComponent as SahaSVG } from "../assets/사하구.svg"; // 사하구
import { ReactComponent as SeoguSVG } from "../assets/서구.svg"; // 서구
import { ReactComponent as SuyeongSVG } from "../assets/수영구.svg"; // 수영구
import { ReactComponent as YeonjeSVG } from "../assets/연제구.svg"; // 연제구
import { ReactComponent as YeongdoSVG } from "../assets/영도구.svg"; // 영도구
import { ReactComponent as JungguSVG } from "../assets/중구.svg"; // 중구
import { ReactComponent as HaeundaeSVG } from "../assets/해운대구.svg"; // 해운대구

function HomeMain() {
  const [popularPacus, setPopularPacus] = useState([]);
  const [userData, setUserData] = useState({
    visited: 0,
    notVisited: 0,
    badge: 0,
    todayVisit: 0,
  });
  const [items, setItems] = useState([]); // 구역 데이터
  const [groupedItems, setGroupedItems] = useState([]);
  const navigate = useNavigate(); // 네비게이션을 위한 useNavigate 훅

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

  // user_info.json에서 데이터를 가져와서 userData에 설정하는 useEffect
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/user_info.json", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // ID가 2인 사용자의 데이터를 찾음
        const selectedUser = data.find((user) => user.id === 2);
        if (selectedUser) {
          setUserData({
            visited: selectedUser.visited,
            notVisited: selectedUser.notVisited,
            badge: selectedUser.badge,
            todayVisit: selectedUser.todayVisit,
          });
        } else {
          console.error("ID가 2인 사용자의 데이터를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("사용자 데이터를 가져오는 중 에러 발생:", error);
      }
    };

    fetchUserData();
  }, []);

  // 공원 데이터 그룹화 함수
  useEffect(() => {
    const groupByLocation = () => {
      const grouped = items.reduce((acc, current) => {
        const { location, visits } = current;
        if (!acc[location]) {
          acc[location] = { location, visits: 0, parks: [] };
        }
        acc[location].visits += visits;
        acc[location].parks.push(current);
        return acc;
      }, {});

      setGroupedItems(Object.values(grouped)); // 그룹화된 결과를 상태에 설정
    };

    if (items.length) {
      groupByLocation();
    }
  }, [items]);

  const detailHandle = (id) => {
    navigate(`/paku/${id}`); // 특정 id에 대한 페이지로 이동
  };

  useEffect(() => {
    // JSON 파일을 fetch로 불러와서 상태에 저장
    fetch("/park_data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("park_data.json 데이터:", data);
        setItems(data); // 불러온 데이터를 items 상태에 저장
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }, []);

  // 방문 수에 따라 색상 진하기를 다르게 설정
  const getRegionColor = (visits) => {
    if (visits === 0) return "color-gray"; // 방문 수 0: 회색
    if (visits >= 1 && visits <= 5) return "color-light"; // 1~3: 연한 색
    if (visits >= 6 && visits <= 10) return "color-medium"; // 4~6: 중간 색
    if (visits >= 11 && visits <= 15) return "color-dark"; // 7~10: 진한 색
    if (visits >= 16) return "color-dip-dark"; // 11개 이상 : 가장 진한 색

    return "color-gray"; // 기본 색상
  };

  // `location`에 맞는 SVG 파일을 반환하는 함수
  const getRegionSVG = (location) => {
    switch (location) {
      case "강서구":
        return <GangseoSVG />;
      case "금정구":
        return <GeumjeongSVG />;
      case "기장군":
        return <GijangSVG />;
      case "남구":
        return <NamguSVG />;
      case "동구":
        return <DongguSVG />;
      case "동래구":
        return <DongnaeSVG />;
      case "부산진구":
        return <BusanjinSVG />;
      case "북구":
        return <BukguSVG />;
      case "사상구":
        return <SasangSVG />;
      case "사하구":
        return <SahaSVG />;
      case "서구":
        return <SeoguSVG />;
      case "수영구":
        return <SuyeongSVG />;
      case "연제구":
        return <YeonjeSVG />;
      case "영도구":
        return <YeongdoSVG />;
      case "중구":
        return <JungguSVG />;
      case "해운대구":
        return <HaeundaeSVG />;
      default:
        return <></>; // 지정된 지역이 없으면 빈 JSX 반환
    }
  };

  return (
    <div className="home-main">
      <section className="header-section">
        <div className="header-image-placeholder">
          <img src={logoPath} alt="로고" />
        </div>
        {/* <Link to="/signup">
          <div className="profile-placeholder">회원가입</div>
        </Link> */}
        <Link to="/my">
          <img src={profilePath} className="profile-placeholder" alt="프로필" />
        </Link>
      </section>

      <h2>
        오늘은
        <br />
        {/*userData.todayVisit*/}1곳의 Paku를 다녀왔어요
      </h2>

      {/* 지역별 공원 표시 */}
      <section className="colored-area">
        <Link to="/myPaku" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="colored-area-placeholder">
            <div
              id="map"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {/* groupedItems를 visits 합산을 기준으로 내림차순 정렬 */}
              {groupedItems
                .sort((a, b) => b.visits - a.visits) // visits 기준 내림차순 정렬
                .map((group, index) => (
                  <div
                    key={index}
                    style={{
                      marginRight: "20px",
                      width: "80px",
                      height: "130px",
                    }}
                  >
                    {/* SVG를 색상과 함께 렌더링 */}
                    {React.cloneElement(getRegionSVG(group.location), {
                      className: getRegionColor(group.visits), // 스타일을 적용할 CSS 클래스 이름을 추가
                      style: {
                        pointerEvents: "all",
                        width: "100%", // SVG 크기 설정
                        height: "100%", // SVG 크기 설정
                      },
                    })}
                    {/* location 정보 출력 */}
                    <p>{group.location}</p>
                  </div>
                ))}
            </div>
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
        <h3>추천하는 Paku</h3>
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
