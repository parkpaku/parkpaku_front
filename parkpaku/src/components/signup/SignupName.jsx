import React, { useState } from "react";
import "./Signup.css";

function SignupName({ onNext }) {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = () => {
    if (name && nickname) {
      onNext({ name, nickname }); // 이름과 닉네임을 부모로 전달
    }
  };

  return (
    <div className="signup-form-container">
      <h1 className="signup-heading">만나서 반가워요!</h1>
      <h1 className="signup-subheading">본인의 정보를 입력해주세요</h1>

      <div className="input-group">
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ex.홍길동"
        />
        <small>
          <span className="tip-text">TIP! </span> 실명이 입력되어 있는지
          확인해주세요.
        </small>
      </div>

      <div className="input-group">
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="요술단지 파쿠"
        />
      </div>

      <button
        className={`signup-button ${name && nickname ? "active" : ""}`} // 이름과 닉네임이 입력되면 버튼 활성화
        onClick={handleSubmit}
        disabled={!name || !nickname} // 둘 중 하나라도 없으면 비활성화
      >
        다음
      </button>
    </div>
  );
}

export default SignupName;
