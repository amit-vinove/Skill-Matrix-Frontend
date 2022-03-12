import React from "react";
import Sidebar from "../navBar/sidebar";
import Navbar from "../navBar/topBar";
import navCss from "../css/nav.css";
import indexCss from "../css/index.css";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function EmployeePage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>
          <div className="col-md-11">
            <h2
              style={{
                fontWeight: "400",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Employee Directory
            </h2>
            <Card>
              <Card.Body>
                <div className="row">
                  <div className="col-md-1" style={{ lineHeight: "35px" }}>
                    MS-.NET
                  </div>
                  <div className="col-md-1" style={{ lineHeight: "35px" }}>
                    Location
                  </div>
                  <div className="col-md-10">
                    <InputGroup size="lg">
                      <FormControl
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search Employee"
                      />
                    </InputGroup>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br/>
            <div style={{display:'flex',justifyContent:'center'}}>
              <Card style={{ marginRight:'20px' }}>
                <Card.Body>
                  <div style={{display:'flex'}}>
                  <img src="https://img.icons8.com/bubbles/100/000000/user.png" style={{height:'150px',width:'150px',marginRight:'10px'}}/>
                  <Card.Text>
                    <h3>Amit Kumar</h3>
                    <p style={{fontSize:'16px'}}>Software Developer</p>
                    <p>Department : Operation MS-.Net</p>
                    <p>Location : Gurugram</p>
                    <p>Email : amit.kumar@mail.vinove.com</p>
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ marginRight:'20px' }}>
                <Card.Body>
                  <div style={{display:'flex'}}>
                  <img src="https://img.icons8.com/bubbles/100/000000/user.png" style={{height:'150px',width:'150px',marginRight:'10px'}}/>
                  <Card.Text>
                    <h3>Amit Kumar</h3>
                    <p style={{fontSize:'16px'}}>Software Developer</p>
                    <p>Department : Operation MS-.Net</p>
                    <p>Location : Gurugram</p>
                    <p>Email : amit.kumar@mail.vinove.com</p>
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ marginRight:'20px' }}>
                <Card.Body>
                  <div style={{display:'flex'}}>
                  <img src="https://img.icons8.com/bubbles/100/000000/user.png" style={{height:'150px',width:'150px',marginRight:'10px'}}/>
                  <Card.Text>
                    <h3>Amit Kumar</h3>
                    <p style={{fontSize:'16px'}}>Software Developer</p>
                    <p>Department : Operation MS-.Net</p>
                    <p>Location : Gurugram</p>
                    <p>Email : amit.kumar@mail.vinove.com</p>
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ marginRight:'20px' }}>
                <Card.Body>
                  <div style={{display:'flex'}}>
                  <img src="https://img.icons8.com/bubbles/100/000000/user.png" style={{height:'150px',width:'150px',marginRight:'10px'}}/>
                  <Card.Text>
                    <h3>Amit Kumar</h3>
                    <p style={{fontSize:'16px'}}>Software Developer</p>
                    <p>Department : Operation MS-.Net</p>
                    <p>Location : Gurugram</p>
                    <p>Email : amit.kumar@mail.vinove.com</p>
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeePage;
