import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import "./BottomBar.css";

function BottomBar() {
  return (
    <nav className="bottom-bar">
      <Link to="/" className="bottom-bar-item">
        <AiFillHome size={24} />
        <span>홈</span>
      </Link>
      <Link to="/community" className="bottom-bar-item">
        <MdForum size={24} />
        <span>커뮤니티</span>
      </Link>
      <Link to="/profile" className="bottom-bar-item">
        <AiFillInfoCircle size={24} />
        <span>내정보</span>
      </Link>
    </nav>
  );
}

export default BottomBar;
