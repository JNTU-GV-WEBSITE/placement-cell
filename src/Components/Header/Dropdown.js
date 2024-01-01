import "./Dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import DraftsIcon from "@mui/icons-material/Drafts";

import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Dropdown = () => {
  const navigate = useNavigate();

  const [menuState, setMenuState] = useState(false);

  const homeHandler = () => {
    navigate("/");
  };

  const contactHandler = () => {
    navigate("/contact-us");
  };
  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        <div class="dropdown">
          <div class="dropbtn" onClick={homeHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <HomeIcon /> HOME
            </div>
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
                About Jntugv
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-jobboard">
                About jobboard
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-training">
                About Training & placement
              </Link>
            </button>

            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-mission">
                Mission
              </Link>
            </button>

            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-vision">
                Vision
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <GroupsIcon />
            TRAINING & PLACEMENT CELL
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >
            <button> </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <SchoolIcon /> PLACEMENT CELL NOTIFICATIONS
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          ></div>
        </div>

        <div class="dropdown">
          <div class="dropbtn">
            <PersonIcon />
            OUR RECRUITERS
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          ></div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <DescriptionIcon /> STUDENTS PLACED
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          ></div>
        </div>

        <div class="dropdown">
          <div className="dropbtn" onClick={contactHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <DraftsIcon /> CONTACT US
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Dropdown;
