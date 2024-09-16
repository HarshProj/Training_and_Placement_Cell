import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import React from 'react'
import Image from 'next/image';
import logo from '../Assets/logo.png';
import '../CSS/navbar.css'
export const Navbar = () => {
  return (
    <div className='w-full h-[4.5rem]  flex fixed backdrop-blur-sm z-20 shadow-2xl '>
        <div className="w-[4rem]"></div>
        <div className="relative h-full w-full flex justify-between">
            <div className="gap-6  flex items-center">

        <Image className=" h-12 w-16 bg-cover" src={logo} alt="KNIT logo"  ></Image>
        <div className=" h-full w-80  flex items-center "><p className="font-">Training & Placement Office
        Kamla Nehru Institute of Technology,Sultanpur</p></div>
            </div>
            <ul className='flex  mr-[4rem] items-center'>
            
                <li className='hovermenu h-full flex items-center relative '>
                    <div className="flex px-3 cursor-pointer py-[5px] rounded   items-center  hover:bg-white hover:transition-all duration-300">Home<CaretDown style={{marginTop:"3px", marginLeft:"3px"}}size={17}/>
                    </div>
                    <ul className="absolute  w-[200px]  subhovermenu bg-white top-[4.5rem] left-0">
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">About Us</li>
                    </ul>
                </li>
                <li className='hovermenu h-full flex items-center relative '>
                    <div className="flex px-3 cursor-pointer py-[5px] rounded   items-center  hover:bg-white hover:transition-all duration-300">Academics<CaretDown style={{marginTop:"3px", marginLeft:"3px"}}size={17}/>
                    </div>
                    <ul className="absolute  w-[200px]  subhovermenu bg-white top-[4.5rem] left-0">
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Programmes</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Course Highlights</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Grade System</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Addmission Procedure</li>
                    </ul>
                </li>
                <li className='hovermenu h-full flex items-center relative '>
                    <div className="flex px-3 cursor-pointer py-[5px] rounded   items-center  hover:bg-white hover:transition-all duration-300">Students<CaretDown style={{marginTop:"3px", marginLeft:"3px"}}size={17}/>
                    </div>
                    <ul className="absolute  w-[200px]  subhovermenu bg-white top-[4.5rem] left-0">
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Student Corner</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Acheivement</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Registration Procedure</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Career Development</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Activity</li>
                    </ul>
                </li>
                <li className='hovermenu h-full flex items-center relative '>
                    <div className="flex px-3 cursor-pointer py-[5px] rounded   items-center  hover:bg-white hover:transition-all duration-300">Recruiter<CaretDown style={{marginTop:"3px", marginLeft:"3px"}}size={17}/>
                    </div>
                    <ul className="absolute  w-[200px]  subhovermenu bg-white top-[4.5rem] left-0">
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Why Recruiter?</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Brochure</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Placement Procedure</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Past Recruiters</li>
                    </ul>
                </li>
                <li className='hovermenu h-full flex items-center relative '>
                    <div className="flex px-3 cursor-pointer py-[5px] rounded   items-center  hover:bg-white hover:transition-all duration-300">Forms<CaretDown style={{marginTop:"3px", marginLeft:"3px"}}size={17}/>
                    </div>
                    <ul className="absolute  w-[200px]  subhovermenu bg-white top-[4.5rem] left-0">
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">JAF</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">IAF</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Industry Day</li>
                    </ul>
                </li>
                <li className='hovermenu h-full flex items-center relative '>
                    <div className="flex px-3 cursor-pointer py-[5px] rounded   items-center  hover:bg-white hover:transition-all duration-300">Training & placement office team<CaretDown style={{marginTop:"3px", marginLeft:"3px"}}size={17}/>
                    </div>
                    <ul className="absolute  w-[200px]  subhovermenu bg-white top-[4.5rem] left-0">
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Contact Us</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Placement Team</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Carrer Guidance Cell</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Members</li>
                    </ul>
                </li>
                <li className='hovermenu h-full flex items-center relative '>
                    <div className="flex px-3 cursor-pointer py-[5px] rounded   items-center  hover:bg-white hover:transition-all duration-300">Login<CaretDown style={{marginTop:"3px", marginLeft:"3px"}}size={17}/>
                    </div>
                    <ul className="absolute  w-[200px]  subhovermenu bg-white top-[4.5rem] left-0">
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Recruiter Login</li>
                        <li className="w-full h-[45px]  pl-3 pt-2 hover:bg-slate-300 hover:text-blue-600">Student Login</li>
                    </ul>
                </li>
         
            </ul>
        </div>
        </div>
  )
}
