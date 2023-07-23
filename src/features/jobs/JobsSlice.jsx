import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addJob, deleteJob, editJob, getJobs } from './JobsAPI'

const initialState = {
  allJobs: [],
  isLoading: false,
  isError: false,
  error: '',
  editing: {},
}

// create thunk
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const jobs = await getJobs()
  return jobs
})

export const createJob = createAsyncThunk('jobs/createJobs', async (data) => {
  const job = await addJob(data)
  return job
})

export const changeJob = createAsyncThunk(
  'jobs/changeJobs',
  async ({ id, data }) => {
    const job = await editJob(id, data)
    return job
  }
)

export const removeJob = createAsyncThunk('jobs/removeJobs', async (id) => {
  const job = await deleteJob(id)
  return job
})

// create slice
const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload
    },
    editInActive: (state) => {
      state.editing = {}
    }
  },

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

      .addCase(createJob.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.allJobs.push(action.payload)
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })

      .addCase(changeJob.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false

        const indexToUpdate = state.allJobs.findIndex(
          (item) => item.id === action.payload.id
        )
        state.allJobs[indexToUpdate] = action.payload
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })

      .addCase(removeJob.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.allJobs = state.allJobs.filter(
          (item) => item.id !== action.meta.arg
        )
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default jobSlice.reducer
export const {
  editActive,
  editInActive,
  allAvailableJobs,
  internship,
  remote,
  fullTime,
  sortJob,
  searchQuery,
} = jobSlice.actions
