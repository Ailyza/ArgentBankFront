import React from "react";
import Logo from "../../components/Logo/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./nav.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


function Nav() {
  // Get user information and authentication status from the Redux store
  const { firstName, lastName } = useSelector(
		(state) => state.user.userProfile
	);

  
  const isConnected = useSelector((state) => state.user.isConnected);

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
		let navContent;

		if (location.pathname === "/profile/edit-username") {
			navContent = (
				<div className="main-nav__green">
					<Link to="#" className="main-nav-item">
						<span>{firstName}</span>
						
					</Link>
					<Link to="#" className="main-nav-item"></Link>
					<Link onClick={handleLogout} to="/"></Link>
				</div>
			);
		} else if (isConnected) {
			navContent = (
				<>
					<Link to="profile" className="main-nav-item">
						<FontAwesomeIcon icon={faUserCircle} />
						{firstName}
					</Link>
					<Link onClick={handleLogout} to="/" className="main-nav-item">
						<span className="main-nav-item__signout">Sign Out</span>
					</Link>
				</>
			);
		} else {
			navContent = (
				<Link to="login" className="main-nav-item">
					<FontAwesomeIcon icon={faUserCircle} />
					<span>Sign In</span>
				</Link>
			);
		}
		return navContent;
	};

console.log("Je suis connectée:", firstName);
  return (
		<nav className="main-nav">
			<Logo className="logo" />
			<div className="main-nav__links-wrapper">{displayNav()}</div>
		</nav>
	);
}

export default Nav;
