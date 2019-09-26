import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import mapboxgl from 'mapbox-gl'
import token from './key.js'

mapboxgl.accessToken = token();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
