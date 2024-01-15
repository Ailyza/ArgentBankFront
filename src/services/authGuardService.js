// AuthGuardService.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  // Retrieve the authentication state from the Redux store
  const isConnected = useSelector((state) => state.isConnected);
  // State to manage loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the authentication state is loaded
    if (isConnected !== null) {
      // State is loaded, no need to delay
      setLoading(false);
    } else {
      // State is not loaded yet, introduce a delay, loading indicator, or other logic here
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust the delay time as needed
    }
  }, [isConnected]);

  if (loading) {
    // Render a loading indicator or other UI while waiting for state to load
    return <div>Loading...</div>;
  }

  if (!isConnected) {
    // User is not authenticated
    // He will be redirected to the login page
    return <Navigate to="/sign-in" />;
  }
  // User is authenticated, render the protected content
  return children;
};

export default AuthGuard;
