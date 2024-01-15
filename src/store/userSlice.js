// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserProfile,
  updateProfile,
  loginUser,
} from "../services/apiService";
import { logout } from "../services/authService";
//define initialState outside of slice to reuse this value in the slice and in reducer.
const initialState = {
  isConnected: false, // Indicates whether the user is connected
  token: null, // User authentication token
  userProfile: {}, // User profile informations
};
// Create a Redux slice for managing user-related state
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer to set the connection flag
    setConnexionFlag: (state, action) => {
      state.isConnected = action.payload;
    },
    // Reducer to set the user token
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // Reducer to set the user profile
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    // Add a reset action to reset the state to initialState
    resetUserProfile: () => initialState,
  },
});
// Export action creators for the reducers
export const { setConnexionFlag, setToken, setUserProfile, resetUserProfile } =
  userSlice.actions;

// Async action to fetch the user profile using the provided token
export const fetchUserProfileAsync = (token) => {
  return async (dispatch) => {
    try {
      const userProfileData = await fetchUserProfile(token);
      const userProfile = userProfileData.body;
      dispatch(setUserProfile(userProfile));
    } catch (error) {
      if (error.message === "invalid token") {
        // Handle the error by updating the connection state
        logout(dispatch);
        console.error("Invalid token. Logging out.");
      } else {
        // Handle other errors here
        console.error("Error fetching user profile:", error);
      }
    }
  };
};

// Async action (Thunk) to update the user's username
export const updateUsernameAsync = (token, newUsername) => {
  return async (dispatch) => {
    try {
      // Call the API to update the username
      const updatedProfileData = await updateProfile(token, newUsername);
      const updatedProfile = updatedProfileData.body;

      // Update the user profile in the Redux store
      dispatch(setUserProfile(updatedProfile));
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };
};

// Async action (Thunk) to handle user authentication and profile retrieval
export const signInAsync = (username, password, rememberMe) => {
  return async (dispatch) => {
    try {
      // 1 - Call the API to obtain the authentication token
      const loginData = await loginUser(username, password);
      const token = loginData.body.token;

      dispatch(setToken(token));

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
      // 2 - Use the token to fetch the user's profile
      const userProfileData = await fetchUserProfile(token);
      const userProfile = userProfileData.body;
      dispatch(setUserProfile(userProfile));
      dispatch(setConnexionFlag(true));
      return true; // Successful connection
    } catch (error) {
      // Connection failed with the error
      console.error("Error during sign-in:", error);
      return { success: false, error }; // Connection failed with the error
    }
  };
};
export default userSlice.reducer;
