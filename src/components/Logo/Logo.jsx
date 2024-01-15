import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./logo.css";

function Logo() {
  const location = useLocation();
  return (
    <Link to="/" className="logo">
      {location.pathname.includes("edit-username") ? (
        // Render a different logo and text if the current route contains "edit-username"
        <>
          <img className="logo__image" src={logo2} alt="Argent Bank Logo" />
          <h1 className="logo__text">
            <span className="logo__text-v2">Argent</span>
            <span>Bank</span>
          </h1>
        </>
      ) : (
        // Render the default logo if not in "edit-username" route
        <>
          <h1 className="logo__text-v1">
            <span>ARGENT</span>
            <span className="logo__color2">BANK</span>
          </h1>
        </>
      )}
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  );
}

export default Logo;
