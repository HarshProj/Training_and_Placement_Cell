import React from 'react'

export const About = () => {
  return (
    <div className="h-[100vh] pt-12 ">
        <div className="  w-full  pt-4 relative">
            <div className="w-full bg-orange-300 flex justify-center   h-[130px]">
                <div className=" bg-white w-[400px] h-[160px] py-1 px-5 shadow-lg rounded-md top-0 absolute">
                    <h4 className='text-xl'>Brochure</h4>
                    <p>Training and Placement</p>
                    <p className='text-gray-400'>2024-2025</p>
                <div className="cursor-pointer hover:text-blue-400 inline bottom-12 absolute">Open</div>
                </div>
            </div>
        </div>
        <div className="w-full  flex flex-col gap-5 items-center mt-20">
            <div className="mb-5"><h1 className='text-5xl font-bold'>About Us</h1>
            </div>
            <div className='w-[60%] h-[1px] bg-black'/>
            <p className='w-[80%] mt-4 leading-loose text-sm'>We, the Training and Placement Office aim to create an encouraging atmosphere for students by providing them ample prospects of building competencies in sync with their dream careers, thereby ensuring a smooth landing into the professional world. With innovative training methods, skill assessment programs, and a continuous assessment of student interests, Training and Placement Office provides services and resources that assist students in competence development, career planning, and employment search. Training and Placement Office has a dedicated team of staff & students volunteers to assist the talent acqusition team for the smooth conduct of campus recruitment process. <a className='text-blue-400 cursor-pointer hover:underline'>Read More</a><br />

We extend a cordial invitation to you to participate in Campus Placement Drive for the season 2024-25 and hope that you will find the best talent you were looking for.</p>
            
        </div>
    </div>
  )
}
