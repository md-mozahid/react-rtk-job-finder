import { Link } from 'react-router-dom'

const AddNewJob = () => {
  return (
    <li>
      <Link to="add-new-job" className="main-menu" id="lws-addJob-menu">
        <i className="fa-solid fa-file-circle-plus"></i> {''}
        <span>Add New Job</span>
      </Link>
    </li>
  )
}

export default AddNewJob
