import React, { useEffect, useState } from "react";
import Sidebar from "../navBar/sidebar";
import Navbar from "../navBar/topBar";
import navCss from "../../css/nav.css";
import homeCss from "../../css/home.css";
import questionsCss from "../../css/questions.css";
import { Card, Button } from "react-bootstrap";
import profileImg from "../../images/2474247.jpg";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { MdSend } from "react-icons/md";
import Stack from "@mui/material/Stack";
import Buttons from "@mui/material/Button";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import "./Profile.css";
import Skill from "./Skill";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Rating_info from "./Rating_info";

function GenericSkills() {
  const loggedUsername = localStorage.getItem("User");
  const profileURL = `http://localhost:5032/api/Employee/GetEmployeeByUsername?username=${loggedUsername}`;
  const [profile, setProfile] = useState([]);
  const [editform, setEditform] = useState(false);

  useEffect(() => {
    axios.get(profileURL).then((response) => {
      setProfile(response.data);
    });
  }, []);
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
          <div>
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
              <div className="wrapper">
                
              <div className="skill">
                  <h4>Oral Communication:</h4>
                </div>
                <div>
                  <ReactStars
                    count={6}
                    value={3}                           
                    size={50}
                    activeColor="#0073e6"
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
                      size={50}
                      activeColor="#0073e6"
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
                      size={50}
                      activeColor="#0073e6"
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
                      activeColor="#0073e6"
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
                      size={50}
                      activeColor="#0073e6"
                    />
                  </div>
                </div><hr/>
                <div className="wrapper">
                
                <div className="skill">
                    <h4>Management:</h4>
                  </div>
                  <div>
                    <ReactStars
                      count={6}
                      onChange={ratingChanged}
                      size={50}
                      activeColor="#0073e6"
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

          <div className="col-md-1"></div>

          <br/><br/>
          <Rating_info next={"/BasicFoundation"}/>
        </div>
      </div>
    </>
  );
}
export default GenericSkills;
