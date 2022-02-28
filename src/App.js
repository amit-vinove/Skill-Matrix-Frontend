import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const studentURL = "http://localhost:5032/api/Student/GetAllStudents"
  const [data , setData] = useState([])

console.log(data)
  useEffect(()=>{
    axios.get(studentURL).then((response)=>{
      setData(response.data)
      // console.log(response.data)
    })
  },[])
  return (
    <>
    <div className="container p-3">
    <div className="row pt-4">
        <div className="col-6">
            <h2>Student Form Data</h2>
        </div><br/><br/><br/>
        <div className="col-6 text-end">
            {/* <button type="button"  data-bs-toggle="modal" data-bs-target="#RegisterFormModal" className="btn btn-primary RegisterBtn">
                <i className="bi bi-plus-circle"></i> Fill New Form
            </button> */}
        </div>
    </div>

<table className="table table-bordered table-striped table-hover table-responsive" style={{width:'100%'}}>
        <thead>
        <tr>
            <th>
                Student Id
            </th> 
            <th>
                First Name
            </th>
            <th>
                Last Name
            </th>
                        <th>
               Email
            </th>
                        <th>
               Phone
            </th>
                        <th>
                Gender
            </th>
                        <th>
                DOB 
            </th>
                                    <th>
                Edit 
            </th>

        </tr>
    </thead>
    <tbody >
      {
      data && data.map((val)=>{
        return(
                <tr key={val.id} >
                <td width="8%" className="id">
                 {val.id}
                 
                </td>
                <td width="20%" className="firstName" >
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
                     <button type="button" style={{padding:'8px 9px'}} data-bs-toggle="modal" data-bs-target="#ViewFormModal" className="btn btn-info mx-2 view">
                        <i className="bi bi-eye-fill"></i>View
                     </button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#EditFormModal" style={{padding:'8px 9px'}}  className="btn btn-primary mx-2 edit">
                        <i className="bi bi-pencil-square"></i>Edit
                     </button>
                     <button type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" style={{padding:'8px 9px'}}  className="btn btn-danger mx-2 delete">
                        <i className="bi bi-trash-fill"></i> Delete
                     </button>

                    </div>
                </td>
            </tr>
        )
                   })} 
    </tbody>
</table>
</div>
    </>
  );
}


export default App;
