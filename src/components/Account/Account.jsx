import React from "react";
import "./account.css";
import Button from "../Button/Button";

function Account(props) {
	// Render an account section with a dynamic style based on 'props.style'
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{account.title}</h3>
				<p className="account-amount">{account.amount}</p>
				<p className="account-amount-description">{account.description}</p>
			</div>
			<div class="account-content-wrapper cta">
				<button class="transaction-button">View transactions</button>
			</div>
		</section>
	);
}


export default Account;
