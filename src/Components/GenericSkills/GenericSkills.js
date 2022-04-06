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
import "../Profile/Profile.css";
import Skill from "../../Components/Skill";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Rating_info from "../Profile/Rating_info";
import GenericSkillQuestions from "./Questions";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

function GenericSkills() {
  const loggedUsername = localStorage.getItem("User");
  const profileURL = `http://localhost:5032/api/Employee/GetEmployeeByUsername?username=${loggedUsername}`;
  const [profile, setProfile] = useState([]);
  const [editform, setEditform] = useState(false);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

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
                <Card className="questionsCard">
                  <div className="row">
                    <div className="col-md-12">
                      <Card.Body>
                        <Skill questions={GenericSkillQuestions} />
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </div>
              <br />
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-3">
          <Rating_info next={"/BasicFoundation"} prev={false}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default GenericSkills;
