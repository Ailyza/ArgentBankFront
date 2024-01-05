import { useState, useEffect } from "react";
import TransactionDetails from "../components/TransactionDetails";
import Transactions from "../components/Transactions";
import "../App.css";
import { useSelector } from "react-redux";
import { getAccessToken,getTokenStatus } from "../features/token/tokenSlice";
import { Redirect, useNavigate } from "react-router-dom";

const DetailedTransac = () => {
  const accessToken = useSelector(getAccessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/login", { replace : true });

    }
  }, [accessToken]); 

  

  return (
    <div className="wrapper">
      <Transactions />
      <TransactionDetails />
    </div>
  );
};

export default DetailedTransac;
