import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: 'all',
  search: '',
  sort: 'default',
}

// create slice
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterBySearch: (state, action) => {
      state.search = action.payload
    },
    filterByType: (state, action) => {
      state.type = action.payload
    },
    filterBySort: (state, action) => {
      state.sort = action.payload
    },
  },
})
export default filterSlice.reducer
export const { filterBySearch, filterByType, filterBySort } =
  filterSlice.actions
