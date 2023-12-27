import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./pages/User";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DetailedTransac from "./pages/DetailedTransac";
import TestSignIn from "./components/TestSignIn";

import { useDispatch } from "react-redux";

import {
  getAccessToken,
  getTokenStatus,
  getTokenErrorMessage,
  fetchToken,
  clearAccessToken,
} from "./features/token/tokenSlice";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(clearAccessToken());
  };
  return (
    <>
      <Router>
        <Navbar handleLogOut={handleLogOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<PrivateRoute element={<User />}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/transaction" element={<DetailedTransac />} />
          <Route path="/login-test" element={<TestSignIn />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
