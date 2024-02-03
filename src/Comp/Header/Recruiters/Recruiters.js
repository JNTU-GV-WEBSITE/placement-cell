import React from "react";
import "./Recruiters.css";
import logo1 from "./Images-logo/logo1.png";
import logo2 from "./Images-logo/logo2.png";
import logo3 from "./Images-logo/logo3.png";
import logo4 from "./Images-logo/logo4.png";
import logo5 from "./Images-logo/logo5.jpg";
import logo6 from "./Images-logo/logo6.jpg";
import logo7 from "./Images-logo/logo7.png";
import logo8 from "./Images-logo/logo8.png";
import logo9 from "./Images-logo/logo9.png";
import logo10 from "./Images-logo/logo10.png";
import logo11 from "./Images-logo/logo11.jpg";
import logo12 from "./Images-logo/logo12.jpg";
import logo13 from "./Images-logo/logo13.png";
import logo14 from "./Images-logo/logo14.png";
import logo15 from "./Images-logo/logo15.png";
import logo16 from "./Images-logo/logo16.png";
import logo17 from "./Images-logo/logo17.png";
import logo18 from "./Images-logo/logo18.jpg";
import logo19 from "./Images-logo/logo19.png";
import logo20 from "./Images-logo/logo20.png";
import logo21 from "./Images-logo/logo21.png";
import logo22 from "./Images-logo/logo22.jpg";
import logo23 from "./Images-logo/logo23.png";
import logo24 from "./Images-logo/logo24.jpg";
import logo25 from "./Images-logo/logo25.png";
import logo26 from "./Images-logo/logo26.png";
import logo27 from "./Images-logo/logo27.png";
import logo28 from "./Images-logo/logo28.png";
import logo29 from "./Images-logo/logo29.png";
import logo30 from "./Images-logo/logo30.jpg";
import logo31 from "./Images-logo/logo31.jpg";
import logo32 from "./Images-logo/logo32.png";
import logo33 from "./Images-logo/logo33.jpg";
import logo34 from "./Images-logo/logo34.png";
import logo35 from "./Images-logo/logo35.png";
import logo36 from "./Images-logo/logo36.png";
import logo37 from "./Images-logo/logo37.jpg";
import logo38 from "./Images-logo/logo38.jpg";
import logo39 from "./Images-logo/logo39.png";
import logo40 from "./Images-logo/logo40.png";
import logo41 from "./Images-logo/logo41.png";
import logo42 from "./Images-logo/logo42.png";
import logo43 from "./Images-logo/logo43.png";
import logo44 from "./Images-logo/logo44.jpg";
import logo45 from "./Images-logo/logo45.jpg";
import logo46 from "./Images-logo/logo46.jpg";
import logo47 from "./Images-logo/logo47.png";
import logo48 from "./Images-logo/logo48.png";
import logo49 from "./Images-logo/logo49.png";
import logo50 from "./Images-logo/logo50.png";
import logo51 from "./Images-logo/logo51.jpg";
import logo52 from "./Images-logo/logo52.png";


const skillsData = [
    { name: '', image: logo1 },
    { name: '', image: logo2 },
    { name: '', image: logo3 },
    { name: '', image: logo4 },
    { name: '', image: logo5 },
    { name: '', image: logo6 },
    { name: '', image: logo7},
    { name: '', image: logo8 },
    { name: '', image: logo9 },
    { name: '', image: logo10 },
    { name: '', image: logo11 },
    { name: '', image: logo12 },
    { name: '', image: logo13 },
    { name: '', image: logo14 },
    { name: '', image: logo15 },
    { name: '', image: logo16 },
    { name: '', image: logo17},
    { name: '', image: logo18 },
    { name: '', image: logo19 },
    { name: '', image: logo20 },
    { name: '', image: logo21 },
    { name: '', image: logo22 },
    { name: '', image: logo23 },
    { name: '', image: logo24 },
    { name: '', image: logo25 },
    { name: '', image: logo26 },
    { name: '', image: logo27},
    { name: '', image: logo28 },
    { name: '', image: logo29 },
    { name: '', image: logo30 },
    { name: '', image: logo31 },
    { name: '', image: logo32 },
    { name: '', image: logo33 },
    { name: '', image: logo34 },
    { name: '', image: logo35 },
    { name: '', image: logo36 },
    { name: '', image: logo37},
    { name: '', image: logo38 },
    { name: '', image: logo39 },
    { name: '', image: logo40 },
    { name: '', image: logo41 },
    { name: '', image: logo42 },
    { name: '', image: logo43 },
    { name: '', image: logo44 },
    { name: '', image: logo45 },
    { name: '', image: logo46 },
    { name: '', image: logo47 },
    { name: '', image: logo48 },
    { name: '', image: logo49 },
    { name: '', image: logo50},
    { name: '', image: logo51 },
    { name: '', image: logo52 },
  
  ];
  



const Recruiters= () =>{
    return(
   <div>
   <div className="logo-container">
    {skillsData.map((logo, index) => (
      <div className="logo-card" key={index}>
        <img src={logo.image} alt={logo.name} className="logo-image" />
        <h4>{logo.name}</h4>
      </div>
    ))}
  </div>

    {/* <img className="image" src={logo1} alt="logo1" />
<img className="image" src={logo2} alt="logo2" />
<img className="image" src={logo3} alt="logo3" />
<img className="image" src={logo4} alt="logo4" />
<img className="image" src={logo5} alt="logo5" />
<img className="image" src={logo6} alt="logo6" />
<img className="image" src={logo7} alt="logo7" />
<img className="image" src={logo8} alt="logo8" />
<img className="image" src={logo9} alt="logo9" />
<img className="image" src={logo10} alt="logo10" />
<img className="image" src={logo11} alt="logo11" />
<img className="image" src={logo12} alt="logo12" />
<img className="image" src={logo13} alt="logo13" />
<img className="image" src={logo14} alt="logo14" />
<img className="image" src={logo15} alt="logo15" />
<img className="image" src={logo16} alt="logo16" />
<img className="image" src={logo17} alt="logo17" />
<img className="image" src={logo18} alt="logo18" />
<img className="image" src={logo19} alt="logo19" />
<img className="image" src={logo20} alt="logo20" />
<img className="image" src={logo21} alt="logo1" />
<img className="image" src={logo22} alt="logo2" />
<img className="image" src={logo23} alt="logo3" />
<img className="image" src={logo24} alt="logo4" />
<img className="image" src={logo25} alt="logo5" />
<img className="image" src={logo26} alt="logo6" />
<img className="image" src={logo27} alt="logo7" />
<img className="image" src={logo28} alt="logo8" />
<img className="image" src={logo29} alt="logo9" />
<img className="image" src={logo30} alt="logo10" />
<img className="image" src={logo31} alt="logo11" />
<img className="image" src={logo32} alt="logo12" />
<img className="image" src={logo33} alt="logo13" />
<img className="image" src={logo34} alt="logo14" />
<img className="image" src={logo35} alt="logo15" />
<img className="image" src={logo36} alt="logo16" />
<img className="image" src={logo37} alt="logo17" />
<img className="image" src={logo38} alt="logo18" />
<img className="image" src={logo39} alt="logo19" />
<img className="image" src={logo40} alt="logo20" />
<img className="image" src={logo41} alt="logo1" />
<img className="image" src={logo42} alt="logo2" />
<img className="image" src={logo43} alt="logo3" />
<img className="image" src={logo44} alt="logo4" />
<img className="image" src={logo45} alt="logo5" />
<img className="image" src={logo46} alt="logo6" />
<img className="image" src={logo47} alt="logo7" />
<img className="image" src={logo48} alt="logo8" />
<img className="image" src={logo49} alt="logo9" />
<img className="image" src={logo50} alt="logo10" />
<img className="image" src={logo51} alt="logo11" />
<img className="image" src={logo52} alt="logo12" /> */}
    
</div>


    );
}
export default Recruiters;