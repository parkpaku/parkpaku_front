import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function SignupRegion({ onNext, onPrev }) {
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (region) {
      console.log(region);
      onNext(region); // 지역을 부모로 전달
      navigate("/home");
    } else {
      alert("지역을 선택해주세요.");
    }
  };

  return (
    <div className="signup-form-container">
      <button className="back-button" onClick={onPrev}>
        ◀이전
      </button>

      <h1 className="signup-heading">거주하고 있는 지역을 알려주세요</h1>

      <div className="input-group">
        <label htmlFor="region">지역</label>
        <select
          id="region"
          value={region} // 지역 선택 값과 상태 연결
          onChange={(e) => setRegion(e.target.value)} // 값 변경 시 상태 업데이트
          className="select-group"
        >
          <option value="">지역을 선택하세요</option>
          <option value="사상구">사상구</option>
          <option value="해운대구">해운대구</option>
          <option value="부산진구">부산진구</option>
          <option value="기장군">기장군</option>
          <option value="강서구">강서구</option>
          <option value="남구">남구</option>
          <option value="동구">동구</option>
          <option value="동래구">동래구</option>
        </select>
      </div>

      <button
        className={`signup-button ${region ? "active" : ""}`} // 지역이 선택되면 버튼 활성화
        onClick={handleSubmit} // 버튼 클릭 시 handleSubmit 호출
        disabled={!region} // 지역이 선택되지 않으면 버튼 비활성화
      >
        다음
      </button>
    </div>
  );
}

export default SignupRegion;
