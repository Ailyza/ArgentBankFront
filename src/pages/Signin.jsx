import { useState } from "react";
import "../App.css";
import axios from "axios";
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const dispatch = useDispatch(); // dispatch est une fonction de redux permettant de déclencher la distribution des variables

	const { Token } = useSelector((state) => state); // grâce au Hook useSelector, on peut récupérer une variable stockée dans Redux. En l'occurence on récupère ici la variable (state) Token

	const logConnect = async () => {
		console.log("username : " + username);
		try {
			const res = await axios.post("http://localhost:3001/api/v1/user/login", {
				email: username,
				password: password,
			});
			console.log(res.data); // verif mail password
			// une fois que l'authentification se passe bien, on déclanche l'action loginUser en lui passant comme paramètre le token envoyé depuis le serveur

			dispatch(loginUser(res.data.body.token)); // cette ligne là nous permet de stocker le token envoyé depuis le serveur (le token se trouve dans res.data.body.token) dans REDUX

			// une fois que l'utilisateur s'est bien connecté, il faut le rediriger vers la page User
			navigate("/user");
		} catch (error) {
			alert("Merci de vérifier votre saisie");
		}
	};

	return (
		<nav className="main-nav">
			<h1>page SignIn</h1>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form>
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
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button onClick={logConnect}>Signin</button>
					</form>
				</section>
			</main>
			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</nav>
	);
};

export default Signin;
