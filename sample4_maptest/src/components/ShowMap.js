import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './Map.css';
import token from '../key.js'

export default function ShowMap () {
  mapboxgl.accessToken = token();
  var map;
  var container;

  useEffect(() => {
    //地図の描画の初期化
    map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/streets-v9',
    })
    //地図をクリーンアップ
    return () => {
      map.remove()
    };
    //第２引数として空の配列[]を渡すとこの副作用がコンポーネントの
    //どの値にも依存してないことがReact側に伝えられて更新時には実行されなくなる
  },[]);

  return (
      <div className={'map'} ref={e => (container = e)} />
  );
}
