import React, { useState } from "react";
import SignupName from "./SignupName.jsx";
import SignupPassword from "./SignupPassword.jsx";
import SignupRegion from "./SignupRegion.jsx";

function Signup() {
  const [step, setStep] = useState(1); // 현재 단계 (1: 이름, 2: 비밀번호, 3: 지역)
  const [name, setName] = useState(""); // 이름 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [region, setRegion] = useState(""); // 지역 상태

  const handleNext = (data) => {
    if (step === 1) {
      setName(data.name);
      setNickname(data.nickname);
      setStep(2); // 이름 입력 후 비밀번호 페이지로 이동
    } else if (step === 2) {
      setPassword(data);
      setStep(3); // 비밀번호 입력 후 지역 페이지로 이동
    } else if (step === 3) {
      console.log("data:", data);
      setRegion(data);
      setName(name);
      console.log("회원가입 완료:", { name, nickname, password, region });
      // 회원가입 완료 후 추가적인 동작 (예: API 요청 등)
    }
  };

  const handlePrev = () => {
    if (step === 2) {
      setStep(1); // 이전: step 2 -> step 1
    } else if (step === 3) {
      setStep(2); // 이전: step 3 -> step 2
    }
  };

  return (
    <div>
      {step === 1 && <SignupName onNext={handleNext} />}
      {step === 2 && <SignupPassword onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <SignupRegion onNext={handleNext} onPrev={handlePrev} />}
    </div>
  );
}

export default Signup;
