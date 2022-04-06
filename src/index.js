import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


