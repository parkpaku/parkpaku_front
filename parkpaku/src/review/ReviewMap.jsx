import { useEffect, useRef } from "react";
import park0Image from "../assets/park_0.jpg";
import parkDefaultImage from "../assets/park_default.jpg";

function ReviewMap() {
  const mapRef = useRef(null);
  const { naver } = window;

  useEffect(() => {
    if (!window.naver || !window.naver.maps) {
      console.error("네이버 지도 API가 로드되지 않았습니다.");
      return;
    }

    // 지도 초기화 옵션
    const mapOptions = {
      center: new naver.maps.LatLng(35.1047846, 129.0190933),
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

    // 마커 데이터 예시 (위도, 경도, 사진 URL)
    const markerData = [
      {
        position: new naver.maps.LatLng(35.1047846, 129.0190933),
        image: park0Image, // import한 이미지 사용
      },
      {
        position: new naver.maps.LatLng(35.1317807, 128.9853735),
        image: parkDefaultImage, // import한 이미지 사용
      },
      {
        position: new naver.maps.LatLng(35.1090608, 128.9632928),
        image: parkDefaultImage, // import한 이미지 사용
      },
      {
        position: new naver.maps.LatLng(35.1037833, 128.9430727),
        image: parkDefaultImage, // import한 이미지 사용
      },
    ];

    // 마커 및 이미지 추가
    markerData.forEach((data) => {
      const marker = new naver.maps.Marker({
        position: data.position,
        map: mapRef.current,
        icon: {
          content: `<img src="${data.image}" width="60" height="60" style="border-radius: 50%;" />`, // 마커에 이미지를 삽입하고 크기 조정
          size: new naver.maps.Size(60, 60), // 마커 크기 설정
          anchor: new naver.maps.Point(30, 30), // 마커 중앙을 위치에 맞춤
        },
      });
    });
  }, []);

  return (
    <div>
      <h2>소소하지만 확실한 후기</h2>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
}

export default ReviewMap;
