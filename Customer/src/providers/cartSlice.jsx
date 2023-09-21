import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    visibility: false,
  },
  reducers: {
    visibleCart: (state) => {
      state.visibility = true;
    },
    hideCart: (state) => {
      state.visibility = false;
    },
  },
});

export const { visibleCart, hideCart } = cartSlice.actions;
export default cartSlice.reducer;
