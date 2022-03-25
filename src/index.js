import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Home/home'
import LoginPage from './login/login';
import ProfilePage from './Profile/profile';
import TodoPage from './Todo/todo';
import indexCss from "./css/index.css";
import App from './app';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmployeePage from './Employee/employee';
import TeamsPage from './Teams/teams';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


