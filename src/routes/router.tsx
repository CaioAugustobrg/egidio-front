import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Login from '../pages/login'
import Management from '../pages/management'
import Home from '../pages/home'
import Search from '../pages/search'
import CreateTruck from '../pages/createTruck'
import CreateDriver from '../pages/createDriver'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/management' element={<Management />} />
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/create-truck' element={<CreateTruck />} />
        <Route path='/create-driver' element={<CreateDriver />} />

        

        
      </Routes>
    </Router>
  )
}
export default AppRouter
