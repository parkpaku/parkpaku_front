import React, { useState } from "react";
import "./Signup.css";

function SignupRegion({ onNext }) {
  const [region, setRegion] = useState("");

  const handleSubmit = () => {
    if (region) {
      onNext(region); // 지역을 부모로 전달
    }
  };

  return (
    <div className="form-container">
      <h1>거주하고 있는 지역을 알려주세요</h1>

      <div className="input-group">
        <label htmlFor="region">지역</label>
        <select
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">선택하세요</option>
          <option value="busan">부산</option>
          <option value="seoul">서울</option>
          <option value="incheon">인천</option>
          {/* 지역 추가 가능 */}
        </select>
      </div>

      <button onClick={handleSubmit}>다음</button>
    </div>
  );
}

export default SignupRegion;
