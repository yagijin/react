import React, { useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import './Map.css';
import token from '../key.js'

export default function ShowMap () {
  
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = token();
    //地図の描画の初期化
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [138.23, 34.58],
        maxBounds: [[137.4000, 34.4000],[139.2000, 35.8000]],
        trackResize: true
      });

      //??この処理をやる必要性を感じない
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });

    //第２引数として空の配列[]を渡すとこの副作用がコンポーネントの
    //どの値にも依存してないことがReact側に伝えられて更新時には実行されなくなる
  }, [map]);

  return (
      <div ref={el => (mapContainer.current = el)} className={'map'} />
  );
}
