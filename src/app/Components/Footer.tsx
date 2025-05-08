import React from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 pt-8 border-t border-gray-200">
      <div className="grid grid-cols-5 w-[90%] max-md:w-[80%] min-h-[280px] max-md:grid-cols-1 max-md:gap-10 mb-6">
        <div className="col-span-2 max-md:col-span-1 flex flex-col gap-4">
          <h3 className="text-3xl font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:transition-all hover:after:w-24 pb-2">TPO KNIT</h3>
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 cursor-pointer hover:underline hover:text-gray-600 transition-colors duration-300">
              Kamla Nehru Institute of Technology, Sultanpur
            </p>
            <p className="text-gray-400 cursor-pointer hover:underline hover:text-gray-600 transition-colors duration-300">
              <b>Phone: </b>+91 9415156184
            </p>
            <p className="text-gray-400 cursor-pointer hover:underline hover:text-gray-600 transition-colors duration-300">
              <b>Phone: </b>+91 9415156184
            </p>
            <div className="flex text-gray-400 gap-3 items-center mt-2">
              <b>Handles: </b>
              <a 
                href="https://www.linkedin.com/in/cdc-knit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <LinkedinLogo size={30} weight="fill" />
              </a>
              <a 
                href="https://www.instagram.com/knit_sultanpur/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="hover:text-pink-600 transform hover:scale-110 transition-all duration-300"
              >
                <InstagramLogo size={30} weight="fill" />
              </a>
              <a 
                href="#" 
                aria-label="GitHub"
                className="hover:text-gray-800 transform hover:scale-110 transition-all duration-300"
              >
                <GithubLogo size={30} weight="fill" />
              </a>
            </div>
          </div>
          <div className="cursor-pointer rounded-3xl bg-gray-300 py-1 px-2 pl-4 w-[200px] hover:bg-gray-400 transition-colors duration-300 group">
            <p><b>Email:</b> <span className="group-hover:text-blue-700 transition-colors duration-300">tpo@knit.ac.in</span></p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600 pb-2 mb-2">Downloads</h3>
          <a
            href="https://knit.ac.in/en/page/naac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 block transform hover:translate-x-1 transition-transform duration-300"
          >
            NAAC
          </a>
          <a
            href="https://knit.ac.in/en/page/nba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 block transform hover:translate-x-1 transition-transform duration-300"
          >
            NBA
          </a>
          <a
            href="https://knit.ac.in/en/page/nirf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 block transform hover:translate-x-1 transition-transform duration-300"
          >
            NIRF
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600 pb-2 mb-2">Quick Links</h3>
          <p className="text-gray-400 cursor-pointer hover:underline hover:text-gray-600 transform hover:translate-x-1 transition-all duration-300">
            Placement Registration link
          </p>
          <p className="text-gray-400 cursor-pointer hover:underline hover:text-gray-600 transform hover:translate-x-1 transition-all duration-300">
            Placement Statistics
          </p>
          <p className="text-gray-400 cursor-pointer hover:underline hover:text-gray-600 transform hover:translate-x-1 transition-all duration-300">
            Meet Our Team
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600 pb-2 mb-2">External Links</h3>
          <a
            href="https://www.knit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 block transform hover:translate-x-1 transition-transform duration-300"
          >
            KNIT Sultanpur
          </a>
        </div>
      </div>

      <div className="w-full bg-black text-center py-4 text-white">
        <p className="hover:text-blue-300 transition-colors duration-300">Designed & Maintained by Training & Placement Cell, KNIT Sultanpur</p>
        <p className="text-sm mt-1">© CDC, KNIT 2025</p>
      </div>
    </div>
  );
};