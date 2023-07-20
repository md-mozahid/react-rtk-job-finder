import AllJobs from '../components/allJobs/AllJobs'
import SideBar from '../components/sidebar/SideBar'

const Home = () => {
  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <AllJobs />
      <SideBar />
    </div>
  )
}

export default Home
