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
      <h1>거주하고 있는 구를 알려주세요</h1>

      <div className="input-group">
        <label htmlFor="region">구</label>
        <select
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">선택하세요</option>
          <option value="busan">사하구</option>
          <option value="seoul">동래구</option>
          <option value="incheon">부산진구</option>
          <option value="incheon">남구</option>
          <option value="incheon">남구</option>
          <option value="incheon">남구</option>
          <option value="incheon">남구</option>
          <option value="incheon">남구</option>
          <option value="incheon">남구</option>
          <option value="incheon">남구</option>
          <option value="incheon">남구</option>
          <option value="incheon">남구</option>
        </select>
      </div>

      <button onClick={handleSubmit}>다음</button>
    </div>
  );
}

export default SignupRegion;
