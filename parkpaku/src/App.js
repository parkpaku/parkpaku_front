import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomeMain from "./home/HomeMain";
import BottomBar from "./common/BottomBar";
import MyPakuList from "./components/myPakuList/MyPakuList.jsx";
import PakuDetail from "./parkDetail/ParkDetailMain.jsx";
import Signup from "./components/signup/Signup.jsx";
import ReviewWrite from "./review/ReviewWrite.jsx";
import SplashScreen from "./home/SplashScreen.jsx";
import ReviewMap from "./review/ReviewMap.jsx";

function App() {
  return (
    <Router>
      {" "}
      {/* Router 컴포넌트로 감싸기 */}
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // useLocation() 훅은 Router 내부에서만 사용 가능

  // 바텀탭을 숨길 경로를 설정
  const hideBottomBarPaths = ["/", "/signup"]; // '/'와 '/signup'에서 바텀탭 숨기기

  const showBottomBar = !hideBottomBarPaths.includes(location.pathname);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<HomeMain />} />
          <Route path="/myPakuList" element={<MyPakuList />} />
          <Route path="/reviewMap" element={<ReviewMap />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/paku/:id" element={<PakuDetail />} />
          <Route path="/reviewWrite/:id" element={<ReviewWrite />} />
        </Routes>
      </main>
      {showBottomBar && <BottomBar />} {/* 조건부로 바텀탭 표시 */}
    </div>
  );
}

export default App;
