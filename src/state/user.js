import user from "../../lib/data/user.json";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setSnackbar } from "./snackBar";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: true,
    isLoggedIn: false,
    data: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        if (Object.keys(state.data).length) {
          state.isLoggedIn = true;
        } else {
          state.isLoggedIn = false;
        }
        state.isFetching = false;
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isFetching = false;
      });
  },
});

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (props, { dispatch }) => {
    try {
      // Simulate an API request with a setTimeout wrapped in a Promise
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(user);
            clearTimeout(fetchingTimeOut);
          }, 2000);
        });
      };

      // Await the simulated API request
      const data = await simulateApiRequest();
      return data;
    } catch (error) {
      dispatch(
        setSnackbar({
          isOpen: true,
          type: "ERROR",
          message: "Error fetching user data",
        })
      );
      return {};
    }
  }
);

export default userSlice.reducer;
