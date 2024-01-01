import { Link, Outlet, useLocation } from "react-router-dom";
import "./About.css"; 
const AboutMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         
         <Link
          to="/about-us/about-jntugv"
          className={`menuButton ${
            location.pathname === "/about-us/about-jntugv" ? "active" : ""
          }`}
        >
          JNTU-GV
        </Link>
        <Link
          to="/about-us/about-jobboard"
          className={`menuButton ${
            location.pathname === "/about-us/about-jobboard" ? "active" : ""
          }`}
        >
          JOBBOARD
        </Link>
       
       
        <Link
          to="/about-us/about-training"
          className={`menuButton ${
            location.pathname ==="/about-us/about-training" ? "active" : ""
          }`}
        >
          TRAINING & PLACEMENT
        </Link>
        
        <Link
          to="/about-us/about-mission" 
          className={`menuButton ${
            location.pathname === "/about-us/about-mission" ? "active" : ""
          }`}
        >
          MISSION
        </Link>

        <Link
          to= "/about-us/about-vision"
          className={`menuButton ${
            location.pathname === "/about-us/about-vision" ? "active" : ""
          }`}
        >
        VISION
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutMain;