import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_USER_URL = "http://localhost:3001/api/v1/user/profile";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({}, { getState }) => {
    try {
      const accessToken = getState().token.accessToken;

      if (!accessToken) {
        throw new Error("your are not authentified");
      }
      const response = await axios.post(GET_USER_URL, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      })
      return response.data
    } catch (err) {
      throw new Error("your are not authentified");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    id: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    updateUser: (state, action) => {},
    clearUser: (state, action) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.userName = null;
      state.id = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
       const { body } = action.payload;
        const { email, firstName, lastName, userName, id } = body;
        state.email = email;
        state.firstName = firstName;
        state.lastName = lastName;
        state.userName = userName;
        state.id = id;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {

        state.status = "failed";
        state.error = action.error?.message;
      });
  },
});

export const getUser = (state) => ({
  email: state.user.email,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  userName: state.user.userName,
  id: state.user.id,
});
export const getUserStatus = (state) => state.user.status;
export const getUserErrorMessage = (state) => state.user.error;

export const { updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
