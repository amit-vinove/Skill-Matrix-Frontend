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
import ReactStars from "react-rating-stars-component";
import './Profile.css';

function ProfilePage() {
  const loggedUsername = localStorage.getItem('User')
  const profileURL = `http://localhost:5032/api/Employee/GetEmployeeByUsername?username=${loggedUsername}`
  const [profile, setProfile] = useState([])

  useEffect(() => {
    axios.get(profileURL).then((response) => {
      setProfile(response.data)
    })
  }, [])
  const ratingChanged = (newRating) => {
    console.log(newRating);
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>
          <div className="col-md-7">
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
                      {/* <div>
                        <h4>Oral Communication</h4>
                        <Stack spacing={3} direction="row">

                          <Buttons variant="outlined"  >0 <br /> <>Not required</></Buttons>
                          <Buttons variant="outlined">1 <br /> <>No Capability</></Buttons>
                          <Buttons variant="outlined">2 <br /> <>Basic Level</></Buttons>
                          <Buttons classname='Rating' variant="outlined">3 <br /> <>Intermediate Level</></Buttons>
                          <Buttons variant="outlined">4 <br /> <>Advanced Level</></Buttons>
                          <Buttons variant="outlined">5 <br /> <>Expert/SME</></Buttons>
                        </Stack>
                      </div> <br /> <hr /> */}
                      <div className="wrapper">
                        
                      <div className="skill">
                          <h4>Oral Communication:</h4>
                        </div>
                        <div>
                          <ReactStars
                            count={6}
                            onChange={ratingChanged}
                            size={50}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="wrapper">
                        
                        <div className="skill">
                            <h4>Written Communication:</h4>
                          </div>
                          <div>
                            <ReactStars
                              count={6}
                              onChange={ratingChanged}
                              size={50}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div><hr />
                        <div className="wrapper">
                        
                        <div className="skill">
                            <h4>Process Conformance:</h4>
                          </div>
                          <div>
                            <ReactStars
                              count={6}
                              onChange={ratingChanged}
                              size={50}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div><hr />
                        <div className="wrapper">
                        
                        <div className="skill">
                            <h4>Presentation Skills:</h4>
                          </div>
                          <div>
                            <ReactStars
                              count={6}
                              onChange={ratingChanged}
                              size={50}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div><hr />
                        <div className="wrapper">
                        
                        <div className="skill">
                            <h4>Leadership Skills:</h4>
                          </div>
                          <div>
                            <ReactStars
                              count={6}
                              onChange={ratingChanged}
                              size={40}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div>
                        <div className="wrapper">
                        
                        <div className="skill">
                            <h4>Management:</h4>
                          </div>
                          <div>
                            <ReactStars
                              count={6}
                              onChange={ratingChanged}
                              size={40}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div>
                    
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
