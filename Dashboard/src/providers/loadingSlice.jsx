import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    visibility: false,
  },
  reducers: {
    visibleLoading: (state) => {
      state.visibility = true
    },
    hiddenLoading: (state) => {
      state.visibility = false
    },
  },
})
export const { hiddenLoading, visibleLoading } = loadingSlice.actions
export default loadingSlice.reducer
