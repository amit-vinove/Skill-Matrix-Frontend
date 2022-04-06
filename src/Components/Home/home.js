import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import navCss from "../../css/nav.css";
import homeCss from "../../css/home.css";
import indexCss from "../../css/index.css";
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
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>

          <div className="col-11 col-md-4 col-sm-11" style={{marginLeft:"20px"}}>
              <QuickAccess/>
          </div>
          <div className="col-11 col-md-7 col-sm-11 m-sm-5 m-md-0"  >
              <Feeds/>
          </div>
        </div>
      </div>
    </>
  );
}

export default homePage;
