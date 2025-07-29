import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/pages/Home'
import Navber from './component/Navber/Navber'
import About from './component/pages/About'
import Blogs from './component/pages/Blogs'
import Contact from './component/pages/Contact'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blogs/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
    </div>
  )
}

export default App