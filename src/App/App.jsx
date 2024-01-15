// App.jsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Import Redux actions for managing user authentication and profile
import {
  setToken,
  setConnexionFlag,
  fetchUserProfileAsync,
} from "../store/userSlice";

// Import the Router component for routing in the application
import Router from "../Router/Router";

function App() {
  const dispatch = useDispatch();

  // Retrieve the user's token from local storage
  const storedToken = localStorage.getItem("token");

  // Use the useEffect hook to run code after component mounting
  useEffect(() => {
    if (storedToken) {
      // If a token is found in local storage, update the Redux store
      dispatch(setToken(storedToken));
      dispatch(setConnexionFlag(true));
      dispatch(fetchUserProfileAsync(storedToken));
    }
  }, [dispatch, storedToken]);
  // Render the Router component to handle application routing
  return <Router />;
}

export default App;
