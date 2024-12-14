import React from 'react'

import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
export const ContactUs = () => {
  return (
    <div className="min-h-[400px] w-full  flex items-center justify-center">
    <div className=" grid grid-cols-5 w-[90%] max-md:w-[80%] min-h-[280px] max-md:grid-cols-1 max-md:gap-10">
        <div className="col-span-2 max-md:col-span-1 flex flex-col gap-4">
            <h3 className='text-3xl font-bold '>TPO KNIT</h3>
            <div className="flex flex-col gap-1">

            <p className='text-gray-400 cursor-pointer hover:underline'> Kamla Nehru Institute of Technology,Sultanpur </p>
            <p className='text-gray-400 cursor-pointer hover:underline'> <b>Phone: </b>+91 123456789</p>
            <p className='text-gray-400 cursor-pointer hover:underline'> <b>Phone: </b>+91 123456789</p>
            <div className="flex text-gray-400 gap-1 ">
            <b>Handles: </b>
            <a href=""><LinkedinLogo size={30} weight="fill"  /></a>
            <a href=""><InstagramLogo size={30} weight="fill"  /></a>
            <a href=""><GithubLogo size={30} weight="fill"  /> </a>
             
            </div>
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
  )
}
