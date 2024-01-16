// authService.js
import {
  setToken,
  setUserProfile,
  setConnexionFlag,
  resetUserProfile,
} from "../store/userSlice";
import { loginUser as apiLoginUser, fetchUserProfile } from "./apiService";
export const logout = (dispatch) => {
  
  localStorage.removeItem("token");
  // reset le token et le profil
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
    // message de succès
    return "";
  } catch (error) {
    // message d'erreur
    return "Failed to sign in. Please try again.";
  }
};
