import React from "react";
import "./account.css";
import Button from "../Button/Button";

function Account(props) {
  // Render an account section with a dynamic style based on 'props.style'
  return (
    <section className={`account${props.style ? "__" + props.style : ""}`}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      {props.style === "dark" ? (
        <Button className="transaction-button-arrow" />
      ) : (
        <Button className="transaction-button" buttonText="View transactions" />
      )}
    </section>
  );
}

export default Account;
