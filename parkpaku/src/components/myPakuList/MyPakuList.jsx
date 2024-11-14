import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./MyPakuList.css";

function Map() {
  const [items, setItems] = useState([]); // 구역 데이터
  const [activeTab, setActiveTab] = useState("visited"); // 현재 활성화된 탭
  const navigate = useNavigate();

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

  const handleItemClick = (id) => {
    navigate(`/paku/${id}`); // 상세 페이지로 이동 (id를 URL에 포함)
  };

  return (
    <div className="map">
      <div>
        <Link to="/home" className="back">
          ◀이전
        </Link>
        <h1>나의 Paku</h1>
      </div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === "visited" ? "active" : "inactive"}`}
          onClick={() => {
            setActiveTab("visited");
          }}
        >
          다녀온 Paku
        </div>
        <div
          className={`tab ${
            activeTab === "notVisited" ? "active" : "inactive"
          }`}
          onClick={(e) => {
            setActiveTab("notVisited");
          }}
        >
          안가본 Paku
        </div>
      </div>
      <div className="list">
        {activeTab === "visited"
          ? // 방문한 Paku 목록
            items
              .filter((item) => item.visits > 0) // 방문 횟수가 0보다 큰 아이템만 필터링
              .map((item, index) => (
                <div
                  className="list-item"
                  key={index}
                  onClick={() => handleItemClick(item.id)} // 클릭 시 상세 페이지로 이동
                >
                  <p>{item.name}</p>
                  <p>{item.location}</p>
                  <p>방문 횟수: {item.visits}</p>
                  <button>😊</button>
                </div>
              ))
          : // 안 간 Paku 목록
            items
              .filter((item) => item.visits === 0) // 방문 횟수가 0인 아이템만 필터링
              .map((item, index) => (
                <div
                  className="list-item"
                  key={index}
                  onClick={() => handleItemClick(item.id)} // 클릭 시 상세 페이지로 이동
                >
                  <p>{item.name}</p>
                  <p>{item.location}</p>
                  <button>🥲</button>
                </div>
              ))}
      </div>
    </div>
  );
}

export default Map;
