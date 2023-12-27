import { Route, Navigate } from "react-router-dom";
import { getAccessToken, getTokenStatus } from "../features/token/tokenSlice";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  // Check for authentication here, e.g., by verifying the presence of an access token
  const accessToken = useSelector(getAccessToken);
  const tokenStatus = useSelector(getTokenStatus);
  let isAuthenticated;
  if (tokenStatus === "succeeded") {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
