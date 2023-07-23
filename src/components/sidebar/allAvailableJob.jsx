import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByType } from '../../features/filter/filterSlice'

const AllAvailableJob = () => {
  const [type, setType] = useState('all')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterByType(type))
  }, [dispatch, type])

  return (
    <li>
      <Link
        to=""
        className="main-menu menu-active"
        id="lws-alljobs-menu"
        onClick={() => setType('all')}>
        <i className="fa-solid fa-briefcase"></i>
        <span> All Available Jobs</span>
      </Link>
      <ul className="space-y-6 lg:space-y-2 ">
        <li>
          <Link
            className="sub-menu"
            to="/"
            id="lws-internship-menu"
            onClick={() => setType('Internship')}>
            <i className="fa-solid fa-stop !text-[#FF5757]"></i> {''}
            Internship
          </Link>
        </li>
        <li>
          <Link
            className="sub-menu"
            to="/"
            id="lws-fulltime-menu"
            onClick={() => setType('Remote')}>
            <i className="fa-solid fa-stop !text-[#FF8A00]"></i> {''}
            Full Time
          </Link>
        </li>
        <li>
          <Link
            className="sub-menu"
            to="/"
            id="lws-remote-menu"
            onClick={() => setType('Full Time')}>
            <i className="fa-solid fa-stop !text-[#56E5C4]"></i> {''}
            Remote
          </Link>
        </li>
      </ul>
    </li>
  )
}

export default AllAvailableJob
