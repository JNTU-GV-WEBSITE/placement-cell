import React from "react";
import "../About.css";
import Typography from "@mui/material/Typography";

function Mission() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">MISSION</div>

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          <Typography>
            JNTU College of Engineering, Vizianagaram was established in the
            year 2007 as a constituent College of JNTU Hyderabad.JNTU Hyderabad
            was trifurcated into three Universities by the Andhra Pradesh Act
            No. 30 of 2008 and since 24th August 2008, the College has become
            the constituent college of JNTU Kakinada. Vide University Act No.22
            of 2021, JNTU Kakinada is bifurcated and Jawaharlal Nehru
            Technological University Gurajada, Vizianagaram come into existence
            as a separate University vide G.O.Ms.No.3, dated: 12-01-2022.
            <Typography>
              The university is spread across six districts i.e
              Vizianagaram,Visakhapatnam, Srikakulam, Parvathipuram Manyam,
              Alluri Sitharama Raju and Anakapalli. There are 2 constituent
              colleges and 37 affiliated colleges under its jurisdiction and
              catering education in different Engineering, Pharmacy and
              Management departments.
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Mission;
