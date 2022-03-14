import React, { useEffect, useState } from "react";
import Sidebar from "../navBar/sidebar";
import Navbar from "../navBar/topBar";
import navCss from "../css/nav.css";
import indexCss from "../css/index.css";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";


function EmployeePage() {
  const [searchvalues,setSearchvalues]=useState([]);
  const empDB=[
    {
    name:'Amit Kumar',
    designation:'Software Developer',
    department :'Operation MS-.Net',
    location : 'Gurugram',
    email :'amit.kumar3@mail.vinove.com'

  },
  {
    name:'Anuj Kumar',
    designation:'Associate Software Developer',
    department :'Operation MS-.Net',
    location : 'Gurugram',
    email :'amit.kumar3@mail.vinove.com'

  },
  {
    name:'Ankur Kumar',
    designation:'Junior Associate Software Developer',
    department :'Operation MS-.Net',
    location : 'Gurugram',
    email :'amit.kumar3@mail.vinove.com'

  },
  {
    name:'Ajay Kumar',
    designation:'Senior Software Developer',
    department :'Operation MS-.Net',
    location : 'Gurugram',
    email :'amit.kumar3@mail.vinove.com'

  }
]
const search= (e)=>{
  
  const result = [...empDB].filter(emp => ((emp.name).toLowerCase()).includes((e.target.value).toLowerCase()));
  setSearchvalues(result);
  console.log(searchvalues);
}
useEffect(()=>{
  setSearchvalues(empDB);
},[])
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
                        onChange={(e)=>search(e)}
                        placeholder="Search Employee"
                      />
                    </InputGroup>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            {
             searchvalues.map((data,index)=>(
              <Card className="empCard" key={index} >
              <Card.Body>
                <div style={{display:'flex'}}>
                <img src="https://img.icons8.com/bubbles/100/000000/user.png" style={{height:'150px',width:'150px',marginRight:'10px'}}/>
                <Card.Text>
                  <h3>{data.name}</h3>
                  <p style={{fontSize:'16px'}}>{data.designation}</p>
                  <p>Department : {data.department}</p>
                  <p>Location : {data.location}</p>
                  <p>Email : {data.email}</p>
                </Card.Text>
                </div>
              </Card.Body>
            </Card>
             ))
            }


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeePage;
