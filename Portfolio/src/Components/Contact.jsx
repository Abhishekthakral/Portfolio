import React from 'react'

function Contact() {
  return (
    <div className='text-[#ffffff] p-6 flex flex-col'>
        <p className='text-4xl font-semibold'>Contact Me</p>
        <p className='text-sm'>if you want to Collab or Hire Me</p>
        <div className='flex flex-col mt-4 rounded-lg bg-[#D9D9D91A] justify-center items-center '>
            <form action="" className='flex flex-col mt-4 w-full px-4 lg:w-[40%]'>
                <label htmlFor="" className='text-gray-400 mt-4'>Name*</label>
                <input type="text" placeholder='Your Name' className='bg-[#ffffff] rounded-lg h-10 w-full text-black pl-4'/>
                <label htmlFor="" className='text-gray-400 mt-4'>Email*</label>
                <input type="email" placeholder='Your Email'  className='bg-[#ffffff] rounded-lg h-10 w-full text-black pl-4'/>
                <label htmlFor="" className='text-gray-400 mt-4'>Message*</label>
                <input type="text" placeholder='Any Message'  className='bg-[#ffffff] rounded-lg h-20 w-full text-black pl-4'/>
                <button className='m-4 border border-white rounded-2xl w-fit px-4 py-2 cursor-pointer'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Contact