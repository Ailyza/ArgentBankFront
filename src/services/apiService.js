// apiService.js
// Get the API URL from the environment variables
const API_URL =
  process.env.REACT_APP_API_PATH || "http://localhost:3001/api/v1"; //eslint-disable-line no-undef

// Function to make a POST request to the login endpoint
export const loginUser = async (email, password) => {
  const requestUrl = `${API_URL}/user/login`;
  const requestHeaders = {
    "Content-Type": "application/json",
  };
  const requestBody = JSON.stringify({
    email,
    password,
  });

  try {
    const response = await fetch(requestUrl, {
      method: "POST",
      body: requestBody,
      headers: requestHeaders,
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.body.token;
      console.log(token);
      localStorage.setItem("token", "token ok");
      return data;
    } else {
      throw new Error("Failed to login");
    }
  } catch (error) {
    if (error.message === "Failed to fetch") {
      throw Error("A network error occured, Please try later");
    }
    throw error;
  }
};

// Function to fetch user profile after login
export const fetchUserProfile = async (token) => {
  const requestUrl = `${API_URL}/user/profile`;
  const requestHeaders = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  //eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(requestUrl, {
      method: "POST",
      headers: requestHeaders,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    if (response.status === 401) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    } else {
      console.log(response);
      throw new Error("Failed to fetch user profile");
    }
  } catch (error) {
    throw error;
  }
};

// Function to update the user's username
export const updateProfile = async (token, newUserName) => {
  const requestUrl = `${API_URL}/user/profile`;
  const requestHeaders = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const requestBody = JSON.stringify({
    userName: newUserName,
  });

  //eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(requestUrl, {
      method: "PUT",
      headers: requestHeaders,
      body: requestBody,
    });

    if (response.ok) {
      const data = await response.json();
      const userProfile = data.body;
      console.log(userProfile);
      return data;
    } else {
      throw new Error("Failed to update userName");
    }
  } catch (error) {
    throw error;
  }
};
