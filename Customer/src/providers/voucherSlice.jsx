import { createSlice } from "@reduxjs/toolkit";

const voucherSlice = createSlice({
  name: "voucher",
  initialState: {
    visibility: false,
    data: null,
  },
  reducers: {
    visibleVoucher: (state) => {
      state.visibility = true;
    },
    hideVoucher: (state) => {
      state.visibility = false;
    },
    setDataVoucher: (state, action) => {
      state.data = action.payload;
    },
    removeDataVoucher: (state, action) => {
      state.data = null;
    },
  },
});

export const {
  visibleVoucher,
  hideVoucher,
  setDataVoucher,
  removeDataVoucher,
} = voucherSlice.actions;
export default voucherSlice.reducer;
