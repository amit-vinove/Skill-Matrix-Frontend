import React, { useEffect, useState } from "react";
import {
  PlusCircle,
  EyeFill,
  PencilSquare,
  TrashFill,
} from "react-bootstrap-icons";
import axios from "axios";
import "./App.css";
import {DataModal , EditModal , CreateModal} from "./Modal";
import InputBox from "./inputs";
import { Button } from "react-bootstrap";

function DataModalApp({ data }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = useState({});

  const setModal = () => {
    setModalShow(true);
    setModalData(data);
  };
  return (
    <>
      <Button
        variant="primary"
        style={{ padding: "8px 9px", color: "white" , marginRight:'10px' }}
        onClick={setModal}
      >
        <EyeFill /> View
      </Button>

      <DataModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalData}
      />
    </>
  );
}

function EditModalApp({ data }) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalData, setModalData] = useState({});
  
    const setModal = () => {
      setModalShow(true);
      setModalData(data);
    };
    return (
      <>
        <Button
          variant="info"
          style={{ padding: "8px 9px", color: "white" }}
          onClick={setModal}
        >
        <PencilSquare /> Edit
        </Button>
  
        <EditModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={modalData}
        />
      </>
    );
  }

  function CreateModalApp({dataArr,addDataf}){
    const [modalShow, setModalShow] = React.useState(false);
  
    const setModal = () => {
      setModalShow(true);
    };
    return (
      <>
        <Button
          variant="primary"
          style={{ padding: "8px 9px", color: "white" }}
          onClick={setModal}
        >
        <PlusCircle />  Fill New Form
        </Button>
  
        <CreateModal 
          show={modalShow}
          onHide={() => setModalShow(false)}
          dataArr={dataArr}
          addDataf={addDataf}
        />
      </>
    );
  }



function App() {
  const studentURL = "http://localhost:5032/api/Student/GetAllStudents";
  const [data, setData] = useState([]);
  const [csdata,setCsdata]=useState([]);

  // console.log(data[0])
  useEffect(() => {
    axios.get(studentURL).then((response) => {
      setData(response.data);
      // console.log(response.data)
    });
  }, []);

  useEffect(()=>{
    setData(csdata);
  },[csdata])

  function addDataf(data1){

    // console.log(data1);
    setCsdata(data1);
    console.log(csdata)

  }

  

  return (
    <>
      <div className="container p-3">
        <div className="row pt-4">
          <div className="col-6">
            <h2>Student Form Data</h2>
          </div>
          <br />
          <br />
          <br />
          <div className="col-6 text-end">
          <CreateModalApp dataArr={data} addDataf={addDataf}/>
          </div>
        </div>

        <table
          className="table table-bordered table-striped table-hover table-responsive"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Student Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((val) => {
                return (
                  <tr key={val.id}>
                    <td width="8%" className="id">
                      {val.id}
                    </td>
                    <td width="20%" className="firstName">
                      {val.firstName}
                    </td>
                    <td width="20%" className="lastName">
                      {val.lastName}
                    </td>
                    <td width="20%" className="email">
                      {val.email}
                    </td>
                    <td width="5%" className="phone">
                      {val.phone}
                    </td>
                    <td width="5%" className="gender">
                      {val.gender}
                    </td>
                    <td width="40%" className="dob">
                      {val.dob}
                    </td>
                    <td>
                      <div className="w-75 btn-group" role="group">
                        <DataModalApp data={val} />
                        <EditModalApp data={val} />

                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          style={{ padding: "8px 9px" }}
                          className="btn btn-danger mx-2 delete"
                        >
                          <TrashFill /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

    </>
  );
}

export default App;
