import React from "react";
import { Link } from "react-router-dom";
import "./BottomBar.css";

function BottomBar() {
  return (
    <nav className="bottom-bar">
      <Link to="/">홈</Link>
      <Link to="/other">기타</Link>
      <Link to="/myPaku">나의 paku</Link>
      {/* 네비게이션 링크들 필요 시 추가 */}
    </nav>
  );
}

export default BottomBar;
