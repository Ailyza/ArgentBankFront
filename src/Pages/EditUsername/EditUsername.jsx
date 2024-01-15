//EdituserName.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./edit-username.css";
import Button from "../../components/Button/Button";
import Accounts from "../../Containers/Accounts/Accounts";
import { useSelector, useDispatch } from "react-redux";
import {
  hasMinimumLength,
  isUsernameDifferent,
} from "../../services/validationService";
import { updateUsernameAsync } from "../../store/userSlice";

function EditUsername() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retrieve user profile and token from Redux state
  const { firstName, lastName, userName } = useSelector(
    (state) => state.userProfile
  );
  const token = useSelector((state) => state.token);

  // Local state to manage the new username and error messages
  const [newUsername, setNewUsername] = useState(userName);
  const [error, setError] = useState("");

  // Handle username input changes
  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newUsername) {
      setError("Username is required.");
      return;
    }
    if (!hasMinimumLength(newUsername, 3)) {
      setError("Username must have a minimum length of 3 characters.");
      return;
    }
    if (!isUsernameDifferent(newUsername, userName)) {
      setError("New username must be different from the current username.");
      return;
    }

    // Dispatch the Redux Thunk action to update the username
    dispatch(updateUsernameAsync(token, newUsername))
      .then(() => {
        // Username update is handled in the userSlice reducer
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred while updating the username.");
      });
  };

  return (
    <main className="main">
      <div className="edit-username">
        <h1 className="edit-username__title">Edit user info</h1>
        <form className="edit-username__form" onSubmit={handleSubmit}>
          <div className="edit-username__input-wrapper">
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              id="username"
              placeholder={userName}
              value={newUsername}
              onChange={handleUsernameChange}
              maxLength={10}
              className={error ? "edit-username__error-input" : ""} // Ajoute la classe d'erreur si une erreur existe
            />
          </div>
          <div className="edit-username__input-wrapper">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              disabled
              placeholder={firstName}
            />
          </div>
          <div className="edit-username__input-wrapper">
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" disabled placeholder={lastName} />
          </div>
          <div className="edit-username__buttons-wrapper">
            <Button
              type="submit"
              className="edit-username-button"
              buttonText="Save"
            />
            <Button
              handleClick={() => navigate("/profile")}
              className="edit-username-button"
              buttonText="Cancel"
            />
          </div>
          <div className="edit-username__error-message">{error}</div>
        </form>
        <Accounts style="dark" />
      </div>
    </main>
  );
}

export default EditUsername;
