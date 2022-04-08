import React, { useState } from "react";
import ReactDOM from "react-dom";
import HomePage from "./Components/Home/home";
import LoginPage from "./Components/login/login";
import indexCss from "./css/index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BasicFoundation from "./Components/BasicFoundation/BasicFoundation";
import GenericSkills from "./Components/GenericSkills/GenericSkills";
import TestDrivenDev from "./Components/TestDrivenDev/TestDrivenDev";
import Sdlc from "./Components/Sdlc/Sdlc";
import JsAndFront from "./Components/JsAndFront/JsAndFront";
import SqlServer from "./Components/SqlServer/SqlServer";
import WebServices from "./Components/WebServices/WebServices";
import CloudAndDevops from "./Components/CloudAndDevops/CloudAndDevops";
import TeamSkills from "./Components/TeamSkills/TeamSkills";

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
          path="/GenericSkills"
          element={
            <RequireAuth redirectTo="/">
              <GenericSkills />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/BasicFoundation"
          element={
            <RequireAuth redirectTo="/">
              <BasicFoundation />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Testing"
          element={
            <RequireAuth redirectTo="/">
              <TestDrivenDev />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/SdlcPractices"
          element={
            <RequireAuth redirectTo="/">
              <Sdlc />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/JsAndFrontend"
          element={
            <RequireAuth redirectTo="/">
              <JsAndFront />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/TeamSkills"
          element={
            <RequireAuth redirectTo="/">
              <TeamSkills />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/SqlServer"
          element={
            <RequireAuth redirectTo="/">
              <SqlServer />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/WebServices"
          element={
            <RequireAuth redirectTo="/">
              <WebServices />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/CloudAndDevops"
          element={
            <RequireAuth redirectTo="/">
              <CloudAndDevops />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
