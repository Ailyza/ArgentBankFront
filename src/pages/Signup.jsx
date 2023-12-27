import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions";
import { useNavigate } from "react-router-dom"; // Using useNavigate instead of useHistory

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Using useNavigate to navigate

  const dispatch = useDispatch();
  const { Token } = useSelector((state) => state);

  const logConnect = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/v1/user/login", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        userName: username,
      });
      dispatch(loginUser(res.data.body.token));

      if (rememberMe) {
        // Store user data (token, username, etc.) securely
      }

      navigate("/user"); // Navigate to the '/user' page
    } catch (error) {
      alert("Please check your credentials");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form className="signup-form">
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">firstname</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">lastName</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div> */}
        <button className="signup-button" onClick={logConnect}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
