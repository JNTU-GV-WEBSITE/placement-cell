import React from "react";
import "./Recruiters.css";
import { skillsData } from "./RecruitersData"; // Import data from RecruitersData.js

const Recruiters = () => {
  return (
    <div>
      <div className="logo-container">
        {skillsData.map((logo, index) => (
          <div className="logo-card" key={index}>
            <img src={logo.image} alt={logo.name} className="logo-image" />
            <h4>{logo.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruiters;
