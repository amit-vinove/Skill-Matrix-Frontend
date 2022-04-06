import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/navBar/sidebar";
import Navbar from "../../Components/navBar/topBar";
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
import { ArrowRight , ArrowLeft } from 'react-bootstrap-icons';


export default function() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      }
    const [profile, setProfile] = useState([]);
  const [editform, setEditform] = useState(false);
    const changeComp = () => {
        setEditform(true);
      };
      const cancelEdit = () => {
        setEditform(false);
      };
      const navigate = useNavigate();
      const moveNext = () => {
        navigate("/basicFoundation");
      };
    
  return (
    <div className="rating_info">
    <h2>Rating info</h2>
    <Card style={{ border: "none" }}>
      <Card.Body>
        <div className="info">
          <div className="info_rating">
            <h6>Not Required</h6>
          </div>
          <div>
            <ReactStars
              count={6}
              value={1}
              size={35}
              activeColor="#0073e6"
            />
          </div>
          <div className="info_rating">
            <h6>No Capability</h6>
          </div>
          <div>
            <ReactStars
              count={6}
              value={2}
              size={35}
              activeColor="#0073e6"
            />
          </div>
          <div className="info_rating">
            <h6>Basic Level</h6>
          </div>
          <div>
            <ReactStars
              count={6}
              value={3}
              size={35}
              activeColor="#0073e6"
            />
          </div>
          <div className="info_rating">
            <h6>Intermediate Level</h6>
          </div>
          <div>
            <ReactStars
              count={6}
              value={4}
              size={35}
              activeColor="#0073e6"
            />
          </div>
          <div className="info_rating">
            <h6>Advanced Level</h6>
          </div>
          <div>
            <ReactStars
              count={6}
              value={5}
              size={35}
              activeColor="#0073e6"
            />
          </div>
          <div className="info_rating">
            <h6>Expert/SME</h6>
          </div>
          <div>
            <ReactStars
              count={6}
              value={6}
              size={35}
              activeColor="#0073e6"
            />
          </div>
        </div>
        <Button className="prevBtn" variant="outline-primary"><ArrowLeft/> Prev Section</Button>{' '}
    <Button className="nextBtn" variant="primary">Next Section <ArrowRight/></Button>{' '}
      </Card.Body>
    </Card>
    
      <>
        {/* <div className="editbutton">
          <Buttons
            variant={"outlined"}
            color={"warning"}

          >
            <BsPencilSquare size={30} />
            &nbsp;&nbsp;Edit
          </Buttons>
          <br />
          <br />
          <Buttons
            variant={"outlined"}
            color={"info"}

          >
            <GrLinkNext color={"#1976d2"} size={30} />
            &nbsp;&nbsp;Next
          </Buttons>
        </div> */}
      </>
    
    {/* {editform === true && (
      <>
        <hr />
        <br />
        <div className="editbutton">
          <Buttons
            variant={"outlined"}
            color={"error"}
            onClick={cancelEdit}
          >
            <MdOutlineCancelPresentation size={30} />
            &nbsp;&nbsp;Cancel Edit
          </Buttons>
          <br />
          <br />
          <Buttons variant={"outlined"} color={"success"}>
            <MdSend size={30} />
            &nbsp;&nbsp;Submit
          </Buttons>
          <br />
          <br />
        </div>
      </>
    )} */}
  </div>
  )
}
