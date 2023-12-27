import { useState, useEffect } from "react";
import "../styling/userinfo.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";
import Transactions from "../components/Transactions";
import { useSelector } from "react-redux";
import { getAccessToken } from "../features/token/tokenSlice";
import { Redirect, useNavigate } from "react-router-dom";
const User = () => {
  const accessToken = useSelector(getAccessToken);
  const navigate = useNavigate()
  /*useEffect(() => {
    if (!accessToken) {
      console.log(getAccessToken)
      console.log("navigate")
      navigate("/login", { replace : true });
    }
  }, [accessToken]); */


  return (
    <>
      <UserInfo />
      <Transactions />
    </>
  );
};

export default User;
