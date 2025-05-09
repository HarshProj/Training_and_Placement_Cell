"use client";

import { CaretDown, List, User, UserCircle, X } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/logo.png";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

interface SubMenuItem {
  label: string;
  link: string;
}

interface MenuItem {
  label: string;
  val: boolean;
  subMenu: SubMenuItem[];
}

const URL = process.env.NEXT_PUBLIC_API_URL;

export const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [isAdmin, setisAdmin] = useState(false);

  const userType = async (storedToken: string | null) => {
    const response = await axios.get(`${URL}/api/auth/user-type`, {
      headers: {
        Authtoken: storedToken,
      },
    });
    setisAdmin(response.data.success);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = sessionStorage.getItem("authtoken");
      userType(storedToken);
      setAuthToken(storedToken);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    console.log("Logout button clicked"); // Debugging log
    sessionStorage.removeItem("authtoken"); // Remove the session token
    setAuthToken(null); // Update the state
    router.push("/"); // Redirect to the home page or login page
  };

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      val: true,
      subMenu: [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/about-us" },
      ],
    },
    {
      label: "Academics",
      val: true,
      subMenu: [
        { label: "Course Highlights", link: "/course-highlights" },
      ],
    },
    {
      label: "Students",
      val: true,
      subMenu: [
        {
          label: "Registration Procedure and Code of Conduct",
          link: "/CodeOfConduct",
        },
        { label: "Login", link: "/student_login" },
      ],
    },
    {
      label: "Recruiter",
      val: true,
      subMenu: [
        { label: "Brochure", link: "/Placement-Brochure.pdf" },
        { label: "Placement Procedure", link: "/CodeOfConduct" },
        { label: "Past Recruiters", link: "/past_recruiters" },
        { label: "Recruiter Feedback", link: "/recruiters_feedback" },
      ],
    },
    {
      label: "Training & Placement Team",
      val: true,
      subMenu: [
        { label: "Contact Us", link: "/contact-us" },
        { label: "Photo Gallery", link: "/photo-gallery" },
        { label: "Members", link: "/placement-team" },
      ],
    },
    {
      label: "Login",
      val: !authToken,
      subMenu: [
        { label: "Admin Login", link: "/recruiter_login" },
        { label: "Student Login", link: "/student_login" },
      ],
    },
    {
      label: "More",
      val: !!authToken,
      subMenu: [
        { label: "Logout", link: "/" },
        {
          label: "Dashboard",
          link: `${isAdmin ? "/admin" : "/student_dashboard"}`,
        },
      ],
    },
  ];

  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg h-16"
          : "bg-white/90 backdrop-blur-md h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                className={`transition-all duration-300 ${
                  scrolled ? "h-10 w-14" : "h-12 w-16"
                }`}
                src={logo}
                alt="KNIT logo"
              />
            </div>
            <div
              className={`ml-4 transition-all duration-300 ${
                scrolled ? "max-w-xs" : "max-w-md"
              }`}
            >
              <h1
                className={`font-semibold transition-all duration-300 ${
                  scrolled ? "text-sm" : "text-base"
                } text-gray-800`}
              >
                Training & Placement Office
              </h1>
              <p
                className={`text-gray-600 transition-all duration-300 ${
                  scrolled ? "text-xs" : "text-sm"
                }`}
              >
                Kamla Nehru Institute of Technology
              </p>
            </div>
          </div>

          <div className="hidden xl:flex items-center space-x-1">
            {menuItems.map(
              (menu, index) =>
                menu.val && (
                  <div key={index} className="relative group">
                    <>
                      <button className="px-3 py-2 rounded-md text-gray-700 font-medium group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-200 flex items-center">
                        {authToken && menu.label === "More" ? (
                          <UserCircle size={32} />
                        ) : (
                          <span className="flex items-center">
                            {menu.label}
                            <CaretDown
                              size={16}
                              className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                            />
                          </span>
                        )}
                      </button>

                      {menu.subMenu.length > 0 && (
                        <div className="absolute left-0 w-56 mt-1 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                          <div className="py-1">
                            {menu.subMenu.map((subItem, subIndex) =>
                              subItem.label == "Logout" ? (
                                <button
                                  onClick={handleLogout}
                                  type="button"
                                  className="w-full px-4 py-2 text-sm text-start text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                  Logout
                                </button>
                              ) : (
                                <Link
                                  href={subItem.link}
                                  key={subIndex}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                  {subItem.label}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                )
            )}
          </div>

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

      <div
        className={`xl:hidden ${
          toggle ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map(
            (menu, index) =>
              menu.val && (
                <div key={index} className="relative">
                  <button
                    onClick={() => {
                      if (menu.label === "Logout") {
                        handleLogout();
                        setToggle(false);
                      } else {
                        toggleDropdown(index);
                      }
                    }}
                    className="w-full flex justify-between items-center px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span>{menu.label}</span>
                    {menu.label !== "Logout" && (
                      <CaretDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {menu.subMenu.length > 0 && (
                    <div
                      className={`transition-all duration-200 ${
                        activeDropdown === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden bg-gray-50`}
                    >
                      {menu.subMenu.map((subItem, subIndex) =>
                        subItem.label === "Logout" ? (
                          <button
                            key={subIndex}
                            onClick={() => {
                              handleLogout();
                              setToggle(false);
                            }}
                            className="w-full text-left pl-6 pr-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                          >
                            Logout
                          </button>
                        ) : (
                          <Link
                            href={subItem.link}
                            key={subIndex}
                            className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setToggle(false)}
                          >
                            {subItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </nav>
  );
};
