import React from "react";
import {Button, FormControl,InputGroup} from "react-bootstrap";
import bgImg from "../images/2474247.jpg"
import logo from "../images/logo.jpg"

function loginPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <img src={bgImg}/>
          </div>
          <div className="col-md-3">
              <img src={logo} style={{height:'100px',width:'200px',marginTop:'150px',marginLeft:'10px'}}/>
          <form>
          <div style={{marginTop : '30%',padding:'5%'}}>
            <h3 className="mb-1">Login</h3>
            <p className="mb-4">Please enter your Username and Password</p>
              <InputGroup size="lg" className="mb-3" >
    <FormControl aria-label="Large" placeholder="Username" style={{padding:'15px'}} aria-describedby="inputGroup-sizing-sm" />
  </InputGroup> 
  <InputGroup size="lg" className="mb-3">
    <FormControl aria-label="Large" placeholder="Password" style={{padding:'15px'}}  aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <Button style={{width:'150px', fontSize:'20px'}} variant="primary" type="submit" >Login</Button>
  <h6 className="mt-3">Forgot Password ?</h6>

            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default loginPage;
