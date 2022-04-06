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
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import CloudQuestions from "./CloudQuestions";
import DevopsQuestions from "./DevopsQuestions";


export default function CloudAndDevops() {
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
                <h1>Devops</h1>
              </div>{" "}
              <br />
              <div>
                <Card className="questionsCard">
                  <div className="row">
                    <div className="col-md-12">
                      <Card.Body>
                        <Skill questions={DevopsQuestions} />
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </div>
              <br />
            </div>
            <div>
              <br />
              <div>
                <h1>Cloud</h1>
              </div>{" "}
              <br />
              <div>
                <Card className="questionsCard">
                  <div className="row">
                    <div className="col-md-12">
                      <Card.Body>
                        <Skill questions={CloudQuestions} />
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
          <Rating_info prev={"/WebServices"} next={"/CloudAndDevops"} />

          </div>
        </div>
      </div>
    </>
  )
}
