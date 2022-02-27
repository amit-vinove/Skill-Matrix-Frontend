import React from "react";
import bgImg from "./assets/2474247.jpg"
import "./App.css";
import MyVerticallyCenteredModal from './Modal'
import { Button } from 'react-bootstrap';

function ModalApp(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const setModal = () => {
    setModalShow(true)
    console.log(props);
  };

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
       */}
       <Button variant="primary" onClick={setModal}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={props}
      />
    </>
  );
}

function App() {
  const FormObj = {
    FirstName: "",
    LastName: "",
    Gender:"",
    DOB:"",
    Email:"",
    Phone:"",
    Phone:"",
    PermanentAddress:"",
    CurrentAddress:"",
    Course:"",
    Stream:"",
    TwelfthMarks:"",
    TenthMarks:"",
    StudentBio:"" 
  };
    const [formData, updateFormData] = React.useState(FormObj);
  
    const handleChange = (e) => {
      updateFormData({
        ...formData,[e.target.name]: e.target.value.trim()
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
    };

  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 imgDiv">
        <img src={bgImg} alt="bgImg"/>
        
      </div>
      <div className="col-md-6 studentForm">
        <br/>
        <h2 id="heading"> Student Registration Form</h2>
        <hr />
        <br />
        <form>
          <div>
            <h4> Primary Details </h4>

            <div className="row">
              <div className="col">
                <label>First Name:</label>
                <input name="FirstName" onChange={handleChange} type="text" className="form-control" />
              </div>
              <div className="col">
                <label>Last Name:</label>
                <input name="LastName" type="text" onChange={handleChange} className="form-control" />
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col">
                <label>Gender:</label>
                <select name="Gender" onChange={handleChange}  className="form-select">
                  <option >Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col">
                <label>Date of Birth:</label>
                <input name="DOB" type="date" onChange={handleChange}  className="form-control" />
              </div>
            </div>
          </div>
          <hr />

          <br />
          <div>
            <h4> Contact Details </h4>
            <div className="row">
              <div className="col">
                <label>Email:</label>
                <input name="Email" type="text" className="form-control" onChange={handleChange} />
              </div>
              <div className="col">
                <label>Phone:</label>
                <input
                  name="Phone"
                  type="number"
                 onChange={handleChange} 
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <hr />

          <br />

          <div>
            <h4> Address Details </h4>
            <div className="row">
              <div className="col">
                <label>Permanent Address</label>
                <br />
                <br />
                <textarea onChange={handleChange} 
                  name="PermanentAddress"
                  className="form-control"
                  id="PerAddress"
                ></textarea>
              </div>
              <div className="col">
                <label>Current Address</label>
                <div className="form-group">
                  <input
                    type="checkbox" 
                    className="form-check-input"
                    id="checkBox"
                  />
                  Same as permanent address
                </div>
                <textarea onChange={handleChange} 
                  name="CurrentAddress"
                  id="CurrAdd"
                  className="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />

          <br />
          <div>
            <h4> Educational Details </h4>
            <div className="row">
              <div className="col">
                <label>Undergraduate Course</label>
                <br />
                <select name="Course" id="UgCourse" onChange={handleChange}  className="form-select">
                  <option >Choose Course</option>
                  <option value="B.Tech">B.tech</option>
                  <option value="B.Arch">B.Arch</option>
                  <option value="B.Com">B.Com</option>
                  <option value="BBA">BBA</option>
                  <option value="BA">BA</option>
                </select>
              </div>
              <div className="col">
                <label>Stream</label>
                <br />
                <select className="form-select" id="Stream" onChange={handleChange}  name="Stream">
                  <option >Choose Stream</option>
                  <option value="CS">CS</option>
                  <option value="IT">IT</option>
                  <option value="ME">ME</option>
                  <option value="CSE">CSE</option>
                  <option value="EE">EE</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <label>12th Percentage</label>
                <br />
                <input type="number" name="TwelfthMarks" className="form-control" onChange={handleChange}  />
              </div>
              <div className="col">
                <label>10th Percentage</label>
                <br />
                <input name="TenthMarks" type="number" className="form-control" onChange={handleChange}  />
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div>
            <h4> Tell Us About Yourself</h4>
            <div className="row">
              <div className="col">
                <textarea
                  name="StudentBio" onChange={handleChange} 
                  className="form-control"
                  rows="5"
                  placeholder="Student Bio"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="reset"
              className="btn btn-secondary"
              data-bs-dismiss="modal" 
            >
              Reset
            </button>
            {/* <button type="submit" onClick={handleSubmit} className="btn btn-primary">
              Save Details
            </button> */}
            <ModalApp data={formData} />
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
}


export default App;
