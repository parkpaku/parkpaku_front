import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import "./BottomBar.css";

import homeIcon from "../assets/home/bottomBar/ic_home.png";
import myPakuIcon from "../assets/home/bottomBar/ic_myPaku.png";

function BottomBar() {
  return (
    <nav className="bottom-bar">
      <Link to="/home" className="bottom-bar-item">
        <img src={homeIcon} className="bottom-bar-icon" />
        <span>홈</span>
      </Link>
      <Link to="/myPakuList" className="bottom-bar-item">
        <img src={myPakuIcon} className="bottom-bar-icon" />
        <span>나의 Paku</span>
      </Link>
      <Link to="/reviewMap" className="bottom-bar-item">
        <img src={myPakuIcon} className="bottom-bar-icon" />

        <span>소확후</span>

      </Link>
    </nav>
  );
}

export default BottomBar;
