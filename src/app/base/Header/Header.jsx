import React from "react";

// Import Modules
import { Link } from "react-router-dom";

// Import Icons
import { FaCog } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

// Import Images
import logo from "../../../img/logo.png";

function Header(props) {
  const logoutUser = e => {
    props.onLogoutUser();
  };

  const displayModule = module => {
    let isOnline = props.checkUserStatus;


    switch (module) {
      case "user-experience":
        if (isOnline === true) {
          return (
            <div className="d-flex flex-column justify-content-center h-100 pl-4">
              <div className="row mx-0">
              <div className="col-3">
              <h4 className="text-uppercase">
                niveau <span>3</span>
              </h4>
              </div>
              <div className="col-9">
                <h6 className="text-center">25 / 100 XP</h6>
              <div class="progress rounded-0" >
  <div className="progress-bar w-25 bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
              </div>
              </div>
            </div>

          );
        }
        break;
      case "right-buttons":
        if (isOnline === true) {
          return (
            <div className="buttonsHeaderDrop">
              <FaQuestionCircle className="headerRightIcons" />
              <FaCog className="headerRightIcons" />
              <IoMdLogOut className="headerRightIcons" onClick={props.onLogoutUser} />
            </div>
          );
        } else {
          return <div className="buttonsHeaderDrop"> </div>;
        }
      default:
        return (
          <div className="text-center">
            <h3>Il faut vous identifier !</h3>
          </div>
        );
    }
  };

  return (
    <header>
      <div className="leftHeader">{displayModule("user-experience")}</div>

      <div className="middleHeader">
        <Link to="/" className="link-logo">
          <img src={logo} className="logo-main" alt="img" />
        </Link>
        <div id="trapezoid"></div>
      </div>

      <div className="rightHeader">
        <nav>
          <ul>
            <li
              onClick={e => {
                props.onChangeTab("home");
              }}
            >
              Les Coders
            </li>
            <li
              onClick={e => {
                props.onChangeTab("arene");
              }}
            >
              Les Clans
            </li>
          </ul>

          {displayModule("right-buttons")}
        </nav>
      </div>
    </header>
  );
}
export default Header;
