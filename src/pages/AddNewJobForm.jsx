import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeJob, createJob } from '../features/jobs/JobsSlice'

const AddNewJobForm = () => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [salary, setSalary] = useState('')
  const [deadline, setDeadline] = useState('')

  // for editing
  const [editMode, setEditMode] = useState(false)
  const { isLoading, isError } = useSelector((state) => state.job)
  const { editing } = useSelector((state) => state.job)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const reset = () => {
    setTitle('')
    setType('')
    setSalary('')
    setDeadline('')
  }

  const handleCreate = (e) => {
    e.preventDefault()
    dispatch(
      createJob({
        title,
        type,
        salary: Number(salary),
        deadline,
      })
    )
    reset()
    navigate('/')
  }

  // editing
  useEffect(() => {
    const { id, title, type, deadline } = editing || {}

    if (id) {
      setEditMode(true)
      setTitle(title)
      setType(type)
      setSalary(salary)
      setDeadline(deadline)
    } else {
      setEditMode(false)
      reset()
    }
  }, [editing])

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(
      changeJob({
        id: editing?.id,
        data: {
          title: title,
          type: type,
          salary: salary,
          deadline: deadline,
        },
      })
    )
    setEditMode(false)
    reset()
    navigate('/')
  }

  // cancel edit mode
  const cancelEditMode = () => {
    reset()
    setEditMode(false)
  }

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

        <div className="max-w-3xl mx-auto">
          <form
            className="space-y-6"
            onSubmit={editMode ? handleUpdate : handleCreate}>
            <div className="fieldContainer">
              <label className="text-sm font-medium text-slate-300">
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
                <option value="" hidden>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label>Job Type</label>
              <select
                id="lws-JobType"
                name="type"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}>
                <option value="" hidden>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label>Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="salary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label>Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit">
                {editMode ? 'Update' : 'Submit'}
              </button>
            </div>
            {!isLoading && isError && (
              <p className="error">There was an error occurred</p>
            )}

            {editMode && (
              <button
                className="cursor-pointer btn btn-primary w-fit"
                onClick={cancelEditMode}>
                Cancel Editing
              </button>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}

export default AddNewJobForm
