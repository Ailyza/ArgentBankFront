import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import tokenSlice from "../features/token/tokenSlice";
import userSlice from "../features/user/userSlice";



const store = configureStore({
  reducer: { token: tokenSlice, user: userSlice },
  devTools: true, // Enable Redux DevTools in non-production environment
});

export default store;
