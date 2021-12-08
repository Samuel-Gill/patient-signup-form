require('file-loader?name=[name.[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.less"

ReactDOM.render(
  <>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('app')
);
