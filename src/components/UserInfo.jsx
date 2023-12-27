import React, { useEffect, useState } from "react";
import "../styling/userinfo.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../features/user/userSlice";
import { getAccessToken, getTokenStatus } from "../features/token/tokenSlice";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, userName } = useSelector(getUser);
  const user = useSelector(getUser);
  const accessToken = useSelector(getAccessToken);
  const tokenStatus = useSelector(getTokenStatus);
  const handleGetUser = (e) => {
    e.preventDefault();
    dispatch(fetchUser({}));
    setFirstNameInpt(firstName);
    setLastNameInpt(lastName);
    setUsernameInpt(userName);
  };

  const [firstNameInpt, setFirstNameInpt] = useState(firstName);
  const [lastNameInpt, setLastNameInpt] = useState(lastName);
  const [userNameInpt, setUsernameInpt] = useState(userName);
  return (
    <>
      <div className="userinfo">
        <h1>Edit user info</h1>

        <div className="input-wrapper">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            value={userNameInpt}
            onChange={(e) => setUsernameInpt(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">First name</label>
          <input
            type="text"
            id="firstname"
            value={firstNameInpt}
            onChange={(e) => setFirstNameInpt(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">Last name</label>
          <input
            type="text"
            id="lastname"
            value={lastNameInpt}
            onChange={(e) => setLastNameInpt(e.target.value)}
          />
        </div>
        <div className="buttons-set">
          <button className="buttony">Save</button>
          <button className="buttony">Cancel</button>
          <button type="button" onClick={handleGetUser} className="buttony">
            Load
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
