import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../../features/jobs/JobsSlice'
import Job from './Job'

const JobList = () => {
  const { allJobs, isLoading, isError } = useSelector((state) => state.job)
  const dispatch = useDispatch()
  // filtering
  const { search, sort, type } = useSelector((state) => state.filter)

  // data fetch from server
  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  // filter by search
  const filterBySearch = (j) => {
    if (search.trim().length > 0) {
      return j.title.toLowerCase().includes(search)
    } else {
      return true
    }
  }

  //filter by type
  const filterByType = (j) => {
    if (type !== 'all') {
      return j.type === type
    } else {
      return true
    }
  }

  // filter bu sort
  const sorted = () => {
    switch (sort) {
      case 'Salary (Low to high)':
        return allJobs.slice().sort((a, b) => {
          const salaryA = Number(a.salary)
          const salaryB = Number(b.salary)
          return salaryA - salaryB
        })
      case 'Salary (High to Low)':
        return allJobs.slice().sort((a, b) => {
          const salaryA = Number(a.salary)
          const salaryB = Number(b.salary)
          return salaryB - salaryA
        })
      default:
        return allJobs
    }
  }

  // decide what to render
  let content = null

  if (isLoading) content = <p>Loading...</p>

  if (!isLoading && isError)
    content = <p className="error">There was an error occurred</p>

  if (!isLoading && !isError && allJobs.length === 0) {
    content = <p style={{ color: 'white' }}>No jobs found</p>
  }

  if (!isLoading && !isError && allJobs.length > 0) {
    const sortedJobs = sorted()
    const checkSearch = sortedJobs.filter(filterBySearch).length

    if (checkSearch > 0) {
      content = sortedJobs
        .filter(filterByType)
        .filter(filterBySearch)
        .map((job) => <Job key={job.id} job={job} />)
    } else {
      content = 'No Search Result Found!'
    }
  }

  return <div className="jobs-list">{content}</div>
}

export default JobList
