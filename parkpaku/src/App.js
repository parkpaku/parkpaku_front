import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeMain from "./home/HomeMain";
import BottomBar from "./common/BottomBar";
import MyPakuList from "./components/myPakuList/MyPakuList.jsx";
import PakuDetail from "./parkDetail/ParkDetailMain.jsx";
import Signup from "./components/signup/Signup.jsx";
import ReviewWrite from "./review/ReviewWrite.jsx";
import SplashScreen from "./home/SplashScreen.jsx";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<HomeMain />} />
            <Route path="/myPakuList" element={<MyPakuList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/paku/:id" element={<PakuDetail />} />
            <Route path="/reviewWrite/:id" element={<ReviewWrite />} />
          </Routes>
        </main>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
