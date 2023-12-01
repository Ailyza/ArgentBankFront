import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "../redux/actions";

const User = () => {
	const dispatch = useDispatch(); // dispatch est une fonction de redux permettant de déclencher la distribution des variables

	const { Token, User } = useSelector((state) => state); // grâce au Hook useSelector, on peut récupérer une variable stockée dans Redux. En l'occurence on récupère ici la variable (state) Token

	const getProfile = async () => {
		try {
			const res = await axios.post(
				"http://localhost:3001/api/v1/user/profile",
				{},
				{ headers: { Authorization: `Bearer ${Token}` } }
			);

			// on stocke les infos du user dans redux
            dispatch(setUser(res.data.body))
		} catch (error) {
			alert(
				"Impossible de récupérer les infos de l'utilisateur. merci de réessayer plus tard"
			);
		}
	};

	useEffect(() => {
		// au chargement de la page on vérifie si le Token est présent. S'il n'est pas présent, c'est que l'utilisateur n'est pas connecté.
		// il faut donc le rediriger vers la page principale

		if (!Token) {
			window.location = "/";
		} else {
			// on appelle le serveur pour récupérer les infos de notre utilisateur avec le Token
			getProfile();
		}
	}, []);

	return <div>
        {User ? <div>Bonjour {User.firstName} {User.lastName} ! Vous êtes bien connecté !</div> : "Vous n'êtes pas connecté"}
    </div>;
};

export default User;
