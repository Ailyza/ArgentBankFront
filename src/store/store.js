// store.js
import { 
  configureStore, 
  combineReducers,
  getDefaultMiddleware,
 } from "@reduxjs/toolkit";

// Import your userSlice to use as a reducer
import userReducer from "./userSlice";

// Import the "thunk" middleware for handling asynchronous actions
import thunk from "redux-thunk";

// Configure the Redux store
const store = configureStore({
  reducer: userReducer, // Use your userSlice as the reducer
  middleware: [...getDefaultMiddleware(), thunk], // Include middleware for handling async actions
  devTools: true, // Enable Redux DevTools for debugging
});

export default store;
