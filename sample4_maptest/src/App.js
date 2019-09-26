import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css';

export default function App() {
  var map;
  var container;
  
  useEffect(() => {
    map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/streets-v9',
    })
    return () => {
      map.remove()
    };
  },[]);

  return (
    <div className={'map'} ref={e => (container = e)} />
  );
}
