import { useEffect, useRef } from "react";

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
      center: new naver.maps.LatLng(35.1681608, 129.0573853),
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
        position: new naver.maps.LatLng(35.1681608, 129.0573853),
        image: "https://via.placeholder.com/150?text=1", // 이미지 URL
      },
      {
        position: new naver.maps.LatLng(35.1701608, 129.0603853),
        image: "https://via.placeholder.com/150?text=2", // 이미지 URL
      },
    ];

    // 마커 및 클릭 이벤트 추가
    markerData.forEach((data) => {
      const marker = new naver.maps.Marker({
        position: data.position,
        map: mapRef.current,
      });

      // 마커 클릭 시 사진을 보여주는 이벤트 추가
      naver.maps.Event.addListener(marker, "click", () => {
        const infowindow = new naver.maps.InfoWindow({
          content: `<img src="${data.image}" alt="image" width="200" />`, // 클릭 시 보여줄 이미지
        });

        infowindow.open(mapRef.current, marker);
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
