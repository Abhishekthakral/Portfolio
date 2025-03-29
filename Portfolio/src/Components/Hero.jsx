import React from 'react'
import { Link } from 'react-router'
import download from '../assets/download.png'

const Hero = () => {
    return (
        <div className='text-[#ffffff] w-full ml-9 py-10 flex flex-col justify-center lg:ml-70 fontstyle'>
            <p className='text-2xl lg:text-3xl  blur-text'>"Heyy, i am</p>
            <div className=' lg:px-15 w-[70%]'>
                <p className='text-5xl lg:text-7xl font-bold pl-12 m-2 blur-text'>Abhishek</p>
                <p className='text-lg lg:text-3xl   spaceword pl-14 blur-text'>Full Stack Developer"</p>
                <p className='text-xs lg:text-lg font-light itelic spaceword2 m-3 blur-text'>"Passionate full-stack Developer. Specializing in building scalable web applications with modern technologies."</p>
            </div>
            <div className='lg:px-15 my-4 flex justify-center items-center gap-2 lg:gap-5 blur-text'>
                <Link to={''} className='border border-[#D9D9D9] rounded-lg px-6 py-2 text-[#ffffff]'>
                    Contact
                </Link>
                <Link to={'https://drive.google.com/file/d/10hBNCWK6hT_T8dIWXH5jN5hpoRV4DCtC/view?usp=sharing'} className='border bg-[#ffffff] border-[#D9D9D9] rounded-lg py-2 px-6 text-black flex gap-1 items-center'>
                    <img src={download} alt="" className='h-4 w-4' />
                    Resume
                </Link>
            </div>
        </div>
    )
}

export default Hero