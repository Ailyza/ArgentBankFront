// AuthGuardService.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
	const isConnected = useSelector((state) => state.user.isConnected);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (isConnected !== null) {
			setLoading(false);
		} else {
			setTimeout(() => {
				setLoading(false);
			}, 1000); // delai 1 seconde
		}
	}, [isConnected]);

	if (!isConnected) {
		// Utilisateur non connecté
		// redirection vers la page de connexion
		return <Navigate to="/sign-in" />;
	}
	// Utilisateur connecté
	return children;
};

export default AuthGuard;
