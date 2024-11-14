import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PakuModal from "./PakuModal";
import BottomSheet from "./BottomSheet";
import "./Map.css";

import { ReactComponent as GangseoSVG } from "../../assets/강서구.svg"; // 강서구
import { ReactComponent as GeumjeongSVG } from "../../assets/금정구.svg"; // 금정구
import { ReactComponent as GijangSVG } from "../../assets/기장군.svg"; // 기장군
import { ReactComponent as NamguSVG } from "../../assets/남구.svg"; // 남구
import { ReactComponent as DongguSVG } from "../../assets/동구.svg"; // 동구
import { ReactComponent as DongnaeSVG } from "../../assets/동래구.svg"; // 동래구
import { ReactComponent as BusanjinSVG } from "../../assets/부산진구.svg"; // 부산진구
import { ReactComponent as BukguSVG } from "../../assets/북구.svg"; // 북구
import { ReactComponent as SasangSVG } from "../../assets/사상구.svg"; // 사상구
import { ReactComponent as SahaSVG } from "../../assets/사하구.svg"; // 사하구
import { ReactComponent as SeoguSVG } from "../../assets/서구.svg"; // 서구
import { ReactComponent as SuyeongSVG } from "../../assets/수영구.svg"; // 수영구
import { ReactComponent as YeonjeSVG } from "../../assets/연제구.svg"; // 연제구
import { ReactComponent as YeongdoSVG } from "../../assets/영도구.svg"; // 영도구
import { ReactComponent as JungguSVG } from "../../assets/중구.svg"; // 중구
import { ReactComponent as HaeundaeSVG } from "../../assets/해운대구.svg"; // 해운대구

function Map() {
  const [items, setItems] = useState([]); // 구역 데이터
  const [modalOpen, setModalOpen] = useState(true);

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
    if (visits >= 1 && visits <= 3) return "color-light"; // 1~3: 연한 색
    if (visits >= 4 && visits <= 6) return "color-medium"; // 4~6: 중간 색 (주황색)
    if (visits >= 7 && visits <= 10) return "color-dark"; // 7~10: 진한 색 (빨간색)
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
    <div className="map">
      <div>
        <Link to="/" className="back">
          ◀이전
        </Link>
        <h1>나의 Paku</h1>
      </div>

      <div
        id="map"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{ margin: "10px", width: "100px", height: "100px" }}
          >
            {/* item 정보 출력 */}
            <p>{item.location}</p>

            {/* SVG를 색상과 함께 렌더링 */}
            {React.cloneElement(getRegionSVG(item.location), {
              className: getRegionColor(item.visits), // 스타일을 적용할 CSS 클래스 이름을 추가
              style: {
                pointerEvents: "all",
                width: "100%", // SVG 크기 설정
                height: "100%", // SVG 크기 설정
              },
            })}
          </div>
        ))}
      </div>

      <div>
        {modalOpen && <PakuModal onClose={() => setModalOpen(false)} />}
        <BottomSheet items={items} />
      </div>
    </div>
  );
}

export default Map;
