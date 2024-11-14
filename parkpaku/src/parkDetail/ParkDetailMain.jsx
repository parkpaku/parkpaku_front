import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ParkDetailMain.css";

import parkImage from "../assets/park_default.jpg";
import parkImage0 from "../assets/park_0.jpg";
import parkImage1 from "../assets/park_1.svg";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function ParkDetailMain({
  visitCount = 2,
  tags = ["스케이트 보드", "자전거", "갈대밭"],
}) {
  const [copyMessage, setCopyMessage] = useState("");
  const [parkData, setParkData] = useState({
    id: "",
    name: "",
    type: "",
    description: "",
    location: "",
    latitude: "",
    longitude: "",
    likes: "",
  });
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [isVerifying, setIsVerifying] = useState(false); // 인증 중 상태
  const [verificationMessage, setVerificationMessage] = useState(""); // 인증 결과 메시지
  const navigate = useNavigate();
  const { id } = useParams();

  const selectImage = (id) => {
    console.log("id:", id);
    switch (id) {
      case 0:
        return parkImage0;
      case 1:
        return parkImage1;
      default:
        return parkImage; // 기본 이미지
    }
  };

  useEffect(() => {
    const fetchParkData = async () => {
      try {
        const response = await fetch(`${SERVER_IP}/park/${id}`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "any",
          }),
        });

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setParkData(data); // 데이터를 상태에 설정
        } else {
          const textResponse = await response.text();
          console.error("예상치 않은 응답 (JSON이 아님):", textResponse);
        }
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    if (id) {
      fetchParkData(); // id가 존재할 경우 데이터 가져오기
    }
  }, [id]);

  const handleCopy = () => {
    navigator.clipboard.writeText(parkData.location).then(() => {
      setCopyMessage("클립보드에 복사되었습니다.");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  const handleWriteReview = () => {
    navigate(`/reviewWrite/${parkData.id}`);
  };

  // 현재 유저의 위치 값 얻기 및 Paku 인증 시작
  const getLocation = () => {
    if (navigator.geolocation) {
      setIsVerifying(true); // 인증 중 상태로 변경
      setVerificationMessage("인증 중이에요\n잠시만 기다려주세요...");

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          console.log(`현재 위치: 위도 ${latitude}, 경도 ${longitude}`);
          checkProximity(latitude, longitude);
        },
        (error) => {
          setIsVerifying(false);
          setVerificationMessage("위치를 가져오는데 실패했습니다.");
          console.error("위치를 가져오는데 실패했습니다.", error);
        }
      );
    } else {
      setVerificationMessage("이 브라우저는 Geolocation을 지원하지 않습니다.");
      console.error("이 브라우저는 Geolocation을 지원하지 않습니다.");
    }
  };

  // Paku 인증
  const checkProximity = (latitude, longitude) => {
    const targetLatitude = parkData.latitude;
    const targetLongitude = parkData.longitude;
    const distance = calculateDistance(
      latitude,
      longitude,
      targetLatitude,
      targetLongitude
    );

    setIsVerifying(false); // 인증 상태 해제
    if (distance <= 3) {
      // 예: 3km 이내
      setVerificationMessage("최고예요!\n다녀온 Paku 수가 늘었어요");
    } else {
      setVerificationMessage("현재 위치가 해당 위치와 멀리 떨어져 있습니다.");
    }
  };

  // 특정 위치와 내 위치 사이의 거리 계산 후 반환
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // 지구의 반경 (단위: km)
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // 거리 반환 (단위: km)
  };

  return (
    <div className="park-detail-main">
      <button className="back-button">이전</button>

      <div className="image-placeholder">
        <img src={parkImage} alt="공원 이미지" />
      </div>

      <div className="park-info">
        <h4>{parkData.type}</h4>
        <p className="park-info-name">{parkData.name}</p>
        <p className="park-info-des">{parkData.description}</p>
        {/* <p className="park-info-des">
          위도: {parkData.latitude} | 경도: {parkData.longitude}
        </p> */}
      </div>

      <div className="tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="like-count-container">
        <div className="like-counter">
          <p className="like-counter-label">좋아요</p>
          <p className="like-counter-value">{parkData.likes}</p>
        </div>
        <div className="visit-counter">
          <p className="visit-counter-label">가본 횟수</p>
          <p className="visit-counter-value">{visitCount}</p>
        </div>
      </div>

      <button className="check-button" onClick={getLocation}>
        <span className="check-button-title">Paku 인증</span>
        <span className="check-button-subtext">
          지금 공원에 있다면 인증해보세요
        </span>
      </button>

      {(isVerifying || verificationMessage) && (
        <div className="verification-modal">
          <div className="modal-content">
            <p>{verificationMessage}</p>
            {!isVerifying && verificationMessage.includes("최고예요") && (
              <button onClick={() => setVerificationMessage("")}>
                네, 좋아요.
              </button>
            )}
            {!isVerifying && verificationMessage.includes("현재") && (
              <button onClick={() => setVerificationMessage("")}>
                확인했어요.
              </button>
            )}
          </div>
        </div>
      )}

      <button className="write-review-button" onClick={handleWriteReview}>
        후기 쓰기
      </button>

      <section className="popular-review">
        <h3>인기 많은 후기</h3>
        <div className="review-card">
          <h4>아이랑 함께 왔어요</h4>
          <p>
            오늘 아침에 같이 산책겸 생태공원에 왔어요. 여기에 오늘 보니깐
            이벤트가 있..
          </p>
          <p>태연맘 | 24.11.14</p>
        </div>
      </section>

      <div className="location-info">
        <h4>위치 정보</h4>
        <div className="map-placeholder">구글지도</div>
        <div className="location-copy-container">
          <p>{parkData.location}</p>
          <button className="copy-button" onClick={handleCopy}>
            복사하기
          </button>
        </div>
        {copyMessage && <p className="copy-message">{copyMessage}</p>}
      </div>
    </div>
  );
}

export default ParkDetailMain;
