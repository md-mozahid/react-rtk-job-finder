import AllAvailableJob from './AllAvailableJob'
import AddNewJob from './addNewJob'

const SideBar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <AllAvailableJob />
          <AddNewJob />
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
