import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from '../features/jobs/JobsSlice'

export const store = configureStore({
  reducer: {
    job: jobsReducer,
  },
})
