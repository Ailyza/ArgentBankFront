import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoArgentBank from "../../assets/pictures/argentBankLogo.webp";

import "./logo.css";

function Logo() {
 
  return (
    <Link to="/" className="logo">
      <nav className="main-nav">
        <img
          className="main-nav-logo-image"
          src={LogoArgentBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </nav>
    </Link>
  );
}

export default Logo;
