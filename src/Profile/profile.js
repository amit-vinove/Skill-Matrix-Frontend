import React from "react";
import Sidebar from "../navBar/sidebar";
import Navbar from "../navBar/topBar";
import navCss from "../css/nav.css";
import indexCss from "../css/index.css";
import { Card , Button} from 'react-bootstrap'
import profileImg from '../images/2474247.jpg'

function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>
          <div className="col-md-11">
            <br/>
            <div>
              <Card >
                <div className="row">
                <div className="col-md-2">
                <img src={profileImg} style={{height:'270px',width:'270px'}}/>
                </div>
                <div className="col-md-10">
                <Card.Body>
                    <h2 style={{fontWeight : '400'}}>Amit Kumar</h2>
                    <div className="row">
                      <div className="col-md-1"><img src="https://img.icons8.com/material-rounded/48/000000/marker.png" style={{height:'20px',width:'20px'}}/>Gurugram</div>
                      <div className="col-md-3"><p style={{textAlign:'center'}}><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-kiranshastry-1.png" style={{height:'20px',width:'20px'}}/>amit.kumar3@mail.vinove.com</p> </div>
                      <div className="col-md-2"><p><img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" style={{height:'20px',width:'20px'}}/>12345678</p> </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-md-2"><label style={{fontSize:'12px'}}>Job Title</label></div>
                      <div className="col-md-1"><label style={{fontSize:'12px'}}>Department</label></div>
                      <div className="col-md-1"><label style={{fontSize:'12px'}}>Business Unit</label></div>
                      <div className="col-md-1"><label style={{fontSize:'12px'}}>Reporting To</label></div>
                      <div className="col-md-1"><label style={{fontSize:'12px'}}>EMP No</label></div>
                    </div>
                    <div className="row">
                      <div className="col-md-2"><p style={{fontSize:'15px'}}>Junior Associate Software Developer</p></div>
                      <div className="col-md-1"><p style={{fontSize:'15px'}}>MS .NET</p></div>
                      <div className="col-md-1"><p style={{fontSize:'15px'}}>Services</p></div>
                      <div className="col-md-1"><p style={{fontSize:'15px'}}>Vikas Kaushik</p></div>
                      <div className="col-md-1"><p style={{fontSize:'15px'}}>V5990</p></div>
                      <div className="col-md-6"><Button style={{float:'right'}} variant="primary">Edit Details</Button></div>
                    </div>
                    <hr/>
                </Card.Body>
                </div>
                </div>
              </Card>
            </div>
            <br /> <br />
            <div className="col-md-8">
              <Card>
            <Card.Body>
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
            </Card.Body>
            </Card>
          </div>
          <br/><br/>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
