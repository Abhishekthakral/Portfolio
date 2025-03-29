import React from 'react'
import logo from '../assets/logo.png'
import { NavLink,Link } from 'react-router'
import download from '../assets/download.png'

const Navbar = () => {
  return (
    <div className='max-w-screen z-50 bg-[#d9d9d91A] px-6 py-2 border  rounded-lg  flex justify-between items-center'>
        <div className='h-10 w-10 '>
            <img src={logo} alt="" className='h-fit w-fit blur-none'/>
        </div>
        <div className='lg:flex gap-8 text-[#FFFFFFAD] text-lg pl-15 hidden lg:justify-center'>
          <NavLink to={''} className='hover:text-[#FFFFFF] cursor-pointer'>
            About
          </NavLink>
          <NavLink to={'#skills'} className='hover:text-[#FFFFFF] cursor-pointer'>
           Skills
          </NavLink>
          <NavLink to={'#projects'} className='hover:text-[#FFFFFF] cursor-pointer'>
            My Work
          </NavLink>
        </div>
        <div className='flex gap-6'>
          <Link to={''} className='border border-[#D9D9D9] rounded-lg p-1 px-4 text-[#ffffff] hidden lg:flex cursor-pointer'>
          Contact
          </Link>
          <Link to={'https://drive.google.com/file/d/10hBNCWK6hT_T8dIWXH5jN5hpoRV4DCtC/view?usp=sharing'} className='border bg-[#ffffff] border-[#D9D9D9] rounded-lg p-1 px-4 text-black flex gap-1 items-center cursor-pointer'>
          <img src={download} alt="" className='h-4 w-4' />
          Resume
          </Link>
        </div>
    </div>
  )
}

export default Navbar