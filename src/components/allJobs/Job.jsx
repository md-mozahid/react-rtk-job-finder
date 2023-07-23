import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editActive, removeJob } from '../../features/jobs/JobsSlice'

const Job = ({ job }) => {
  const { id, title, type, salary, deadline } = job
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEdit = () => {
    dispatch(editActive(job))
    navigate('/add-new-job')
  }

  const handleDelete = () => {
    dispatch(removeJob(id))
  }

  // const color =
  //   type === 'Remote'
  //     ? '#56E5C4'
  //     : type === 'Internship'
  //     ? '#FF5757'
  //     : '#FF8A00'
      
  // color type
  let colorType = null

  if (type === 'Internship')
    colorType = (
      <i className={`fa-solid fa-stop !text-[#FF5757] text-lg mr-1.5`}></i>
    )

  if (type === 'Full Time')
    colorType = (
      <i className={`fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5`}></i>
    )

  if (type === 'Remote')
    colorType = (
      <i className={`fa-solid fa-stop !text-[#56E5C4] text-lg mr-1.5`}></i>
    )

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {colorType}
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="lws-edit btn btn-primary"
            onClick={handleEdit}>
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="lws-delete btn btn-danger "
            onClick={handleDelete}>
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  )
}

export default Job
