import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import axios from "axios";
import titleImg from "./assets/idcard.png";
import "./App.css";

function DataModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div>
          <h2 className="modal-title" style={{ textAlign: "center" }}>
            {" "}
            <img
              src={titleImg}
              style={{ height: "50px", width: "50px" }}
            />{" "}
            Student Registration Data
          </h2>
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
                  <h5>{props.data.firstName}</h5>
                </div>
                <div className="col">
                  <label>Last Name:</label>
                  <h5>{props.data.lastName}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Gender:</label>
                  <h5>{props.data.gender}</h5>
                </div>
                <div className="col">
                  <label>Date of Birth:</label>
                  <h5>{props.data.dob}</h5>
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
              <h5>{props.data.email}</h5>
            </div>
            <div className="col">
              <label>Phone:</label>
              <h5>{props.data.phone}</h5>
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
              <h5>{props.data.permanentAddress}</h5>
            </div>
            <div className="col">
              <label>Current Address:</label>
              <br />
              <h5>{props.data.currentAddress}</h5>
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
              <h5>{props.data.course}</h5>
            </div>
            <div className="col">
              <label>Stream:</label>
              <br />
              <h5>{props.data.stream}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>12th Percentage:</label>
              <br />
              <h5>{props.data.twelfthMarks} %</h5>
            </div>
            <div className="col">
              <label>10th Percentage:</label>
              <br />
              <h5>{props.data.tenthMarks} %</h5>
            </div>
          </div>
        </div>
        <br />
        <div>
          <h4 style={{ fontWeight: 500 }}>About </h4>
          <hr />
          <div className="row">
            <div className="col">
              <h5>{props.data.studentBio}</h5>
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

function EditModal({data,show,onHide}) {

    const [formData, updateFormData] = React.useState(data);

    const handleChange = (e) => {    
      updateFormData({
        ...formData,[e.target.name]: e.target.value.trim()
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      console.log(formData);
    };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 studentForm">
        <br/>
        <div>
        <h2 className="modal-title" style={{textAlign:'center'}}> <img src={titleImg} style={{height:'50px',width:'50px'}}/> Student Registration Form</h2>
        </div>
        <hr />
        <br />
        <form>
          <div>
            <h4> Primary Details </h4>

            <div className="row">
              <div className="col">
                <label>First Name:</label>
                <input name="FirstName" defaultValue={data.firstName} onChange={handleChange} type="text" className="form-control" />
              </div>
              <div className="col">
                <label>Last Name:</label>
                <input name="LastName" type="text" defaultValue={data.lastName} onChange={handleChange} className="form-control" />
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col">
                <label>Gender:</label>
                <select name="Gender" defaultValue={data.gender} onChange={handleChange} className="form-select">
                  <option >Choose Gender</option>
                  <option defaultValue="Male">Male</option>
                  <option defaultValue="Female">Female</option>
                </select>
              </div>
              <div className="col">
                <label>Date of Birth:</label>
                <input name="DOB" type="date"  defaultValue={data.dob} onChange={handleChange} className="form-control" />
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
                <input name="Email" type="text" defaultValue={data.email} onChange={handleChange} className="form-control" />
              </div>
              <div className="col">
                <label>Phone:</label>
                <input
                  name="Phone" defaultValue={data.phone} onChange={handleChange}
                  type="number"
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
                <textarea
                  name="PermanentAddress" onChange={handleChange}
                  className="form-control"
                  id="PerAddress" defaultValue={data.permanentAddress}
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
                <textarea 
                  name="CurrentAddress" onChange={handleChange}
                  id="CurrAdd" defaultValue={data.currentAddress}
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
                <select name="CourseId" id="UgCourse" onChange={handleChange} defaultValue={data.courseId} className="form-select">
                  <option >Choose Course</option>
                  <option defaultValue="1">B.tech</option>
                  <option defaultValue="2">B.Arch</option>
                  <option defaultValue="3">B.Com</option>
                  <option defaultValue="4">BBA</option>
                  <option defaultValue="5">BA</option>
                </select>
              </div>
              <div className="col">
                <label>Stream</label>
                <br />
                <select className="form-select" id="Stream" onChange={handleChange} defaultValue={data.streamId} name="StreamId">
                  <option >Choose Stream</option>
                  <option defaultValue="1">Information Technology</option>
                  <option defaultValue="2">Computer Science</option>
                  <option defaultValue="3">Mechanical Engineering</option>
                  <option defaultValue="4">Civil Science Engineering</option>
                  <option defaultValue="5">Electronics and Communication</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <label>12th Percentage</label>
                <br />
                <input type="number" name="TwelfthMarks" onChange={handleChange} defaultValue={data.twelfthMarks} className="form-control"  />
              </div>
              <div className="col">
                <label>10th Percentage</label>
                <br />
                <input name="TenthMarks" type="number" onChange={handleChange} className="form-control" defaultValue={data.tenthMarks} />
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
                  name="StudentBio" defaultValue={data.studentBio}
                  className="form-control" onChange={handleChange}
                  rows="5"
                  placeholder="Student Bio"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button variant="secondary" onClick={onHide}>Close</Button>
            <Button variant="primary" type="submit" onClick={handleSubmit} >Save Changes</Button>
          </div>
        </form>
      </div>
      </div>
      </div>
      </Modal.Body>
    </Modal>
  );
}

function CreateModal({show,onHide}) {
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [ gender, setGender] = useState("")
  const [dob , setDOB] = useState("")
  const [email , setEmail] = useState("")
  const [phone , setPhone] = useState("")
  const [perAddress , setPerAddress] = useState("")
  const [currAddress , setCurrAddress] = useState("")
  const [courseId , setCourseId] = useState("")
  const [streamId , setStreamId] = useState("")
  const [twelfthMarks , setTwelfthMarks] = useState("")
  const [tenthMarks , setTenthMarks] = useState("")
  const [studentBio , setStudentBio] = useState("")

  // const handleChange = (e) => {
  //   // ifelse
  //   updateFormData({
  //     ...formData,[e.target.name]: e.target.value.trim()
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const FormObj1 = {
    //   "id": 0,
    //   "firstName": "string",
    //   "lastName": "string",
    //   "gender": "string",
    //   "dob": "string",
    //   "email": "string",
    //   "phone": "string",
    //   "permanentAddress": "string",
    //   "currentAddress": "string",
    //   "profileImagePath": "string",
    //   "twelfthMarks": null,
    //   "tenthMarks": null,
    //   "studentBio": "string",
    //   "courseId": null,
    //   "streamId": null,
    //   "createdDateTime": "2022-03-02T06:19:46.085Z"
    // };
    var dateTime = new Date().toLocaleString();
    let formData={
      "id":parseInt(0),
      "firstName":firstName,
      "lastName" : lastName,
      "gender" :gender,
      "dob" : dob,
      "email":email,
      "phone":phone,
      "permanentAddress" : perAddress,
      "currentAddress":currAddress,
      "profileImagePath":"default.png",
      "twelfthMarks":parseInt(twelfthMarks),
      "tenthMarks":parseInt(tenthMarks),
      "studentBio":studentBio,
      "courseId" :parseInt(courseId),
      "streamId":parseInt(streamId),
      "createdDateTime":dateTime
    }
    formData =  JSON.stringify(formData)
    e.preventDefault()
    axios
    .post("http://localhost:5032/api/Student/AddStudent", formData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    console.log(formData);
  };

return (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
    <div className="container-fluid">
  <div className="row">
    <div className="col-md-12 studentForm">
      <br/>
      <div>
      <h2 className="modal-title" style={{textAlign:'center'}}> <img src={titleImg} style={{height:'50px',width:'50px'}}/> Student Registration Form</h2>
      </div>
      <hr />
      <br />
      <form onSubmit={handleSubmit} >
        <div>
          <h4> Primary Details </h4>

          <div className="row">
            <div className="col">
              <label>First Name:</label>
              <input name="FirstName"  onChange={e => setFirstName(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="col">
              <label>Last Name:</label>
              <input name="LastName" type="text"  onChange={e => setLastName(e.target.value)} className="form-control" />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col">
              <label>Gender:</label>
              <select name="Gender"  onChange={e => setGender(e.target.value)} className="form-select">
                <option >Choose Gender</option>
                <option defaultValue="Male">Male</option>
                <option defaultValue="Female">Female</option>
              </select>
            </div>
            <div className="col">
              <label>Date of Birth:</label>
              <input name="DOB" type="date"   onChange={e => setDOB(e.target.value)} className="form-control" />
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
              <input name="Email" type="text" onChange={e => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="col">
              <label>Phone:</label>
              <input
                name="Phone"  onChange={e => setPhone(e.target.value)}
                type="number"
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
              <textarea
                name="PermanentAddress" onChange={e => setPerAddress(e.target.value)}
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
              <textarea 
                name="CurrentAddress" onChange={e => setCurrAddress(e.target.value)}
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
              <select name="CourseId" id="UgCourse" onChange={e => setCourseId(e.target.value)} className="form-select">
                <option >Choose Course</option>
                <option defaultValue="1">1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
                <option defaultValue="4">4</option>
                <option defaultValue="5">5</option>
              </select>
            </div>
            <div className="col">
              <label>Stream</label>
              <br />
              <select className="form-select" id="Stream" onChange={e => setStreamId(e.target.value)}  name="StreamId">
                <option >Choose Stream</option>
                <option defaultValue="1">1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
                <option defaultValue="4">4</option>
                <option defaultValue="5">5</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>12th Percentage</label>
              <br />
              <input type="number" name="TwelfthMarks" onChange={e => setTwelfthMarks(e.target.value)} className="form-control"  />
            </div>
            <div className="col">
              <label>10th Percentage</label>
              <br />
              <input name="TenthMarks" type="number" onChange={e => setTenthMarks(e.target.value)} className="form-control"  />
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
                name="StudentBio" 
                className="form-control" onChange={e => setStudentBio(e.target.value)}
                rows="5"
                placeholder="Student Bio"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button variant="secondary" onClick={onHide}>Close</Button>
          <Button variant="primary" type="submit" onSubmit={ (e) => {handleSubmit(e)}} >Save</Button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </Modal.Body>
  </Modal>
);
}

// render(<App />);
export { DataModal, EditModal ,CreateModal };
