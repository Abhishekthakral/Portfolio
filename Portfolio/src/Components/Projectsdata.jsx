import React from 'react'

function Projectsdata({source,title,description,reverse,features}) {
    return (
        <div className={`lg:flex gap-5 mx-2 mt-10 ${reverse ? 'flex-row-reverse':'flex-row'}`}>
            <div className='w-full lg:max-w-[50%] lg:min-w-[50%] h-52 lg:h-72 rounded-xl overflow-hidden'>
                <img src={source} alt="" className='w-fit h-full relative' />
            </div>
            <div className='lg:ml-4 flex flex-col gap-2 mt-3'>
                <p className=' font-semibold text-4xl mb-1 flex items-center justify-center'>{title}</p>
               {description}
                <span className='font-bold text-lg underline'>Tech Stack*:
                </span> React.js, Node.js, Express.js, MongoDB, JWT Authentication, AWS (S3), WebSocket  
                <span className='font-bold text-lg underline'>*Key Features:*</span>
                {features}
            </div>
        </div>
    )
}

export default Projectsdata