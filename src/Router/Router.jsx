//router.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Nav from "../Containers/Nav/Nav";
import Footer from "../Containers/Footer/Footer";
import Error404 from "../Pages/Error404/Error404";
import SignIn from "../Pages/SignIn/SIgnIn";
import Profile from "../Pages/User/Profile";
import EditUsername from "../Pages/EditUsername/EditUsername";
import AuthGuard from "../services/authGuardService";
export default function Router() {
	// By wrapping protected routes inside the <AuthGuard> component
	// we ensure that only authenticated  users can access those routes
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route
					path="/profile"
					element={
						<AuthGuard>
							<Profile />
						</AuthGuard>
					}
				/>
				<Route
					path="/profile/edit-username"
					element={
						<AuthGuard>
							<EditUsername />
						</AuthGuard>
					}
				/>
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
