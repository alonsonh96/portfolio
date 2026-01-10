import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import AllProjects from './views/AllProjects'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-projects' element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
