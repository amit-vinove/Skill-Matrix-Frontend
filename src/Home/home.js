import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import navCss from '../css/nav.css'
import indexCss from '../css/index.css'
import Sidebar from "../navBar/sidebar";
import QuickAccess from "./quickAccess";

function homePage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>
          <div className="col-md-3">
              <QuickAccess/>
          </div>
        </div>
      </div>
    </>
  );
}

export default homePage;
