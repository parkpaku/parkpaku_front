import React, { useRef, useState } from "react";
import "./BottomSheet.css";

function BottomSheet() {
  const [position, setPosition] = useState(0); // 초기 위치 설정
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const [deltaY, setDeltaY] = useState(0);
  const [activeTab, setActiveTab] = useState("visited"); // 현재 활성화된 탭

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
    // 조건에 따라 바텀시트를 닫거나 열도록 설정
    if (deltaY < 0) {
      setPosition(-500); // 20% 높이에 위치
    } else {
      setPosition(0); // 초기 위치로 복귀
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
        {activeTab === "visited" ? (
          <div className="list-item">
            <p>삼락 생태공원</p>
            <p>부산 사상구</p>
            <button>ㅇ</button>
          </div>
        ) : (
          <div className="list-item">
            <p>해운대 해수욕장</p>
            <p>부산 해운대구</p>
            <button>ㅇ</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BottomSheet;
