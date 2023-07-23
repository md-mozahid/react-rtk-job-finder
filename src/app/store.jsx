import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/filter/filterSlice'
import jobsReducer from '../features/jobs/JobsSlice'

export const store = configureStore({
  reducer: {
    job: jobsReducer,
    filter: filterReducer,
  },
})
