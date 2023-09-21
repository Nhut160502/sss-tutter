import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    visibility: false,
  },
  reducers: {
    visibleOverlay: (state) => {
      state.visibility = true;
    },
    hideOverlay: (state) => {
      state.visibility = false;
    },
  },
});

export const { visibleOverlay, hideOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
