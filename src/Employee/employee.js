import React from "react";
import Sidebar from "../navBar/sidebar";
import Navbar from "../navBar/topBar";
import navCss from '../css/nav.css'
import indexCss from '../css/index.css'

function EmployeePage(){
    return(
        <>
        <Navbar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1 sideNav">
                    <Sidebar/>
                </div>
                <div className="col-md-8">
                    <h1>Employee Page</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default EmployeePage;