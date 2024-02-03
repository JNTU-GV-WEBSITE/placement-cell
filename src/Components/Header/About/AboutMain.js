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
          JOB BOARD
        </Link>

        <Link
          to="/about-us/about-iiit-placements"
          className={`menuButton ${
            location.pathname === "/about-us/about-iiit-placements" ? "active" : ""
          }`}
        >
          IIIT & PLACEMENTS
        </Link>

        <Link
          to="/about-us/about-director"
          className={`menuButton ${
            location.pathname === "/about-us/about-director" ? "active" : ""
          }`}
        >
          CO-ORDINATOR
        </Link>

        <Link
          to="/about-us/about-supporting-staff"
          className={`menuButton ${
            location.pathname === "/about-us/about-supporting-staff" ? "active" : ""
          }`}
        >
          SUPPORTING STAFF
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