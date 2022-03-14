import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Home/home'
import LoginPage from './login/login';
import ProfilePage from './Profile/profile';
import TodoPage from './Todo/todo';
import indexCss from "./css/index.css";

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
      <Route path="/" element={<LoginPage />} activeClassName="active" />
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
    <Routes>
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


