import React from 'react';
import Image from 'next/image';
import { GithubLogo, InstagramLogo, LinkedinLogo, MapPin, Phone, Envelope, Globe, Car, Bus, Train, Airplane } from '@phosphor-icons/react/dist/ssr';
import { Navbar } from '../Components/Navbar';
import KNITLogo from '../Assets/KNIT-Sultanpur-Logo.webp';
import DLGupta from '../Assets/D.L.Gupta.png';

export default function ContactUs() {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-50 pb-4 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Contact Us Header */}
      <div className="py-8 text-center mt-10 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="flex justify-center items-center mb-4">
          <div className="relative w-16 h-16 mr-4">
            <Image 
              src={KNITLogo} 
              alt="KNIT Sultanpur Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-blue-800">Contact Us</h1>
        </div>
        <p className="text-blue-600 text-lg max-w-2xl mx-auto">
          Connect with Kamla Nehru Institute of Technology, Sultanpur - A premier technical institution of Northern India
        </p>
      </div>

      {/* Main Content */}
      <div className="min-h-screen w-full bg-gray-50 py-10">
        <div className="w-[90%] max-md:w-[95%] mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Address and Contact Information */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow relative mb-10">
            {/* Address */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-blue-900 flex items-center">
                <MapPin size={24} className="text-blue-700 mr-2" />
                Kamla Nehru Institute of Technology
              </h3>
              <p className="text-blue-800 mt-4">
                KNIT Road, Sultanpur, <br />
                Uttar Pradesh, 228118
              </p>
              <a
                href="https://maps.google.com/maps?q=Kamla+Nehru+Institute+of+Technology,+Sultanpur"
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
              <p className="text-blue-800 flex items-center justify-end">
                <Phone size={18} className="text-blue-700 mr-2" />
                <b>Phone:</b> +91 9415156184
              </p>
              <p className="text-blue-800 flex items-center justify-end">
                <Envelope size={18} className="text-blue-700 mr-2" />
                <b>Email:</b>{' '}
                <a
                  href="mailto:tpo@knit.ac.in"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  tpo@knit.ac.in
                </a>
              </p>
              <p className="text-blue-800 flex items-center justify-end">
                <Globe size={18} className="text-blue-700 mr-2" />
                <b>Website:</b>{' '}
                <a
                  href="https://www.knit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  www.knit.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Locate Us Section - Enhanced */}
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Locate Us</h3>
            
            {/* Google Maps Embed - Corrected */}
            <div className="mb-8">
              <iframe
                title="KNIT Sultanpur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.0234259075337!2d82.0797414!3d26.2887819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c86d691219f%3A0x99a3eb1e7c07f78f!2sKamla%20Nehru%20Institute%20of%20Technology%2C%20Sultanpur%20(U.P.)!5e0!3m2!1sen!2sin!4v1712018274975!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow"
              ></iframe>
            </div>

            {/* Transportation Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {/* By Road */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Car size={24} className="text-blue-700 mr-2" />
                  <h4 className="text-xl font-bold text-blue-900">By Road</h4>
                </div>
                <p className="text-blue-800 text-sm">
                  KNIT Sultanpur is well connected by road to major cities. The institute is located approximately 4 km from Sultanpur city on the Sultanpur-Faizabad highway (NH-96).
                </p>
                <div className="text-blue-800 text-sm mt-2">
                  <b>Distance from key cities:</b>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Lucknow: 140 km</li>
                    <li>Varanasi: 125 km</li>
                    <li>Ayodhya: 60 km</li>
                    <li>Allahabad: 145 km</li>
                  </ul>
                </div>
              </div>

              {/* By Train */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Train size={24} className="text-blue-700 mr-2" />
                  <h4 className="text-xl font-bold text-blue-900">By Train</h4>
                </div>
                <p className="text-blue-800 text-sm">
                  Sultanpur Junction (SLN) railway station is well connected to major cities like Delhi, Lucknow, and Varanasi. The station is approximately 6 km from the institute.
                </p>
                <div className="text-blue-800 text-sm mt-2">
                  <b>Key trains:</b>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Varanasi-Lucknow Passenger</li>
                    <li>Sadbhavana Express</li>
                    <li>Gorakhdham Express</li>
                    <li>Various other passenger and express trains</li>
                  </ul>
                </div>
              </div>

              {/* By Air */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Airplane size={24} className="text-blue-700 mr-2" />
                  <h4 className="text-xl font-bold text-blue-900">By Air</h4>
                </div>
                <p className="text-blue-800 text-sm">
                  The nearest airports to KNIT Sultanpur are:
                </p>
                <ul className="list-disc ml-5 text-blue-800 text-sm mt-2">
                  <li>Ayodhya International Airport (60 km)</li>
                  <li>Chaudhary Charan Singh International Airport, Lucknow (140 km)</li>
                  <li>Lal Bahadur Shastri International Airport, Varanasi (125 km)</li>
                </ul>
                <p className="text-blue-800 text-sm mt-2">
                  Taxis and other transport services are available from these airports to reach Sultanpur.
                </p>
              </div>

              {/* Local Transport */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Bus size={24} className="text-blue-700 mr-2" />
                  <h4 className="text-xl font-bold text-blue-900">Local Transport</h4>
                </div>
                <p className="text-blue-800 text-sm">
                  From Sultanpur city or railway station, you can reach KNIT by:
                </p>
                <ul className="list-disc ml-5 text-blue-800 text-sm mt-2">
                  <li>Auto-rickshaws (readily available)</li>
                  <li>City buses that run along the highway</li>
                  <li>Private taxis and cab services</li>
                  <li>E-rickshaws from main city points</li>
                </ul>
                <p className="text-blue-800 text-sm mt-2">
                  Travel time from railway station: Approximately 15-20 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Training & Placement Team */}
          <div className="bg-gray-100 p-6 rounded-lg shadow mb-10">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
              Training & Placement Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* TPO */}
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Training and Placement Officer</h4>
                <div className="flex flex-col items-center mb-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500 mb-3">
                    <Image 
                      src={DLGupta} 
                      alt="Prof. D.L. Gupta - TPO" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
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
              <div className="bg-white p-5 rounded-lg shadow-md">
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
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-blue-900 mb-4">TPRs Representatives</h4>
                <div className="text-blue-800 space-y-4 max-h-96 overflow-y-auto pr-2">
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
          
          {/* Social Media & Additional Contact Information */}
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">Connect With Us</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Social Media Links */}
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Follow Us</h4>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.linkedin.com/school/knit-sultanpur/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <LinkedinLogo size={32} className="text-blue-700" />
                  </a>
                  <a 
                    href="https://www.instagram.com/knit_sultanpur/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <InstagramLogo size={32} className="text-blue-700" />
                  </a>
                  <a 
                    href="https://github.com/knit-sultanpur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <GithubLogo size={32} className="text-blue-700" />
                  </a>
                </div>
                <p className="text-center text-blue-800 mt-4">
                  Stay updated with the latest news, events, and announcements from KNIT Sultanpur
                </p>
              </div>
              
              {/* Additional Contact */}
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Official Communication</h4>
                <div className="text-blue-800">
                  <p className="mb-3">
                    <b>Director's Office:</b><br />
                    Phone: +91 5362-240454<br />
                    Email: director@knit.ac.in
                  </p>
                  <p className="mb-3">
                    <b>Registrar Office:</b><br />
                    Phone: +91 5362-240757<br />
                    Email: registrar@knit.ac.in
                  </p>
                  <p>
                    <b>For Admissions:</b><br />
                    Phone: +91 5362-240454 (Ext. 321)<br />
                    Email: admission@knit.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}