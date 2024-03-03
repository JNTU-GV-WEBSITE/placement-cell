import { Link, Outlet, useLocation } from "react-router-dom";
import "./Studentsplaced.css"; 
const Studentsplacedmain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">

      
      <Link
          to="/students-placed/twenty-four"
          className={`menuButton ${
            location.pathname === "/students-placed/twenty-four" ? "active" : ""
          }`}
        >
          2023-2024
        </Link> 

        <Link
          to="/students-placed/twenty-three"
          className={`menuButton ${
            location.pathname === "/students-placed/twenty-three" ? "active" : ""
          }`}
        >
          2022-2023
        </Link> 

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

        <Link
          to="/students-placed/seventeen"
          className={`menuButton ${
            location.pathname === "/students-placed/seventeen" ? "active" : ""
          }`}
        >
          2016-2017
        </Link>

        <Link
          to="/students-placed/sixteen"
          className={`menuButton ${
            location.pathname === "/students-placed/sixteen" ? "active" : ""
          }`}
        >
          2015-2016
        </Link>
        
      </div>
      <Outlet />
    </div>
  );
};

export default Studentsplacedmain;