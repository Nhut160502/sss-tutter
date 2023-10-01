import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false,
  },
  reducers: {
    openModal: (state) => {
      state.open = true
    },
    hiddenModal: (state) => {
      state.open = false
    },
  },
})

export const { openModal, hiddenModal } = modalSlice.actions
export default modalSlice.reducer
