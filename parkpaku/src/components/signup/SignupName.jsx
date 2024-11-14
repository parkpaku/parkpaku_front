import React, { useState } from "react";
import "./Signup.css";

function SignupName({ onNext }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name) {
      onNext(name); // 이름을 부모로 전달
    }
  };

  return (
    <div className="form-container">
      <h1>만나서 반가워요!</h1>
      <p>본인의 정보를 입력해주세요</p>

      <div className="input-group">
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="홍길동"
        />
      </div>

      <button onClick={handleSubmit}>다음</button>
    </div>
  );
}

export default SignupName;
