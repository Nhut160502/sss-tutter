import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    visibility: false,
  },
  reducers: {
    visibilityOverlay: (state) => {
      state.visibility = true;
    },
    hideOverlay: (state) => {
      state.visibility = false;
    },
  },
});

export const { visibilityOverlay, hideOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
