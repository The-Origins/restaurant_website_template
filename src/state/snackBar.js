import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    message: "",
    type: "",
    isOpen: false,
  },
  reducers: {
    setSnackbar: (state, action) => {
      state.message = action.payload.message;
      state.isOpen = action.payload.isOpen;
      state.type = action.payload.type || "info";
    },
  },
});

export const { setSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
