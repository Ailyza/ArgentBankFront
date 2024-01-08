import { useState, useEffect } from "react";
import TransactionDetails from "../components/TransactionDetails";
import Transactions from "../components/Transactions";
import UserInfo from "../components/UserInfo";
import "../App.css";
import { useSelector } from "react-redux";
import { getAccessToken, getTokenStatus } from "../features/token/tokenSlice";
import { Redirect, useNavigate, useLocation } from "react-router-dom";

const DetailedTransac = () => {
	const accessToken = useSelector(getAccessToken);
	const location = useLocation();
	const { state } = location;

	// Access the values passed during navigation
	const user = state?.user;
	const navigate = useNavigate();
	useEffect(() => {
		if (!accessToken) {
			navigate("/login", { replace: true });
		}
	}, [accessToken]);
	const [editMode, setEditMode] = useState(false);
	const [formData, setFormData] = useState({
		username: user.userName,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
	});
	const handleEditClick = () => {
		// Toggle the editMode state to show or hide the form
		setEditMode(!editMode);
	};

	const handleInputChange = (e) => {
		// Update the form data as the user types
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your logic to handle form submission here
		console.log("Form submitted with data:", formData);
		// You can reset the form or perform any other action as needed

		// After submission, exit edit mode
		setEditMode(false);
	};
	return (
		<main class="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{user?.firstName} {user?.lastName}
				</h1>
				{editMode ? (
					<form onSubmit={handleSubmit}>
						<label>
							Username:
							<input
								type="text"
								name="username"
								value={formData.username}
								onChange={handleInputChange}
							/>
						</label>
						<br />
						<label>
							First Name:
							<input
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleInputChange}
								disabled="true"
							/>
						</label>
						<br />
						<label>
							Last Name:
							<input
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleInputChange}
								disabled="true"
							/>
						</label>
						<br />
						<label>
						Email:
						<input type="email" 
						name= "email"
						value={formData.email}
						onChange={handleInputChange}
						disabled="true"/>
						</label>

						<br />
						<button type="submit">Submit</button>
					</form>
				) : (
					<button class="edit-button" onClick={handleEditClick}>
						Edit Name
					</button>
				)}
			</div>
			<h2 class="sr-only">Accounts</h2>
			<div className="wrapper">
				<Transactions />
				<TransactionDetails />
			</div>
		</main>
	);
};

export default DetailedTransac;
