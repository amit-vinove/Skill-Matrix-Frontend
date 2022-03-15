import React from "react";
import { Link , NavLink } from "react-router-dom";
import indexCss from '../css/index.css'

function Sidebar() {
  return (
    <>
      <ul>
        <NavLink to="/home" >
          <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/material-rounded/148/ffffff/home.png"
          />
          <h6>Home</h6>
          </li>
          </NavLink>

        <NavLink to="/profile">
        <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/pastel-glyph/148/ffffff/person-male--v3.png"
          />
          <h6>Me</h6>
        </li>
        </NavLink>
        
        <NavLink to="/employee">
        <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/pastel-glyph/148/ffffff/company--v1.png"
          />
          <h6> Employee </h6>
        </li>
        </NavLink>

        <NavLink to="/teams">
        <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/material-rounded/148/ffffff/conference-call.png"
          />
          <h6> Teams </h6>
        </li>
        </NavLink>

        <NavLink to="/todo">
        <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/ios-glyphs/148/ffffff/to-do.png"
          />
          <h6> To Do </h6>
        </li>
        </NavLink>
      </ul>
    </>
  );
}

export default Sidebar;
