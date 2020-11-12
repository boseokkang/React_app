import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 현재 위치 ./ App function 찾음 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // index.html 안의 root 찾음
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
