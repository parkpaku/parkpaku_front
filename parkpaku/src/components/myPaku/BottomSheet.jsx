import React, { useEffect, useRef, useState } from "react";
import "./BottomSheet.css";

function BottomSheet() {
  const [position, setPosition] = useState(0); // 초기 위치 설정
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const [deltaY, setDeltaY] = useState(0);
  const [activeTab, setActiveTab] = useState("visited"); // 현재 활성화된 탭
  const [items, setItems] = useState([]); // items 상태 초기화

  useEffect(() => {
    // JSON 파일을 fetch로 불러와서 상태에 저장
    fetch("/park_data.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data); // 불러온 데이터를 items 상태에 저장
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }, []);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentY = e.touches[0].clientY;
    setDeltaY(currentY - startY.current);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;

    // 아이템 개수에 따라 바텀시트 높이를 동적으로 조정합니다.
    const numberOfItems = items.filter((item) => item.visits > 0).length;

    if (deltaY < 0) {
      // 위로 올린 경우: 아이템의 개수에 따라 위치를 조정합니다.
      // 예: 0개일 경우에는 바텀시트가 살짝 올라가게 하고, 3개일 경우에는 아이템이 보이도록 올리기
      if (numberOfItems === 0) {
        setPosition(-50); // 아이템이 없으면 살짝 올라가는 효과만
      } else {
        setPosition(-numberOfItems * 100); // 아이템 개수에 맞춰 올라가기
      }
    } else {
      // 아래로 내린 경우: 원위치로 돌아가기
      setPosition(0); // 원래 위치로 복귀 (이미지 1처럼)
    }
  };

  return (
    <div
      ref={sheetRef}
      className="sliding-bottom-sheet"
      style={{ transform: `translateY(${position}px)` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="handle-bar" />
      <div className="tabs">
        <div
          className={`tab ${activeTab === "visited" ? "active" : "inactive"}`}
          onClick={(e) => {
            e.stopPropagation(); // 이벤트 전파 중단
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
            e.stopPropagation(); // 이벤트 전파 중단
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
                <div className="list-item" key={index}>
                  <p>{item.name}</p>
                  <p>{item.location}</p>
                  <p>방문 횟수: {item.visits}</p>
                  <button>ㅇ</button>
                </div>
              ))
          : // 안 간 Paku 목록
            items
              .filter((item) => item.visits === 0) // 방문 횟수가 0인 아이템만 필터링
              .map((item, index) => (
                <div className="list-item" key={index}>
                  <p>{item.name}</p>
                  <p>{item.location}</p>
                  <button>ㅇ</button>
                </div>
              ))}
      </div>
    </div>
  );
}

export default BottomSheet;
