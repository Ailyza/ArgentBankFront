import "../styling/transactiondetails.css";
import Item from "./Item";

const TransactionDetails = () => {
  const transactions = [
    {
      date: "27/02/2023",
      description: "Golden Sun Bakery",
      amount: "$8.00",
      balance: "$128.00",
    },
    {
      date: "27/02/2023",
      description: "Golden Sun Bakery",
      amount: "$8.00",
      balance: "$128.00",
    },
    {
      date: "27/02/2023",
      description: "Golden Sun Bakery",
      amount: "$8.00",
      balance: "$128.00",
    },
    // Add more transaction objects as needed
  ];

  return (
    <div className="wrapper">
      <div className="wrap-content">
        <div className="wrap-title">
          <div className="id">
            <h4>Date</h4>
          </div>
          <div className="description">
            <h4>Description</h4>
          </div>
          <div className="amount">
            <h4>Amount</h4>
          </div>
          <div className="balence">
            <h4>Balence</h4>
          </div>
          <div>
            <h4> </h4>
          </div>
        </div>
        {transactions.map((transaction, index) => (
          <Item key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionDetails;
