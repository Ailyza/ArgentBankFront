import "../styling/navbar.css";
import AgentBankLogo from "../assets/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ handleLogOut }) => {
  const navigate = useNavigate();
  return (
    <nav className="main-nav">
      <div className="left-sec">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={AgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </div>

      <div className="right-sec">
        <div className="profile">
          <Link to="/login" className="main-nav-item">
            <div className="profile-items">
              <p> Ben_hg</p>
              <div className="circle-nav">
                <FontAwesomeIcon icon={faUser} className="font-aw-n" />
              </div>
            </div>
          </Link>
        </div>
        <div className="settings circle-nav">
          <a href="">
            <FontAwesomeIcon icon={faGear} className="font-aw-n" />
          </a>
        </div>
        <div
          className="logout circle-nav"
          onClick={() => {
            handleLogOut();
            navigate("/");
          }}
        >
          <div className="main-nav-item">
            <FontAwesomeIcon icon={faRightFromBracket} className="font-aw-n" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
