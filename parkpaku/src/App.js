import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeMain from "./home/HomeMain";
import BottomBar from "./common/BottomBar";
import MyPaku from "./components/myPaku/Map.jsx";
import PakuDetail from "./parkDetail/ParkDetailMain.jsx";
import Signup from "./components/signup/Signup.jsx";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/myPaku" element={<MyPaku />} />
            <Route path="/pakuDetail" element={<PakuDetail />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
