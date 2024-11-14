import React, { useState } from "react";
import SignupName from "./SignupName";
import SignupPassword from "./SignupPassword";
import SignupRegion from "./SignupRegion";

function Signup() {
  const [step, setStep] = useState(1); // 현재 단계 (1: 이름, 2: 비밀번호, 3: 지역)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");

  const handleNext = (data) => {
    if (step === 1) {
      setName(data);
      setStep(2); // 이름 입력 후 비밀번호 페이지로 이동
    } else if (step === 2) {
      setPassword(data);
      setStep(3); // 비밀번호 입력 후 지역 페이지로 이동
    } else if (step === 3) {
      setRegion(data);
      console.log("회원가입 완료:", { name, password, region });
      // 회원가입 완료 후 추가적인 동작 (예: API 요청 등)
    }
  };

  return (
    <div>
      {step === 1 && <SignupName onNext={handleNext} />}
      {step === 2 && <SignupPassword onNext={handleNext} />}
      {step === 3 && <SignupRegion onNext={handleNext} />}
    </div>
  );
}

export default Signup;
