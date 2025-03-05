'use client';
import { CaretDown, List, X } from "@phosphor-icons/react";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../Assets/logo.png';
import '../CSS/navbar.css';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    
    const menuItems = [
        { label: "Home", subMenu: [{ label: "About Us", link: "/" }] },
        { label: "Academics", subMenu: [{ label: "Programmes", link: "/" }, { label: "Course Highlights", link: "/" }, { label: "Grade System", link: "/" }, { label: "Admission Procedure", link: "/" }] },
        { label: "Students", subMenu: [{ label: "Student Corner", link: "/" }, { label: "Achievement", link: "/" }, { label: "Registration Procedure", link: "/" }, { label: "Career Development", link: "/" }, { label: "Activity", link: "/" }] },
        { label: "Recruiter", subMenu: [{ label: "Why Recruiter?", link: "/" }, { label: "Brochure", link: "/" }, { label: "Placement Procedure", link: "/" }, { label: "Past Recruiters", link: "/past_recruiters" }] },
        { label: "Forms", subMenu: [{ label: "JAF", link: "/" }, { label: "IAF", link: "/" }, { label: "Industry Day", link: "/" }] },
        { label: "Training & Placement Team", subMenu: [{ label: "Contact Us", link: "/contact-us" }, { label: "Placement Team", link: "/" }, { label: "Career Guidance Cell", link: "/" }, { label: "Members", link: "/" }] },
        { label: "Login", subMenu: [{ label: "Recruiter Login", link: "/" }, { label: "Student Login", link: "/" }] },
    ];

    return (
        <nav className="w-full h-[4.5rem] max-xl:bg-white  fixed backdrop-blur-sm z-20 shadow-lg flex items-center px-6 ">
            {/* Logo and Toggle Button */}
            <div className="flex items-center w-full">
                <Image className="h-12 w-16" src={logo} alt="KNIT logo" />
                <p className="ml-4 font-semibold">
                    Training & Placement Office, Kamla Nehru Institute of Technology
                </p>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setToggle(!toggle)}
                    className="ml-auto block xl:hidden p-2"
                >
                    {toggle ? <X size={30} /> : <List size={30} />}
                </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden xl:flex ml-auto space-x-6">
                {menuItems.map((menu, index) => (
                    <li key={index} className="relative group">
                        <div className="flex items-center cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md">
                            {menu.label} <CaretDown size={17} className="ml-1 mt-1" />
                        </div>
                        <ul className="absolute hidden group-hover:block bg-white shadow-md w-[200px] rounded-md top-full left-0 transition-all duration-200">
                            {menu.subMenu.map((subItem, subIndex) => (
                                <li key={subIndex} className="hover:bg-gray-300 p-2">
                                    <Link href={subItem.link} className="block">{subItem.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation */}
            {toggle && (
                <ul className="xl:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-2 py-4">
                    {menuItems.map((menu, index) => (
                        <li key={index} className="w-full text-center">
                            <details className="w-full">
                                <summary className="flex justify-center items-center cursor-pointer p-3 hover:bg-gray-200">
                                    {menu.label} <CaretDown size={17} className="ml-1 mt-1" />
                                </summary>
                                <ul className="bg-gray-100">
                                    {menu.subMenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="hover:bg-gray-300 p-2">
                                            <Link href={subItem.link} className="block">{subItem.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};
