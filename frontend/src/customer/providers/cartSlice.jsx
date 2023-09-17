import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    visibility: false,
  },
  reducers: {
    visibilityCart: (state) => {
      state.visibility = true;
    },
    hideCart: (state) => {
      state.visibility = false;
    },
  },
});

export const { visibilityCart, hideCart } = cartSlice.actions;
export default cartSlice.reducer;
