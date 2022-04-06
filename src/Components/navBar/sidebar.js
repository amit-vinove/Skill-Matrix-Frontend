import React from "react";
import { Link , NavLink } from "react-router-dom";
import indexCss from '../../css/index.css'


function Sidebar() {
  return (
    <>
      <ul>
        <NavLink to="/home" as="li" >
          <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/material-rounded/148/ffffff/home.png"
          />
          <h6>Home</h6>
          </li>
          </NavLink>

        <NavLink to="/GenericSkills" as="li">
        <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/pastel-glyph/148/ffffff/person-male--v3.png"
          />
          <h6>General Skills</h6>
        </li>
        </NavLink>
        <NavLink to="/basicFoundation" as="li">
        <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/pastel-glyph/148/ffffff/person-male--v3.png"
          />
          <h6>Basic Foundation</h6>
        </li>
        </NavLink>
        
      </ul>
    </>
  );
}

export default Sidebar;
