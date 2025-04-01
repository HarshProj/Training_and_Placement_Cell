import React from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export const Footer = () => {
  return (
    <div className="min-h-[400px] w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-5 w-[90%] max-md:w-[80%] min-h-[280px] max-md:grid-cols-1 max-md:gap-10">
        <div className="col-span-2 max-md:col-span-1 flex flex-col gap-4">
          <h3 className="text-3xl font-bold">TPO KNIT</h3>
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 cursor-pointer hover:underline">
              Kamla Nehru Institute of Technology, Sultanpur
            </p>
            <p className="text-gray-400 cursor-pointer hover:underline">
              <b>Phone: </b>+91 9415156184
            </p>
            <p className="text-gray-400 cursor-pointer hover:underline">
              <b>Phone: </b>+91 9415156184
            </p>
            <div className="flex text-gray-400 gap-3">
              <b>Handles: </b>
              <a href="">
                <LinkedinLogo size={30} weight="fill" />
              </a>
              <a href="">
                <InstagramLogo size={30} weight="fill" />
              </a>
              <a href="">
                <GithubLogo size={30} weight="fill" />
              </a>
            </div>
          </div>
          <p className="cursor-pointer rounded-3xl bg-gray-300 py-1 px-2 pl-4 w-[200px]">
            <b>Email:</b> tpo@knit.ac.in
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3>Downloads</h3>
          <a
            href="https://www.knit.ac.in/"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 block"
          >
            JAF
          </a>
          <a
            href="https://www.knit.ac.in/"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 block"
          >
            IAF
          </a>
          <a
            href="https://www.knit.ac.in/"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 block"
          >
            Brochure
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3>Quick Links</h3>
          <p className="text-gray-400 cursor-pointer hover:underline">
            Placement Registration link
          </p>
          <p className="text-gray-400 cursor-pointer hover:underline">
            Placement Statistics
          </p>
          <p className="text-gray-400 cursor-pointer hover:underline">
            Meet Our Team
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3>External Links</h3>
          <p className="text-gray-400 cursor-pointer hover:underline">
          <a
                  href="https://www.knit.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 block"
                >
                  KNIT Sultanpur
                </a>
          </p>
        </div>
      </div>

      {/* Footer Credits with Black Background */}
      <div className="w-full bg-black text-center py-3 mt-6 text-white">
        <p>Designed & Maintained by Training & Placement Cell, KNIT Sultanpur</p>
        <p>© CDC, KNIT 2025</p>
      </div>
    </div>
  );
};
