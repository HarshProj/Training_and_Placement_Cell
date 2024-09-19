import React from 'react'
import Image from 'next/image';
import logo from '../Assets/R.K.Upadhyay.png';
export const About = () => {
  return (
    <div className="min-h-[100vh] max-h-full pt-12 ">
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
            <div className='w-[60%] h-[1px] bg-black '/>
            {/* <div className="w-[100%] flex items-center flex-col "> */}

            <p className='w-[80%] mt-2 leading-loose text-sm shadow-md p-5 rounded-md'>We, the Training and Placement Office aim to create an encouraging atmosphere for students by providing them ample prospects of building competencies in sync with their dream careers, thereby ensuring a smooth landing into the professional world. With innovative training methods, skill assessment programs, and a continuous assessment of student interests, Training and Placement Office provides services and resources that assist students in competence development, career planning, and employment search. Training and Placement Office has a dedicated team of staff & students volunteers to assist the talent acqusition team for the smooth conduct of campus recruitment process. <a className='text-blue-400 cursor-pointer hover:underline'>Read More</a><br />

We extend a cordial invitation to you to participate in Campus Placement Drive for the season 2024-25 and hope that you will find the best talent you were looking for.</p>
            
            {/* </div> */}
        </div>
    <div className="flex justify-center items-center h-[600px]">
            <div className="shadow-lg w-[280px] h-[400px] flex flex-col items-center ">
                <div className="h-[70%] w-full flex justify-center items-center">
                    <div className="border rounded-full w-[80%] h-[80%]">
                    
<Image className=" h-full w-full bg-cover rounded-full" src={logo} alt="KNIT logo"  ></Image>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-2xl font-bold text-center'>Prof. R.K.Upadhyay</h2>
                    <p className='text-gray-400 text-xl text-center'>Director</p>
                </div>

            </div>
    </div>
            <div className="w-full  flex flex-col gap-5 items-center mt-10 mb-8">
            <div className="mb-2"><h1 className='text-3xl font-bold'>Past Recruiters</h1>
            </div>
            <div className='w-[60%] h-[1px] bg-black '/>
            <div className="w-[80%] h-[200px] border"></div>
            </div>

            <hr />
            <div className="h-[400px] w-full flex items-center justify-center">
                <div className=" grid grid-cols-5 w-[90%] h-[280px] ">
                    <div className="col-span-2 flex flex-col gap-4">
                        <h3 className='text-3xl font-bold '>TPO KNIT</h3>
                        <div className="flex flex-col gap-1">

                        <p className='text-gray-400 cursor-pointer hover:underline'> Kamla Nehru Institute of Technology,Sultanpur </p>
                        <p className='text-gray-400 cursor-pointer hover:underline'> <b>Phone: </b>+91 123456789</p>
                        <p className='text-gray-400 cursor-pointer hover:underline'> <b>Phone: </b>+91 123456789</p>
                        <p className='text-gray-400  '> <b>Handles: </b>X Y Z</p>
                        </div>
                        <p className='cursor-pointer rounded-3xl bg-gray-300 py-1 px-2 pl-4 w-[200px]'><b>Email:</b>xyz@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className=''>Downloads</h3>
                        <p className='text-gray-400 cursor-pointer hover:underline'>JAF</p>
                            
                        <p className='text-gray-400 cursor-pointer hover:underline'>IAF</p>
                        <p className='text-gray-400 cursor-pointer hover:underline'>Brochure</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className=''>Quick Links</h3>
                        <p className='text-gray-400 cursor-pointer hover:underline'>Placement Registriation link</p>
                            
                        <p className='text-gray-400 cursor-pointer hover:underline'>Placement Statistics</p>
                        <p className='text-gray-400 cursor-pointer hover:underline'>Meet Our Team</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className=''>External Links</h3>
                        <p className='text-gray-400 cursor-pointer hover:underline'>KNIT Sultanpur</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
