import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeMain from "./home/HomeMain";
import BottomBar from "./common/BottomBar";
import MyPaku from "./components/myPaku/Map.jsx";

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
          </Routes>
        </main>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
