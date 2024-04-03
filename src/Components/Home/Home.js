import React from "react";
import "../../App.css";
import Gallery from "../Gallery/Gallery";
import "./Home.css";

function Home() {
  return (
    <div>
      <Gallery /><br /><br />
      <div class="borderedBox">
        <h2>AI RESUME ANALYSER</h2>
        <p>
          <a href="https://faa1-2401-4900-1cb1-b17-64c0-98db-219d-d41d.ngrok-free.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </a> 
          {/* to use resume analyser */}
        </p>
      </div><br />
      <div className="pcMessageContainer">
        {/* IQAC Message */}
        <div className="pcMessage">
          <h5 className="pcmsg"><b>Placement Cell Message </b></h5>
          <p>
            "The vision of Training and Placement cell is to train and develop technically 
            competent professionals to serve as valuable resource for industry and society."
          </p>
          <p className="signature">Dr.T.S.N.Murthy<br />Placement Cell Co-ordinator</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
