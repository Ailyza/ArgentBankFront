import "../styling/transaction.css";
import React from "react";
import accountInformation from "../data/account"; // importation des données
import Account from "./Transaction";
import "../App.css";


const Transactions = () => {
  return (
		<div className="transactions">
			{accountInformation.map((account, index) => ( //parcourir les inforamtion avec map
				<Account key={index} account={account} /> 
			))}
		</div>
	);
};

export default Transactions;
