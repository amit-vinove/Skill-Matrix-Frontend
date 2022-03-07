import React from "react";
import Sidebar from "../navBar/sidebar";
import Navbar from "../navBar/topBar";
import navCss from '../css/nav.css'
import indexCss from '../css/index.css'




function ProfilePage() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-1 sideNav">
            <Sidebar/>
            </div>
            <div className="col-md-6">
            <div>
      </div>{" "}
      <br /> <br />
      <div className="row">
        <div className="col-md-12">
          <div>
            <h4 style={{ fontWeight: 500 }}> Primary Details </h4>
            <hr />
            <div className="row">
              <div className="col">
                <label>First Name:</label>
                <h5>Amit </h5>
              </div>
              <div className="col">
                <label>Last Name:</label>
                <h5>Kumar</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Gender:</label>
                <h5>Male</h5>
              </div>
              <div className="col">
                <label>Date of Birth:</label>
                <h5>09/02/2000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h4 style={{ fontWeight: 500 }}> Contact Details </h4>
        <hr />
        <div className="row">
          <div className="col">
            <label>Email:</label>
            <h5>amit.kumar3@mail.vinove.com</h5>
          </div>
          <div className="col">
            <label>Phone:</label>
            <h5>123456789</h5>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h4 style={{ fontWeight: 500 }}> Address Details </h4>
        <hr />
        <div className="row">
          <div className="col">
            <label>Permanent Address:</label>
            <br />
            <h5>D-8 , Delhi , India</h5>
          </div>
          <div className="col">
            <label>Current Address:</label>
            <br />
            <h5>D-8 , Delhi , India</h5>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h4 style={{ fontWeight: 500 }}> Educational Details </h4>
        <hr />
        <div className="row">
          <div className="col">
            <label>Undergraduate Course:</label>
            <br />
            <h5>B.tech</h5>
          </div>
          <div className="col">
            <label>Stream:</label>
            <br />
            <h5>IT</h5>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>12th Percentage:</label>
            <br />
            <h5>75 %</h5>
          </div>
          <div className="col">
            <label>10th Percentage:</label>
            <br />
            <h5>80 %</h5>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h4 style={{ fontWeight: 500 }}>About </h4>
        <hr />
        <div className="row">
          <div className="col">
            <h5>Junior Associate Software Developer</h5>
          </div>
        </div>
      </div>
            </div>
    </div>
    </div>
    </>
  );
}
export default ProfilePage;
