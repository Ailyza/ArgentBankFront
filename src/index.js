// Import React and ReactDOM modules for rendering the application
import React from "react";
import ReactDOM from "react-dom/client";
// Import the main component of the application
import App from "./App/App";
// Import global styles for the application
import "./index.css";
// Import the Provider component from react-redux to provide the Redux store
import { Provider } from "react-redux";
// Import the configuration of the Redux store
import store from "./store/store";
// Create a root for ReactDOM rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the application within the root using the Provider to inject the Redux store
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
