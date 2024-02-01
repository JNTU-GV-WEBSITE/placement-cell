import React from "react";
import "../About.css";
import Typography from "@mui/material/Typography";

function Visionmission() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Vision</div>
        <div className="allRightContentProfile">
          {/* Vision description */}
          <center></center>
          <br />
          {/* Vision content */}
          <Typography>
            The vision of the Training and Placement cell is to train and develop technically competent professionals to serve as a valuable resource for the industry and society.
          </Typography>
        </div>
        <br/>
        <div className="allRightContentHeading">Mission</div>
        <div className="allRightContentProfile">
          {/* Mission description */}
          <center></center>
          <br />
          {/* Mission content */}
          <Typography>
            ❖ To build domain knowledge-based human resources by imparting contemporary technical skills and social ethics to initiate excellent industry-institute collaboration for the well-being of society.<br />
            ❖ To assist students in developing/clarifying their academic and career interests, and their short and long-term goals through individual counseling and group sessions.<br />
            ❖ To assist students in industrial training at the end of the sixth semester.<br />
            ❖ To act as a link between students, alumni, and the employment community to assist students in obtaining placements in reputed companies.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Visionmission;
