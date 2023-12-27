import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styling/transaction.css";
import React from "react";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Transaction = () => {
  return (
    <article className=" tr-wrapper">
      <div className="tr-content">
        <h3 className="tr-title">Argent Bank Checking (x8349)</h3>
        <p className="tr-amount">$2,082.79</p>
        <p className="tr-description">Available Balance</p>
      </div>
      <div className="cta">
        <Link to="transaction" className="view-more">
          <FontAwesomeIcon icon={faGreaterThan} className="font-aw" />
        </Link>
      </div>
    </article>
  );
};

export default Transaction;
