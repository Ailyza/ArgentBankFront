import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const LOGIN_URL = "http://localhost:3001/api/v1/user/login";

export const fetchToken = createAsyncThunk(
  "token/fetchToken",
  async ({ email, password }, {}) => {
    try {
      const response = await axios.post(LOGIN_URL, {
        email: email,
        password: password,
      });
      return response.data;
    } catch (err) {
      throw new Error("email or password are incorrect");
    }
  }
);

const tokenSlice = createSlice({
  name: "token", // nom du morceau
  initialState: { // defini la valeur initiale de l'etat qui est créer 
    accessToken: null, // propriété de l'état qui va prendre la valeur du token
    status: "idle", // idle | loading | succeeded | failed
    error: null, //ce sera le message d'erreur
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchToken.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        const { body } = action.payload;
        state.accessToken = body.token;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message;
      });
  },
});

export const getAccessToken = (state) => state.token.accessToken;
export const getTokenStatus = (state) => state.token.status;
export const getTokenErrorMessage = (state) => state.token.error;

export const { setAccessToken, clearAccessToken } = tokenSlice.actions;

export default tokenSlice.reducer;
