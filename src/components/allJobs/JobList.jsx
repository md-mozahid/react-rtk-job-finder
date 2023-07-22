import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../../features/jobs/JobsSlice'
import Job from './Job'

const JobList = () => {
  const { allJobs, isLoading, isError } = useSelector((state) => state.job)
  const dispatch = useDispatch()
  // filtering
  const filterJobs = useSelector((state) => state.job.filterJobs)
  const allAvailableJobs = useSelector((state) => state.job.allJobs)
  const query = useSelector((state) => state.job.query)

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  // decide what to render
  let content = null

  if (isLoading) content = <p>Loading...</p>

  if (!isLoading && isError)
    content = <p className="error">There was an error occurred</p>

  if (!isLoading && !isError && allJobs.length > 0) {
    content = allJobs
      .filter((job) => {
        if (query === '') {
          return job
        } else if (job.title.tolowerCase().include(query.tolowerCase())) {
          return job
        } else {
        }
      })
      .map((job) => <Job key={job.id} job={job} />)
  }

  if (!isLoading && !isError && allJobs.length === 0) {
    content = <p style={{ color: 'white' }}>No jobs found</p>
  }

  return <div className="jobs-list">{content}</div>
}

export default JobList
