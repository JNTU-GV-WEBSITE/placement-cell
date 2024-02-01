import React from "react";
import "../About.css";
import Typography from "@mui/material/Typography";

function Jobboard() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Job Board</div>

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <br />
          {/* Profile description */}
          <Typography>
          Jawaharlal Nehru Technological University Gurajada Vizianagaram is committed to provide all 
          possible assistance to its top ranked students and also to meet the needs of organizations. 
          It is headed by a Professor designated as Director, Industry Institute Interaction Placement & 
          Training as in charge and assisted by various Constituent & Affiliated Placement Officers. 
          It ensures the students to secure esteemed positions and also provide the best arrangements for 
          the visiting national and multinational companies.
            <Typography><br />
            The IIIP&T coordinates various activities and provides career guidance, necessary skills to the 
            students for development of integrated personality, to provide employable skills to all, to develop 
            innovative entrepreneurs and dynamic leaders for the nation . We look forward to companies coming and 
            interviewing our graduates and can assure that our graduates will be the best they are interviewing.
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Jobboard;
