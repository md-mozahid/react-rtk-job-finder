import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../../features/jobs/JobsSlice'
import Job from './Job'

const JobList = () => {
  const { allJobs, isLoading, isError, error } = useSelector((state) => state.job)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  // decide what to render
  let content = null

  if (isLoading) content = <p>Loading...</p>

  if (!isLoading && isError)
    content = <p className="error">There was an error occurred</p>

  if (!isLoading && !isError && allJobs.length > 0) {
    content = allJobs.map((job) => <Job key={job.id} job={job} />)
  }

  if (!isLoading && !isError && allJobs.length === 0) {
    content = <p>No jobs found</p>
  }

  return <div className="jobs-list">{content}</div>
}

export default JobList
