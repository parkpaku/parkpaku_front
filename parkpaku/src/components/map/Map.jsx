import { useEffect, useRef } from 'react';
import "./Map.css";

function Map() {
  const mapRef = useRef(null);
  const { naver } = window;
  
  useEffect(() => {
    if (!window.naver || !window.naver.maps) {
        console.error("네이버 지도 API가 로드되지 않았습니다.");
        return;
      }

    // 네이버 지도 옵션 선택
    const mapOptions = {
      // 지도의 초기 중심 좌표
      center: new naver.maps.LatLng(37.5666103, 126.9783882),
      logoControl: false, // 네이버 로고 표시 X
      mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
      scaleControl: true, // 지도 축척 컨트롤의 표시 여부
      tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
      zoom: 14, // 지도의 초기 줌 레벨
      zoomControl: true, // 줌 컨트롤 표시
      zoomControlOptions: { position: 9 }, // 줌 컨트롤 우하단에 배치
    };
    mapRef.current = new naver.maps.Map(
      'map',
      mapOptions
    );
  }, []);

  return (
    <div>
        <div id="map">
            
        <h1>야</h1>
        </div>
        
        

    </div>
  );
}

export default Map;