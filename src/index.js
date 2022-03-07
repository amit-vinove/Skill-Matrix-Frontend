import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Home/home'
import LoginPage from './login/login';
import ProfilePage from './Profile/profile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmployeePage from './Employee/employee';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
    <Routes>
      <Route path="/employee" element={<EmployeePage />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


