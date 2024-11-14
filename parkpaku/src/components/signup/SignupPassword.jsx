import React, { useState } from "react";
import "./Signup.css";

function SignupPassword({ onNext }) {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = () => {
    if (password && password === passwordConfirm) {
      onNext(password); // 비밀번호를 부모로 전달
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="form-container">
      <h1>첫, 비밀번호를 입력해주세요</h1>

      <div className="input-group">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
        <small>영문 포함 8-20자 이내</small>
      </div>

      <div className="input-group">
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="********"
        />
      </div>

      <button onClick={handleSubmit}>다음</button>
    </div>
  );
}

export default SignupPassword;
