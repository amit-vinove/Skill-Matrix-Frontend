import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, InputGroup , Form } from "react-bootstrap";
import navCss from "../css/nav.css";
import homeCss from "../css/home.css";
import Sidebar from "../navBar/sidebar";
import Card from "react-bootstrap/Card";
import defaultPost from "../images/defaultPost.svg";


function Feeds() {
  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h5 style={{ fontWeight: "400" }}>Announcements</h5>
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <Form>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control style={{border:'none'}} placeholder="Write your announcement here..." as="textarea" rows={5} />
              </Form.Group>
              <hr style={{margin:'1px',border:'unset'}} />
              <Button variant="primary" style={{float:'right', width:'110px', fontSize:'16px'}} type="submit" >Post</Button>
            </Form>
          </Card.Body>
        </Card>

        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
          <img src={defaultPost} style={{height:'150px',marginBottom:'10px',marginTop:'10px'}} /><br/>
          <p style={{textAlign:'center'}}> There are no announcements here </p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Feeds;
