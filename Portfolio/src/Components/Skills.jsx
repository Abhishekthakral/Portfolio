import React from 'react'


function Skills() {
  return (
    <div className='text-[#ffffff] p-6 flex flex-col gap-6'>
        <p className='text-4xl font-semibold'>Skills</p>
        <div>
        <div >
        <p className='text-xl ml-1 text-gray-400'>Languages*</p>
        <p className='font-light mt-3'>JavaScript , Java , C++ , Python , SQL</p>
        </div>
        <hr className='mt-2'/>
     
        </div>
        <div>
        <p className='text-2xl ml-1  text-gray-400'>FrameWorks*</p>
        <p className='font-light mt-3'>React.js , Express , NodeJS , Tailwind CSS , Bootstrap , Redux , MaterialUI , React-Bits</p>
        </div>
        <hr className='mt-2'/>
        <div>
        <p className='text-2xl ml-1 text-gray-400'>Database*</p>
        <p className='font-light mt-3'>MongoDB , MySQL , PostgreSQL</p>
        </div>
        <hr className='mt-2'/>
        <div>
        <p className='text-2xl ml-1 text-gray-400'>Version Control & Tools*</p>
        <p className='font-light mt-3'>Git , GitHub , PostMan , RestFulApi's</p>
        </div>  
    </div>
  )
}

export default Skills