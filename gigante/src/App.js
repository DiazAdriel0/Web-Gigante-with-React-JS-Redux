import {Routes, Route} from 'react-router-dom'
import Nav from './components/nav/nav'
import Home from './views/home/home'
import AboutUs from './views/about us/aboutUs'


function App () {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
      </Routes>
    </div>
  )
}

export default App