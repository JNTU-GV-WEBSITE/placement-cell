import "./Dropdown.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
//import DraftsIcon from "@mui/icons-material/Drafts";

import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Dropdown = () => {
  //const navigate = useNavigate();

  const [menuState, setMenuState] = useState(false);

  // const homeHandler = () => {
  //   navigate("/");
  // };

  // const contactHandler = () => {
  //   navigate("/contact-us");
  // };
  
  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        
      <div className="dropdown">
      <div className="dropbtn">
        <Link to="/" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <HomeIcon /> HOME
        </Link>
      </div>
    </div>

        <div class="dropdown">
          <div class="dropbtn">
            <ApartmentIcon /> ABOUT US
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-jntugv">
                About JNTUGV
              </Link>
            </button>

            {/* <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-training">
                About Training & placement Cell
              </Link>
            </button> */}

            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-jobboard">
                About Job Board
              </Link>
            </button>

           <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-director">
                About Director
              </Link>
            </button>

            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-vision-mission">
              Vision & Mission
              </Link>
            </button>
            </div>
        </div>
        
         <div class="dropdown">
          <div className="dropbtn">
          <Link to="/training-placement-cell" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <GroupsIcon /> TRAINING AND PLACEMENT CELL
        </Link>
          </div>
        </div> 

        <div class="dropdown">
          <div className="dropbtn">
          <Link to="/notifications" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <SchoolIcon />NOTIFICATIONS
        </Link>
          </div>
        </div>

        <div class="dropdown">
          <div className="dropbtn">
          <Link to="/our-recruiters" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <PersonIcon /> OUR RECRUITERS
        </Link>
          </div>
        </div>


        <div class="dropdown">
          <div class="dropbtn">
            <DescriptionIcon /> STUDENTS PLACED
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >
            <button>
              {" "}
              <Link className="link-btn" to="/students-placed/twenty-two">
                2021-2022
              </Link>
            </button>

            <button>
              {" "}
              <Link className="link-btn" to="/students-placed/twenty-one">
                2020-2021
              </Link>
            </button>

            <button>
              {" "}
              <Link className="link-btn" to="/students-placed/twenty">
                2019-2020
              </Link>
            </button>

           <button>
              {" "}
              <Link className="link-btn" to="/students-placed/nineteen">
                2018-2019
              </Link>
            </button>

            <button>
              {" "}
              <Link className="link-btn" to="/students-placed/eighteen">
              2017-2018
              </Link>
            </button>
            </div>
        </div>
        

        {/* <div class="dropdown">
          <div className="dropbtn">
          <Link to="/contact-us" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <DraftsIcon /> CONTACT US 
        </Link>
          </div>
        </div> */}
        
      </div>
    </nav>
  );
};

export default Dropdown;
