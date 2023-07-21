import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getJobs } from './JobsAPI'

const initialState = {
  allJobs: [],
  isLoading: false,
  isError: false,
  error: '',
}

// create thunk
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const jobs = await getJobs()
  return jobs
})

// create slice
const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.allJobs = action.payload
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
        state.jobs = []
      })
  },
})

export default jobSlice.reducer
