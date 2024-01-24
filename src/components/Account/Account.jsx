import React from "react";
import "./account.css";
import Button from "../Button/Button";

function Account(props) {
	// Render an account section with a dynamic style based on 'props.style'
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{props.title}</h3>
				<p className="account-amount">{props.amount}</p>
				<p className="account-amount-description">{props.description}</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	);
}


export default Account;
