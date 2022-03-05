import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navBar/topBar';
import HomePage from './Home/home'
import Sidebar from './navBar/sidebar'
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <NavigationBar/>
    <HomePage/>
  </React.StrictMode>,
  document.getElementById('root')
);


