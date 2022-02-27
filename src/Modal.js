import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    //   console.log(props.data.data.FirstName),
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Student Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-12">
            <div>
              <h4 style={{ fontWeight: 500 }}> Primary Details </h4>
              <hr />
              <div className="row">
                <div className="col">
                  <label>First Name:</label>
                  <h5>{props.data.data.FirstName}</h5>
                </div>
                <div className="col">
                  <label>Last Name:</label>
                  <h5>{props.data.data.LastName}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Gender:</label>
                  <h5>{props.data.data.Gender}</h5>
                </div>
                <div className="col">
                  <label>Date of Birth:</label>
                  <h5>{props.data.data.DOB}</h5>
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
              <h5>{props.data.data.Email}</h5>
            </div>
            <div className="col">
              <label>Phone:</label>
              <h5>{props.data.data.Phone}</h5>
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
              <h5>{props.data.data.PermanentAddress}</h5>
            </div>
            <div className="col">
              <label>Current Address:</label>
              <br />
              <h5>{props.data.data.CurrentAddress}</h5>
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
              <h5>{props.data.data.Course}</h5>
            </div>
            <div className="col">
              <label>Stream:</label>
              <br />
              <h5>{props.data.data.Stream}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>12th Percentage:</label>
              <br />
              <h5>{props.data.data.TwelfthMarks}</h5>
            </div>
            <div className="col">
              <label>10th Percentage:</label>
              <br />
              <h5>{props.data.data.TenthMarks}</h5>
            </div>
          </div>
        </div>
        <br />
        <div>
          <h4 style={{ fontWeight: 500 }}>About </h4>
          <hr />
          <div className="row">
            <div className="col">
            <h5>{props.data.data.StudentBio}</h5>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// render(<App />);
export default MyVerticallyCenteredModal;
