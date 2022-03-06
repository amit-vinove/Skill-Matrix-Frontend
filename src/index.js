import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Home/home'
import LoginPage from './login/login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


