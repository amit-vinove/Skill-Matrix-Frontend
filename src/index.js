import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navBar/topBar';
import LoginPage from './login/login'


ReactDOM.render(
  <React.StrictMode>
    <NavigationBar/>
    <LoginPage/>
  </React.StrictMode>,
  document.getElementById('root')
);


