import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getAccessToken,
  getTokenStatus,
  getTokenErrorMessage,
  fetchToken,clearAccessToken
} from "../features/token/tokenSlice";
import {
  getUser,
  getUserStatus,
  getUserErrorMessage,
  fetchUser,
} from "../features/user/userSlice";

const TestSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const user = useSelector(getUser);
  const userStatus = useSelector(getUserStatus);
  const userErrorMessage = useSelector(getUserErrorMessage);

  const accessToken = useSelector(getAccessToken);
  const tokenStatus = useSelector(getTokenStatus);
  const tokenErrorMessage = useSelector(getTokenErrorMessage);

  const dispatch = useDispatch(); // dispatch est une fonction de redux permettant de déclencher la distribution des variables

  const handleLogin = () => {
    // Dispatch the fetchToken action when the login button is clicked
    dispatch(fetchToken({ email, password }));
  };
  const handleUser = () => {
	dispatch(fetchUser({}));
  }
  const handleLogOut = () => {
	dispatch(clearAccessToken())
  }
  useEffect(() => {
    if (tokenStatus === "succeeded") {
      setText(accessToken);
    } else if (tokenStatus === "loading") {
      setText("loading ...");
    } else if (tokenStatus === "failed") {
      setText(tokenErrorMessage);
    } else {
      setText("");
    }
  }, [tokenStatus]);
  useEffect(() => {
    if (userStatus === "succeeded") {
		setUserInfo(JSON.stringify(user));
	  } else if (userStatus === "loading") {
		setUserInfo("loading ...");
	  } else if (userStatus === "failed") {
		setUserInfo(userErrorMessage);
	  } else {
		setUserInfo("");
	  }
  }, [userStatus]);
  return (
    <main>
      <h1>Sign In</h1>
      <div>
        <label for="email">email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Signin</button>
	  <button onClick={handleUser}>Get user</button>
	  <button onClick={handleLogOut}>logout</button>
      <p>{text}</p>
	  <p>{userInfo}</p>
    </main>
  );
};

export default TestSignIn;
