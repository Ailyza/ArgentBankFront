import "../styling/transaction.css";
import React from "react";
import Transaction from "./Transaction";
import TransactionDetails from "./TransactionDetails";

const Transactions = () => {
  return (
    <div className="transactions">
      <Transaction />
      <Transaction />
    </div>
  );
};

export default Transactions;
