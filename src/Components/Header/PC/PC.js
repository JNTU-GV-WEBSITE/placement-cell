import { Link, Outlet, useLocation } from "react-router-dom";
import "./PC.css"; 
const PC = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         
      <Link
          to="/pc/about-placement"
          className={`menuButton ${
            location.pathname === "/pc/about-placement" ? "active" : ""
          }`}
        >
          About Training & Placement Cell
        </Link>

        <Link
          to="/pc/about-activities"
          className={`menuButton ${
            location.pathname === "/pc/about-activities" ? "active" : ""
          }`}
        >
          Activities
        </Link>

        <Link
          to="/pc/about-services"
          className={`menuButton ${
            location.pathname === "/pc/about-services" ? "active" : ""
          }`}
        >
          Services
        </Link>

       
        
      </div>
      <Outlet />
    </div>
  );
};

export default PC;