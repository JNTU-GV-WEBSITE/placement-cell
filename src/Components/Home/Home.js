import React from "react";
import "../../App.css";
import Gallery from "../Gallery/Gallery";
import "./Home.css";
// import Footer from "../Footer/Footer";



function Home() {
  return (
    <div>
      
      <Gallery /><br />
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
      {/* <Footer /> */}
      
      
    </div>
  );
}

export default Home;
