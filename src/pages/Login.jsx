import "../styling/sign.css"; // Replace with your CSS file path
import { useEffect, useState } from "react";
import { useNavigate, useHistory } from "react-router-dom"; // Using useNavigate instead of useHistory
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	getAccessToken,
	getUser,
	getTokenStatus,
	getTokenErrorMessage,
	fetchToken,
	clearAccessToken,
} from "../features/token/tokenSlice";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const navigate = useNavigate(); // Using useNavigate to navigate

	const accessToken = useSelector(getAccessToken);
	const tokenStatus = useSelector(getTokenStatus);
	const user = useSelector(getUser);
	const tokenErrorMessage = useSelector(getTokenErrorMessage);

	const dispatch = useDispatch();
	// dispatch est une fonction de redux permettant de déclencher la distribution des variables
	const handleLogin = () => {
		// Dispatch the fetchToken action when the login button is clicked
		dispatch(fetchToken({ email, password }));
	};
	const handleLogOut = () => {
		dispatch(clearAccessToken());
	};
	useEffect(() => {
		if (tokenStatus === "succeeded") {
			navigate("/user/transaction", { state: { accessToken, user } });
		}
	}, [tokenStatus, user]);

	return (
		<>
			<div className="signup-container">
				<h1 className="signup-heading">Log In</h1>
				<form className="signup-form">
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
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
					<div className="form-group">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button
						className="signup-button"
						onClick={(e) => {
							e.preventDefault();
							handleLogin();
						}}
					>
						Log In
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
