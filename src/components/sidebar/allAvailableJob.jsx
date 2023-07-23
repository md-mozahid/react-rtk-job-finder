import { useDispatch } from 'react-redux'
import {
  allAvailableJobs,
  fullTime,
  internship,
  remote,
} from '../../features/jobs/JobsSlice'

const AllAvailableJob = () => {
  const dispatch = useDispatch()

  const handleAllJobs = () => {
    dispatch(allAvailableJobs())
  }

  const handleInternship = () => {
    dispatch(internship('Internship'))
  }
  const handleRemote = () => {
    dispatch(remote('Remote'))
  }
  const handleFullTime = () => {
    dispatch(fullTime('Full Time'))
  }

  return (
    <li>
      <a href="/jobs" className="main-menu menu-active" id="lws-alljobs-menu">
        <i className="fa-solid fa-briefcase"></i>
        <span onClick={handleAllJobs}> All Available Jobs</span>
      </a>
      <ul className="space-y-6 lg:space-y-2 ">
        <li>
          <a
            className="sub-menu"
            href="/jobs/internship"
            id="lws-internship-menu"
            onClick={handleInternship}>
            <i className="fa-solid fa-stop !text-[#FF5757]"></i> {''}
            Internship
          </a>
        </li>
        <li>
          <a
            className="sub-menu"
            href="/jobs/fulltime"
            id="lws-fulltime-menu"
            onClick={handleRemote}>
            <i className="fa-solid fa-stop !text-[#FF8A00]"></i> {''}
            Full Time
          </a>
        </li>
        <li>
          <a
            className="sub-menu"
            href="/jobs/remote"
            id="lws-remote-menu"
            onClick={handleFullTime}>
            <i className="fa-solid fa-stop !text-[#56E5C4]"></i> {''}
            Remote
          </a>
        </li>
      </ul>
    </li>
  )
}

export default AllAvailableJob
