import React, { useState } from "react";
import "./Signup.css";

function SignupPassword({ onNext, onPrev }) {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 길이 체크 및 일치 여부 체크
    if (newPassword.length < 8 || newPassword.length > 20) {
      setError("비밀번호는 8자 이상, 20자 이하여야 합니다.");
    } else {
      setError(""); // 에러 초기화
    }
  };
  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setPasswordConfirm(newPasswordConfirm);

    // 비밀번호 확인이 일치하는지 체크
    if (password && newPasswordConfirm !== password) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError(""); // 에러 초기화
    }
  };

  return (
    <div className="signup-form-container">
      <button className="back-button" onClick={onPrev}>
        ◀이전
      </button>

      <h1 className="signup-subheading">첫, 비밀번호를 입력해주세요</h1>

      <div className="input-group">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="********"
        />
        <small className="small-text">영문 포함 8-20자 이내</small>
      </div>

      <div className="input-group">
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          placeholder="********"
        />
      </div>
      {error && <p className="error-text">{error}</p>}
      <button
        className={`signup-button ${
          password && password === passwordConfirm ? "active" : ""
        }`}
        onClick={() =>
          password && passwordConfirm === password && onNext(password)
        }
      >
        다음
      </button>
    </div>
  );
}

export default SignupPassword;
