import React, { useRef, useState } from "react";
import "./BottomSheet.css";

function BottomSheet() {
  const [position, setPosition] = useState(0); // 초기 위치 설정
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const [deltaY, setDeltaY] = useState(0);

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
      console.log("deltaY 음수");
      console.log("position:", position);
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
        <div className="tab active">다녀온 Paku</div>
        <div className="tab">안가본 Paku</div>
      </div>
      <div className="list">
        <div className="list-item">
          <p>삼락 생태공원</p>
          <p>부산 사상구</p>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
