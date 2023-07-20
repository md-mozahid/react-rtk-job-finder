import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddNewJobForm from './pages/AddNewJobForm'
import Home from './pages/Home'

function App() {
  return (
    // <Home />
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add-new-job" element={<AddNewJobForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
