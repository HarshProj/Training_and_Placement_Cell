import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { Navbar } from '../Components/Navbar';

export default function ContactUs() {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-50 pb-4 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Contact Us Header */}
      <div className="py-8 text-center mt-10">
        <h1 className="text-5xl font-bold text-aqua-500">Contact Us</h1>
      </div>

      {/* Main Content */}
      <div className="min-h-screen w-full bg-gray-50 py-10">
        <div className="w-[90%] max-md:w-[95%] mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Address and Contact Information */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow relative mb-10">
            {/* Address */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-blue-900 flex items-center">
                Kamla Nehru Institute of Technology
              </h3>
              <p className="text-blue-800 mt-4">
                KNIT Road, Sultanpur, <br />
                Uttar Pradesh, 228118
              </p>
              <a
                href="https://www.knit.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 mt-2 inline-block"
              >
                View on Google Maps
              </a>
            </div>

            {/* Contact Information */}
            <div className="absolute right-6 top-6 text-right">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Contact Information</h3>
              <p className="text-blue-800">
                <b>Phone:</b> +91 9415156184
              </p>
              <p className="text-blue-800">
                <b>Email:</b>{' '}
                <a
                  href="mailto:tpo@knit.ac.in"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  tpo@knit.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Find Us on the Map</h3>
            <iframe
              title="KNIT Sultanpur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.720947837385!2d82.0817341146274!3d26.265374583398962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ef98cbed5ab11%3A0xa0cfddf82892b1a7!2sKamla%20Nehru%20Institute%20of%20Technology%2C%20KNIT%20Rd%2C%20Sultanpur%2C%20Uttar%20Pradesh%20228118!5e0!3m2!1sen!2sin!4v1673882808951!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>
          </div>

          {/* Training & Placement Team */}
          <div className="bg-gray-100 p-6 rounded-lg shadow mb-10">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
              Training & Placement Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* TPO */}
              <div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">Training and Placement Officer</h4>
                <div className="text-blue-800">
                  <p>
                    <b>Prof. D.L. Gupta</b> <br />Professor Incharge at Career Development Cell(CDC)
                    Mobile: +91 9415156184 <br />
                    Email:{' '}
                    <a
                      href="mailto:dlgupta@knit.ac.in"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      dlgupta@knit.ac.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Coordinators */}
              <div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">Placement Coordinators</h4>
                <div className="text-blue-800">
                  <p>
                    <b>Akshat Mishra</b> (COMPUTER SCIENCE ENGINEERING) <br />
                    Mobile: +91 8052160589
                  </p>
                  <hr className="my-4" />
                  <p>
                    <b>Harsh Kumar Singh</b> (COMPUTER SCIENCE ENGINEERING) <br />
                    Mobile: +91 9260946604
                  </p>
                </div>
              </div>

              {/* Representatives */}
              <div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">TPRs Representatives</h4>
                <div className="text-blue-800 space-y-4">
                  {[
                    { name: 'Ashu Kumar', dept: 'COMPUTER SCIENCE ENGINEERING', phone: '+91 6387534747' },
                    { name: 'Sarthak Pandey', dept: 'CIVIL ENGINEERING', phone: '+91 7897834921' },
                    { name: 'Laxmikant Verma', dept: 'MECHANICAL ENGINEERING', phone: '+91 9415003041' },
                    { name: 'Gaurpad Shukla', dept: 'INFORMATION TECHNOLOGY', phone: '+91 9936147550' },
                    { name: 'Jyoti Kushwaha', dept: 'ELECTRONICS ENGINEERING', phone: '+91 9555464008' },
                    { name: 'Shivam Kumar Bhatt', dept: 'ELECTRICAL ENGINEERING', phone: '+91 6387382670' },
                  ].map((rep, index) => (
                    <div key={index}>
                      <p>
                        <b>{rep.name}</b> ({rep.dept}) <br />
                        Mobile: {rep.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Downloads, Quick Links, and External Links */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-4">Downloads</h4>
                <a
                  href="https://www.knit.ac.in/"
                  className="text-blue-600 underline hover:text-blue-800 block"
                >
                  JAF
                </a>
                <a
                  href="https://www.knit.ac.in/"
                  className="text-blue-600 underline hover:text-blue-800 block"
                >
                  IAF
                </a>
                <a
                  href="https://www.knit.ac.in/"
                  className="text-blue-600 underline hover:text-blue-800 block"
                >
                  Brochure
                </a>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-4">Quick Links</h4>
                <a
                  href="https://www.knit.ac.in/"
                  className="text-blue-600 underline hover:text-blue-800 block"
                >
                  Placement Registration Link
                </a>
                <a
                  href="https://www.knit.ac.in/"
                  className="text-blue-600 underline hover:text-blue-800 block"
                >
                  Placement Statistics
                </a>
                <a
                  href="https://www.knit.ac.in/"
                  className="text-blue-600 underline hover:text-blue-800 block"
                >
                  Meet Our Team
                </a>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-4">External Links</h4>
                <a
                  href="https://www.knit.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 block"
                >
                  KNIT Sultanpur
                </a>
                {/* Social Media Icons */}
                <div className="flex justify-start gap-4 mt-4">
                  <a
                    href="https://www.knit.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubLogo size={32} weight="fill" className="text-blue-800 hover:text-blue-600" />
                  </a>
                  <a
                    href="https://www.knit.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinLogo size={32} weight="fill" className="text-blue-800 hover:text-blue-600" />
                  </a>
                  <a
                    href="https://www.knit.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramLogo size={32} weight="fill" className="text-blue-800 hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-black text-white py-4 text-center">
            <p>Designed & Maintained by Training & Placement Cell, KNIT Sultanpur</p>
            <p>© CDC, KNIT 2025</p>
          </footer>
        </div>
      </div>
    </>
  );
}
