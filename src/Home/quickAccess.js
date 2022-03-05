import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import navCss from "../css/nav.css";
import Sidebar from "../navBar/sidebar";
import Card from "react-bootstrap/Card";
import inboxImg from "../images/inboxImg.svg"

function QuickAccess() {
  const date = new Date();
  let today = date.toDateString();
  const [time, setTime] = React.useState("");
  React.useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h5>Quick Access</h5>
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>Inbox </Card.Title>
            <div className="row">
            <Card.Text style={{ fontSize: "15px" }}><img src={inboxImg} style={{height:'70px', width:'110px'}}/>
            </Card.Text>
            <Card.Text>
                Good Job ! You Have no Pending Tasks
          </Card.Text>
          </div>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "20px", marginBottom: "20px",backgroundColor:'#307bc1',color:'white' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>Time Today </Card.Title>
            <Card.Title style={{ fontSize: "26px" }}> {today} </Card.Title>
            <Card.Title style={{ fontSize: "26px" }}> {time} </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default QuickAccess;
