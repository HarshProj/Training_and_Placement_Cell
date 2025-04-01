'use client';
import { CaretDown, List, X } from "@phosphor-icons/react";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../Assets/logo.png';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const menuItems = [
        { label: "Home", subMenu: [{ label: "Home", link: "/" },{ label: "About Us", link: "/about-us" }] },
        { label: "Academics", subMenu: [{ label: "Programmes", link: "/" }, { label: "Course Highlights", link: "/" }, { label: "Grade System", link: "/" }, { label: "Admission Procedure", link: "/" }] },
        { label: "Students", subMenu: [{ label: "Student Corner", link: "/" }, { label: "Achievement", link: "/" }, { label: "Registration Procedure", link: "/" }, { label: "Career Development", link: "/" }, { label: "Activity", link: "/" }] },
        { label: "Recruiter", subMenu: [{ label: "Why Recruiter?", link: "/" }, { label: "Brochure", link: "/" }, { label: "Placement Procedure", link: "/" }, { label: "Past Recruiters", link: "/past_recruiters" }] },
        { label: "Forms", subMenu: [{ label: "JAF", link: "/" }, { label: "IAF", link: "/" }, { label: "Industry Day", link: "/" }] },
        { label: "Training & Placement Team", subMenu: [{ label: "Contact Us", link: "/contact-us" }, { label: "Placement Team", link: "/" }, { label: "Career Guidance Cell", link: "/" }, { label: "Members", link: "/" }] },
        { label: "Login", subMenu: [{ label: "Recruiter Login", link: "/" }, { label: "Student Login", link: "/" }] },
    ];

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    return (
        <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg h-16' : 'bg-white/90 backdrop-blur-md h-20'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo and Institute Name */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image 
                                className={`transition-all duration-300 ${scrolled ? 'h-10 w-14' : 'h-12 w-16'}`} 
                                src={logo} 
                                alt="KNIT logo" 
                            />
                        </div>
                        <div className={`ml-4 transition-all duration-300 ${scrolled ? 'max-w-xs' : 'max-w-md'}`}>
                            <h1 className={`font-semibold transition-all duration-300 ${scrolled ? 'text-sm' : 'text-base'} text-gray-800`}>
                                Training & Placement Office
                            </h1>
                            <p className={`text-gray-600 transition-all duration-300 ${scrolled ? 'text-xs' : 'text-sm'}`}>
                                Kamla Nehru Institute of Technology
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center space-x-1">
                        {menuItems.map((menu, index) => (
                            <div key={index} className="relative group">
                                <button 
                                    className="px-3 py-2 rounded-md text-gray-700 font-medium group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-200 flex items-center"
                                >
                                    {menu.label}
                                    <CaretDown size={16} className="ml-1 group-hover:transform group-hover:rotate-180 transition-transform duration-200" />
                                </button>
                                
                                <div className="absolute left-0 w-56 mt-1 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                                    <div className="py-1">
                                        {menu.subMenu.map((subItem, subIndex) => (
                                            <Link 
                                                href={subItem.link} 
                                                key={subIndex}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setToggle(!toggle)}
                            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
                        >
                            {toggle ? <X size={24} /> : <List size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`xl:hidden ${toggle ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 bg-white shadow-lg`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {menuItems.map((menu, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600"
                            >
                                <span>{menu.label}</span>
                                <CaretDown 
                                    size={16} 
                                    className={`transition-transform duration-200 ${activeDropdown === index ? 'transform rotate-180' : ''}`} 
                                />
                            </button>
                            
                            <div className={`transition-all duration-200 ${activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gray-50`}>
                                {menu.subMenu.map((subItem, subIndex) => (
                                    <Link 
                                        href={subItem.link} 
                                        key={subIndex}
                                        className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                        onClick={() => setToggle(false)}
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};