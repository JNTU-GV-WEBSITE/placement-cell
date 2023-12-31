import { Link, Outlet, useLocation } from "react-router-dom";
import "./Studentsplaced.css"; 
const Studentsplacedmain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         
      <Link
          to="/students-placed/twenty-two"
          className={`menuButton ${
            location.pathname === "/students-placed/twenty-two" ? "active" : ""
          }`}
        >
          2021-2022
        </Link>

        <Link
          to="/students-placed/twenty-one"
          className={`menuButton ${
            location.pathname === "/students-placed/twenty-one" ? "active" : ""
          }`}
        >
          2020-2021
        </Link>

        <Link
          to="/students-placed/twenty"
          className={`menuButton ${
            location.pathname === "/students-placed/twenty" ? "active" : ""
          }`}
        >
          2019-2020
        </Link>

        <Link
          to="/students-placed/nineteen"
          className={`menuButton ${
            location.pathname === "/students-placed/nineteen" ? "active" : ""
          }`}
        >
          2018-2019
        </Link>

        <Link
          to="/students-placed/eighteen"
          className={`menuButton ${
            location.pathname === "/students-placed/eighteen" ? "active" : ""
          }`}
        >
          2017-2018
        </Link>
        
      </div>
      <Outlet />
    </div>
  );
};

export default Studentsplacedmain;