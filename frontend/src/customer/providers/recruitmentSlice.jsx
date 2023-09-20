import { createSlice } from "@reduxjs/toolkit";

const recruitmentSlice = createSlice({
  name: "recruitment",
  initialState: {
    visibility: false,
  },
  reducers: {
    visibleRecruitment: (state) => {
      state.visibility = true;
    },
    hiddeRecruitment: (state) => {
      state.visibility = false;
    },
  },
});

export const { visibleRecruitment, hiddeRecruitment } =
  recruitmentSlice.actions;

export default recruitmentSlice.reducer;
