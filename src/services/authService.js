// authService.js
import {
  setToken,
  setUserProfile,
  setConnexionFlag,
  resetUserProfile,
} from "../store/userSlice";
import { loginUser as apiLoginUser, fetchUserProfile } from "./apiService";
export const logout = (dispatch) => {
  // Clear user information from localStorage
  localStorage.removeItem("token");
  // Reset the Redux state by dispatching appropriate actions
  dispatch(resetUserProfile());
};

export const loginUser = async (userName, password, dispatch, navigate) => {
  try {
    const loginData = await apiLoginUser(userName, password);
    const token = loginData.body.token;

    dispatch(setToken(token));
    localStorage.setItem("token", token);
    dispatch(setConnexionFlag(true));

    const userProfileData = await fetchUserProfile(token);
    const userProfile = userProfileData.body;
    dispatch(setUserProfile(userProfile));

    navigate("/profile");
    // Return null or an empty string to indicate success (no error)
    return "";
  } catch (error) {
    // Handle API call errors, e.g., show an error message to the user
    // Return the error message as a string
    return "Failed to sign in. Please try again.";
  }
};
