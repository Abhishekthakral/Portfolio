import React from 'react'
import logo from '../assets/logo.png'
import { NavLink,Link } from 'react-router'
import download from '../assets/download.png'

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='max-w-screen  bg-[#d9d9d91A] px-6 py-2 border  rounded-lg  flex justify-between items-center' style={{zIndex:'20'}}>
        <div className='h-10 w-10 '>
            <img src={logo} alt="" className='h-fit w-fit blur-none'/>
        </div>
        <div className='lg:flex gap-8 text-[#FFFFFFAD] text-lg pl-15 hidden lg:justify-center'>
          <NavLink to={'#about'} className='hover:text-[#FFFFFF] cursor-pointer' onClick={() => scrollToSection('about')}>
            About
          </NavLink>
          <NavLink to={'#skills'} className='hover:text-[#FFFFFF] cursor-pointer' onClick={() => scrollToSection('skills')}>
           Skills
          </NavLink>
          <NavLink to={'#projects'} className='hover:text-[#FFFFFF] cursor-pointer' onClick={() => scrollToSection('projects')}>
            My Work
          </NavLink>
        </div>
        <div className='flex gap-6'>
          <Link to={'#Contactme'} className='border border-[#D9D9D9] rounded-lg p-1 px-4 text-[#ffffff] hidden lg:flex cursor-pointer' onClick={() => scrollToSection('Contactme')}>
          Contact
          </Link>
          <Link to={'https://drive.google.com/file/d/1BnqfgJ74S6mJbKRewxGXXmAet9GSVvrB/view?usp=drivesdk'} className='border bg-[#ffffff] border-[#D9D9D9] rounded-lg p-1 px-4 text-black flex gap-1 items-center cursor-pointer'>
          <img src={download} alt="" className='h-4 w-4' />
          Resume
          </Link>
        </div>
    </div>
  )
}

export default Navbar
