import session from "../../lib/data/session.json";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setSnackbar } from "./snackBar";

const sessionSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: true,
    region:{},
    user: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSession.fulfilled, (state, action) => {
        state.region = action.payload.region;
        state.user = action.payload.user;
        state.isFetching = false;
      })
      .addCase(fetchSession.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(fetchSession.rejected, (state, action) => {
        state.isFetching = false;
      });
  },
});

export const fetchSession = createAsyncThunk(
  "user/fetchSession",
  async (props, { dispatch }) => {
    try {
      // Simulate an API request with a setTimeout wrapped in a Promise
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(session);
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
          message: "Error fetching session data",
        })
      );
      return {};
    }
  }
);

export default sessionSlice.reducer;
