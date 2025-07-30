import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../../assets/assets'

const Navber = () => {
  return (
    <nav className='bg-white p-4 sticky top-0'>
        <div className="flex container mx-auto justify-between items-center">

        {/* logo */}
        <div >
            <Link to={'/'} className="flex gap-2 items-center">
            <img src={assets.logo} alt="" />
            <p className='hidden md:block text-2xl'>Blog <span className='font-bold text-2xl'> ASY </span></p>
            </Link>
        </div>

        {/* ================================== */}
        {/* menu */}
        <ul className="hidden sm:flex gap-5 text-xl font-normal justify-center items-center text-gray-700">
            <Link to='/' className="cursor-pointer hover:text-orange-500 duration-300">Home</Link>
            <Link to='/about' className="cursor-pointer hover:text-orange-500 duration-300">About</Link>
            <Link to='/blog' className="cursor-pointer hover:text-orange-500 duration-300">Blogs</Link>
            <Link to='/contact' className="cursor-pointer hover:text-orange-500 duration-300">Contact</Link>
        </ul>


        {/* ======================================== */}


        <Link className='bg-orange-400 text-white px-8 py-2 hover:bg-amber-700 duration-300 rounded-full cursor-pointer'>
        Submit
        </Link>

        </div>
    </nav>
  )
}

export default Navber