import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/navBar/sidebar";
import Navbar from "../../Components/navBar/topBar";
import navCss from "../../css/nav.css";
import homeCss from "../../css/home.css";
import questionsCss from "../../css/questions.css";
import { Card, Button } from "react-bootstrap";
import profileImg from "../../images/2474247.jpg";
import Stack from "@mui/material/Stack";
import Buttons from "@mui/material/Button";
import axios from "axios";

function ProfilePage() {
  const loggedUsername = localStorage.getItem("User");
  const profileURL = `http://localhost:5032/api/Employee/GetEmployeeByUsername?username=${loggedUsername}`;
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get(profileURL).then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <br />
            <div>
              <h1>General Skills</h1>
            </div>{" "}
            <br />
            <div>
              <Card>
                <div className="row">
                  <div className="col-md-12">
                    <Card.Body>
                      <div>
                      <h4>1. Oral Communication</h4>
                      <Stack spacing={1} className="optionsRow" direction="row">
                        <Buttons className="options" variant="outlined">0 Not Required</Buttons>
                        <Buttons className="options" variant="outlined">1 No Capability</Buttons>
                        <Buttons className="options" variant="outlined">2 Basic Level</Buttons>
                        <Buttons className="options" variant="outlined">3 Intermediate Level</Buttons>
                        <Buttons className="options" variant="outlined">4 Advanced Level</Buttons>
                        <Buttons className="options" variant="outlined">5 Expert/SME</Buttons>
                      </Stack>
                      </div>
                      <br/>
                      <div>
                      <h4>2. Written Communication</h4>
                      <Stack spacing={1} className="optionsRow" direction="row">
                        <Buttons className="options" variant="outlined">0 Not Required</Buttons>
                        <Buttons className="options" variant="outlined">1 No Capability</Buttons>
                        <Buttons className="options" variant="outlined">2 Basic Level</Buttons>
                        <Buttons className="options" variant="outlined">3 Intermediate Level</Buttons>
                        <Buttons className="options" variant="outlined">4 Advanced Level</Buttons>
                        <Buttons className="options" variant="outlined">5 Expert/SME</Buttons>
                      </Stack>
                      <br/>
                      </div> 
                      <div>
                      <h4>3. Process Conformance</h4>
                      <Stack spacing={1} className="optionsRow" direction="row">
                        <Buttons className="options" variant="outlined">0 Not Required</Buttons>
                        <Buttons className="options" variant="outlined">1 No Capability</Buttons>
                        <Buttons className="options" variant="outlined">2 Basic Level</Buttons>
                        <Buttons className="options" variant="outlined">3 Intermediate Level</Buttons>
                        <Buttons className="options" variant="outlined">4 Advanced Level</Buttons>
                        <Buttons className="options" variant="outlined">5 Expert/SME</Buttons>
                      </Stack>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
