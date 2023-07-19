// import { BrowserRouter, Routes } from 'react-router-dom'
import AllJobs from './components/allJobs/allJobs'
import SideBar from './components/sidebar/SideBar'
import Layouts from './layouts/Layouts'

function App() {
  return (
    <>
      <Layouts>
        <SideBar />
        <AllJobs />
      </Layouts>
    </>
  )
}

export default App
