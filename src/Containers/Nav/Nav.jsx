import React from "react";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./nav.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

function Nav() {
  // Get user information and authentication status from the Redux store
  const { userName } = useSelector((state) => state.userProfile);
  const isConnected = useSelector((state) => state.isConnected);

  // Get the current location using React Router's useLocation
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle the user's logout
  const handleLogout = () => {
    logout(dispatch); // Call the logout function from authService
    navigate("/"); // Redirect to the home page
  };

  // Determine the content to display in the navigation bar based on the current location and user's authentication status
  const displayNav = () => {
    if (location.pathname === "/profile/edit-username") {
      return (
        <div className="main-nav__green">
          <Link to="#" className="main-nav-item">
            <span>{userName}</span>
            <i className="fa fa-user-circle"></i>
          </Link>
          <Link to="#" className="main-nav-item">
            <i className="fa fa-gear"></i>
          </Link>
          <Link onClick={handleLogout} to="/">
            <i className="fa-solid fa-power-off"></i>
          </Link>
        </div>
      );
    }
    return isConnected ? (
      <>
        <Link to="profile" className="main-nav-item">
          {userName}
        </Link>
        <Link onClick={handleLogout} to="/" className="main-nav-item">
          <i className="fa fa-sign-out"></i>
          <span className="main-nav-item__signout">Sign Out</span>
        </Link>
      </>
    ) : (
      <Link to="sign-in" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        <span>Sign In</span>
      </Link>
    );
  };

  return (
    <nav className="main-nav">
      <Logo className="logo" />
      <div className="main-nav__links-wrapper">{displayNav()}</div>
    </nav>
  );
}

export default Nav;
