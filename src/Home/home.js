import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import navCss from '../css/nav.css'
import indexCss from '../css/index.css'
import Sidebar from "../navBar/sidebar";
import TopBar from "../navBar/topBar";
import QuickAccess from "./quickAccess";
import Feeds from "./feed";


function homePage() {
  return (
    <>
    <TopBar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>
          <div className="col-md-4">
              <QuickAccess/>
          </div>
          <div className="col-md-7">
              <Feeds/>
          </div>
        </div>
      </div>
    </>
  );
}

export default homePage;
