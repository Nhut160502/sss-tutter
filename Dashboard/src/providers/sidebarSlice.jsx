import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    visibility: false,
  },
  reducers: {
    visibleSidebar: (state) => {
      state.visibility = true
    },
    hiddenSidebar: (state) => {
      state.visibility = false
    },
    setSidebar: (state, action) => {
      state.visibility = action.payload
    },
  },
})

export const { visibleSidebar, hiddenSidebar, setSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
