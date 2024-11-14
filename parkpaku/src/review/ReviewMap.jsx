import { useEffect, useRef, useState } from "react";
import parkImage1 from "../assets/image/1.png";
import parkImage2 from "../assets/image/2.png";
import parkImage3 from "../assets/image/3.png";
import parkImage4 from "../assets/image/4.png";
import "./ReviewMap.css";

function ReviewMap() {
  const mapRef = useRef(null);
  const [parks, setParks] = useState([]);
  const { naver } = window;

  useEffect(() => {
    if (!window.naver || !window.naver.maps) {
      console.error("네이버 지도 API가 로드되지 않았습니다.");
      return;
    }

    // 지도 초기화 옵션
    const mapOptions = {
      center: new naver.maps.LatLng(35.1158949746728, 128.97636469434755),
      logoControl: false,
      mapDataControl: false,
      scaleControl: true,
      tileDuration: 200,
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: { position: 9 },
    };

    // 네이버 지도 생성
    mapRef.current = new naver.maps.Map("map", mapOptions);

    // park_detail.json 파일에서 데이터 불러오기
    fetch("/park_detail.json")
      .then((response) => response.json())
      .then((data) => {
        setParks(data); // JSON 데이터를 parks 상태에 저장
        addMarkers(data); // 마커 추가
      })
      .catch((error) => {
        console.error("Error loading park_detail.json:", error);
      });
  }, []);

  const addMarkers = (data) => {
    data.forEach((park) => {
      // 이미지 파일 이름을 기준으로 import된 이미지를 사용하도록 변경
      let image;
      if (park.id == 0) image = parkImage1;
      else if (park.id == 3) image = parkImage2;
      else if (park.id == 2) image = parkImage3;
      else if (park.id == 4) image = parkImage4;
      else image = "else"; // 기본 이미지

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(park.latitude, park.longitude),
        map: mapRef.current,
        icon: {
          content: `<img src="${image}" width="60" height="60" style="border-radius: 20%; border: 3px solid white;" />`, // 이미지 둥글게 만들고 흰 테두리 추가
          size: new naver.maps.Size(60, 60),
          anchor: new naver.maps.Point(30, 30), // 이미지의 중앙에 맞추기
        },
      });
    });
  };

  return (
    <div>
      <h2>소소하지만 확실한 후기</h2>
      <div id="map" style={{ width: "100%", height: "75vh" }}></div>
    </div>
  );
}

export default ReviewMap;
