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

function ProfilePage() {
  const loggedUsername = localStorage.getItem("User");
  const profileURL = `http://localhost:5032/api/Employee/GetEmployeeByUsername?username=${loggedUsername}`;
  const [profile, setProfile] = useState([]);
  const [editform, setEditform] = useState(false);

  useEffect(() => {
    axios.get(profileURL).then((response) => {
      setProfile(response.data);
    });
  }, []);
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
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>

          <div className="col-md-7">
            {editform === false && <Skill edit={false} />}
            {editform === true && <Skill edit={true} />}
          </div>

          <div className="col-md-1"></div>

          <br/><br/>
          <div className="rating_info col-md-3">
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
                      edit={false}
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
                      edit={false}
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
                      edit={false}
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
                      edit={false}
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
                      edit={false}
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
                      edit={false}
                      size={35}
                      activeColor="#0073e6"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            {editform === false && (
              <>
                <hr />
                <br />
                <div className="editbutton">
                  <Buttons
                    variant={"outlined"}
                    color={"warning"}
                    onClick={changeComp}
                  >
                    <BsPencilSquare size={30} />
                    &nbsp;&nbsp;Edit
                  </Buttons>
                  <br />
                  <br />
                  <Buttons
                    variant={"outlined"}
                    color={"info"}
                    onClick={moveNext}
                  >
                    <GrLinkNext color={"#1976d2"} size={30} />
                    &nbsp;&nbsp;Next
                  </Buttons>
                </div>

                <br />
                <br />
              </>
            )}
            {editform === true && (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
