import React, { useState } from "react";
import ReactDOM from "react-dom";
import HomePage from "./Components/Home/home";
import LoginPage from "./Components/login/login";
import ProfilePage from "./Components/Profile/profile";
import indexCss from "./css/index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function getAuth() {
  const loggedIn = localStorage.getItem("LoggedIn");
  if (loggedIn == "true") {
    return true;
  } else {
    return false;
  }
}

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  const loggedUsername = localStorage.getItem("User");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} activeClassName="active" />
      </Routes>
      <Routes>
        <Route
          path="/home"
          element={
            <RequireAuth redirectTo="/">
              <HomePage />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/profile"
          element={
            <RequireAuth redirectTo="/">
              <ProfilePage />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
