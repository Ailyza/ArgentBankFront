import React from "react";
import { Link } from "react-router-dom";

import "./error-404.css";
export default function Error404() {
  return (
    <div className="error404__container">
      <p className="error404__error-message">
        Error<span>404</span>
      </p>
      <p className="error404__user-info">
        La page que vous demandez n'éxiste pas.
      </p>
      <Link
        className="error404__back-link"
        to="#"
        onClick={() => window.history.back()}
      >
        Page précédente
      </Link>
    </div>
  );
}
