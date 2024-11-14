import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 사용
//import "./SplashScreen.css"; // 이미지 스타일을 위한 CSS 파일

function SplashScreen() {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  useEffect(() => {
    // 3초 후에 메인 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/signup"); // '/main'은 메인 페이지의 경로로 수정하세요
    }, 3000); // 3초(3000ms)

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src="../assets/splash.png" alt="Splash" />
    </div>
  );
}

export default SplashScreen;
