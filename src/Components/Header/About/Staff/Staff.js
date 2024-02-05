import React from "react";
import "../About.css";
import staff from "./staff.jpeg";

function Staff() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Supporting Staff</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="ADimg">
            <center>
               <img
                src={staff}
                alt="Profile"/> 
            </center>
          </div>
        </div>
        <center>
          <div className="profileName">
            <h3 className="ADh3">B. Mahesh [M.A(H.R.M)]</h3>
            <h4 className="ADh4">Student counselor</h4>
          </div>
          <div className="profileDesignation">
            <h4 className="ADh4">
            Working under TPO
            </h4>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Staff;