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

        {/* <Link
          to="/about-us/about-training"
          className={`menuButton ${
            location.pathname === "/about-us/about-training" ? "active" : ""
          }`}
        >
          TRAINING & PLACEMENT CELL
        </Link>  */}

        <Link
          to="/about-us/about-jobboard"
          className={`menuButton ${
            location.pathname === "/about-us/about-jobboard" ? "active" : ""
          }`}
        >
          JOB BOARD
        </Link>

        <Link
          to="/about-us/about-director"
          className={`menuButton ${
            location.pathname === "/about-us/about-director" ? "active" : ""
          }`}
        >
          DIRECTOR
        </Link>

        <Link
          to="/about-us/about-vision-mission"
          className={`menuButton ${
            location.pathname === "/about-us/about-vision-mission" ? "active" : ""
          }`}
        >
          VISION & MISSION
        </Link>
        
      </div>
      <Outlet />
    </div>
  );
};

export default AboutMain;