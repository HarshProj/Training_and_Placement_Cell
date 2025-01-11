import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo, Phone } from '@phosphor-icons/react/dist/ssr';

export const ContactUs = () => {
  return (
    <div className="min-h-[400px] w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 py-10">
      <div className="grid grid-cols-5 w-[90%] max-md:w-[80%] gap-8">
        {/* Training & Placement Team */}
        <div className="col-span-5 flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-blue-900 text-center">Training & Placement Team</h3>
          <div className="grid grid-cols-3 gap-6 text-blue-700 max-md:grid-cols-1">
            <div>
              <b className="block mb-2">Prof. Incharge CDC</b>
              <div className="bg-white p-4 shadow rounded-lg">
                <p>D.L. Gupta</p>
                <p><b>Mobile:</b> +91 9415156184</p>
              </div>
            </div>
            <div>
              <b className="block mb-2">Placement Coordinators</b>
              <div className="bg-white p-4 shadow rounded-lg">
                <p>Akshat Mishra, <i>Computer Science and Engineering</i></p>
                <p>Mobile: +91 8052160589</p>
                <hr className="my-2" />
                <p>Harsh Kumar Singh, <i>Computer Science and Engineering</i></p>
                <p>Mobile: +91 9260946604</p>
              </div>
            </div>
            <div>
              <b className="block mb-2">TPRs Representatives</b>
              <div className="grid grid-cols-2 gap-4 text-blue-700">
                <div className="bg-white p-4 shadow rounded-lg">
                  <p>Ashu Kumar</p>
                  <p><i>Computer Science and Engineering</i></p>
                  <p>Mobile: +91 6387534747</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <p>Sarthak Pandey</p>
                  <p><i>Civil Engineering</i></p>
                  <p>Mobile: +91 7897834921</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <p>Laxmikant Verma</p>
                  <p><i>Mechanical Engineering</i></p>
                  <p>Mobile: +91 9415003041</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <p>Gaurpad Shukla</p>
                  <p><i>Information Technology</i></p>
                  <p>Mobile: +91 9936147550</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <p>Jyoti Kushwaha</p>
                  <p><i>Electronics Engineering</i></p>
                  <p>Mobile: +91 9555464008</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <p>Shivam Kumar Bhatt</p>
                  <p><i>Electrical Engineering</i></p>
                  <p>Mobile: +91 6387382670</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloads */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-blue-900">Downloads</h3>
          <p className="text-blue-700 cursor-pointer hover:underline">JAF</p>
          <p className="text-blue-700 cursor-pointer hover:underline">IAF</p>
          <p className="text-blue-700 cursor-pointer hover:underline">Brochure</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-blue-900">Quick Links</h3>
          <p className="text-blue-700 cursor-pointer hover:underline">Placement Registration Link</p>
          <p className="text-blue-700 cursor-pointer hover:underline">Placement Statistics</p>
          <p className="text-blue-700 cursor-pointer hover:underline">Meet Our Team</p>
        </div>

        {/* External Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-blue-900">External Links</h3>
          <p className="text-blue-700 cursor-pointer hover:underline">KNIT Sultanpur</p>
        </div>

        {/* Contact Information */}
        <div className="col-span-5 max-md:col-span-1 flex flex-col gap-6 mt-10">
          <h3 className="text-3xl font-bold text-blue-900 text-center">TPO KNIT</h3>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-blue-800">Kamla Nehru Institute of Technology, Sultanpur</p>
            <p className="text-blue-800 flex items-center"><Phone size={20} className="mr-2" /> +91 9415156184</p>
            <p className="text-blue-800"><b>Handles:</b></p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" aria-label="LinkedIn"><LinkedinLogo size={30} weight="fill" className="text-blue-800" /></a>
              <a href="https://instagram.com" aria-label="Instagram"><InstagramLogo size={30} weight="fill" className="text-blue-800" /></a>
              <a href="https://github.com" aria-label="GitHub"><GithubLogo size={30} weight="fill" className="text-blue-800" /></a>
            </div>
            <p className="cursor-pointer rounded-3xl bg-blue-200 py-2 px-4 text-blue-900 text-center"><b>Email:</b> tpo@knit.ac.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
