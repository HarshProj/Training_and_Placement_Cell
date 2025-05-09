"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { GithubLogo, InstagramLogo, LinkedinLogo, MapPin, Phone, Envelope, Globe, Car, Bus, Train, Airplane } from '@phosphor-icons/react/dist/ssr';
import { Navbar } from '../Components/Navbar';
import KNITLogo from '../Assets/logo.png';
import DLGupta from '../Assets/D.L.Gupta.png';
import RiteshImage from '../Assets/Ritesh.jpg';
import KnitBackground from '../Assets/knit.jpeg';
import { motion } from 'framer-motion';

export default function ContactUs() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-50 pb-4 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Contact Us Header with Background Image and Blur Effect */}
      <div className="relative py-16 md:py-20 text-center mt-10 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={KnitBackground} 
            alt="KNIT Campus" 
            fill 
            className="object-cover"
            style={{ filter: 'blur(4px) brightness(0.8)' }}
          />
        </div>
        {/* Content */}
        <motion.div 
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex justify-center items-center mb-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16 mr-3 md:mr-4 bg-white rounded-full p-1">
              <Image 
                src={KNITLogo} 
                alt="KNIT Sultanpur Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Contact Us</h1>
          </div>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto px-4 drop-shadow-md">
            Connect with Kamla Nehru Institute of Technology, Sultanpur - A premier technical institution of Northern India
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen w-full bg-gray-50 py-6 md:py-10">
        <div className="w-[95%] md:w-[90%] mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
          {/* Address and Contact Information */}
          <motion.div 
            className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 md:p-6 rounded-lg shadow relative mb-8 md:mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Address - Mobile Responsive Layout */}
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 flex items-center">
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
                  className="text-blue-600 underline hover:text-blue-800 mt-2 inline-block transition-colors duration-300"
                >
                  View on Google Maps
                </a>
              </div>

              {/* Contact Information - Mobile Responsive */}
              <div className="text-left md:text-right">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Contact Information</h3>
                <p className="text-blue-800 flex items-center md:justify-end">
                  <Phone size={18} className="text-blue-700 mr-2" />
                  <b>Phone:</b> +91 9415156184
                </p>
                <p className="text-blue-800 flex items-center md:justify-end">
                  <Envelope size={18} className="text-blue-700 mr-2" />
                  <b>Email:</b>{' '}
                  <a
                    href="mailto:tpo@knit.ac.in"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                  >
                    tpo@knit.ac.in
                  </a>
                </p>
                <p className="text-blue-800 flex items-center md:justify-end">
                  <Globe size={18} className="text-blue-700 mr-2" />
                  <b>Website:</b>{' '}
                  <a
                    href="https://www.knit.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                  >
                    www.knit.ac.in
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Locate Us Section - Enhanced */}
          <motion.div 
            className="bg-blue-50 p-4 md:p-6 rounded-lg shadow mb-8 md:mb-10 scroll-animate"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">Locate Us</h3>
            
            {/* Google Maps Embed - Responsive Height */}
            <div className="mb-6 md:mb-8 hover:shadow-lg transition-shadow duration-300">
              <iframe
                title="KNIT Sultanpur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.0234259075337!2d82.0797414!3d26.2887819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c86d691219f%3A0x99a3eb1e7c07f78f!2sKamla%20Nehru%20Institute%20of%20Technology%2C%20Sultanpur%20(U.P.)!5e0!3m2!1sen!2sin!4v1712018274975!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow md:h-[450px]"
              ></iframe>
            </div>

            {/* Transportation Options */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8"
              variants={staggerChildren}
            >
              {/* By Road */}
              <motion.div 
                className="bg-white p-3 md:p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                variants={fadeIn}
              >
                <div className="flex items-center mb-2 md:mb-3">
                  <Car size={20} weight="bold" className="text-blue-700 mr-2" />
                  <h4 className="text-lg md:text-xl font-bold text-blue-900">By Road</h4>
                </div>
                <p className="text-blue-800 text-xs md:text-sm">
                  KNIT Sultanpur is well connected by road to major cities. The institute is located approximately 4 km from Sultanpur city on the Sultanpur-Faizabad highway (NH-96).
                </p>
                <div className="text-blue-800 text-xs md:text-sm mt-2">
                  <b>Distance from key cities:</b>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Lucknow: 140 km</li>
                    <li>Varanasi: 125 km</li>
                    <li>Ayodhya: 60 km</li>
                    <li>Allahabad: 145 km</li>
                  </ul>
                </div>
              </motion.div>

              {/* By Train */}
              <motion.div 
                className="bg-white p-3 md:p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                variants={fadeIn}
              >
                <div className="flex items-center mb-2 md:mb-3">
                  <Train size={20} weight="bold" className="text-blue-700 mr-2" />
                  <h4 className="text-lg md:text-xl font-bold text-blue-900">By Train</h4>
                </div>
                <p className="text-blue-800 text-xs md:text-sm">
                  Sultanpur Junction (SLN) railway station is well connected to major cities like Delhi, Lucknow, and Varanasi. The station is approximately 6 km from the institute.
                </p>
                <div className="text-blue-800 text-xs md:text-sm mt-2">
                  <b>Key trains:</b>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Varanasi-Lucknow Passenger</li>
                    <li>Sadbhavana Express</li>
                    <li>Gorakhdham Express</li>
                    <li>Various other passenger and express trains</li>
                  </ul>
                </div>
              </motion.div>

              {/* By Air */}
              <motion.div 
                className="bg-white p-3 md:p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                variants={fadeIn}
              >
                <div className="flex items-center mb-2 md:mb-3">
                  <Airplane size={20} weight="bold" className="text-blue-700 mr-2" />
                  <h4 className="text-lg md:text-xl font-bold text-blue-900">By Air</h4>
                </div>
                <p className="text-blue-800 text-xs md:text-sm">
                  The nearest airports to KNIT Sultanpur are:
                </p>
                <ul className="list-disc ml-5 text-blue-800 text-xs md:text-sm mt-2">
                  <li>Ayodhya International Airport (60 km)</li>
                  <li>Chaudhary Charan Singh International Airport, Lucknow (140 km)</li>
                  <li>Lal Bahadur Shastri International Airport, Varanasi (125 km)</li>
                </ul>
                <p className="text-blue-800 text-xs md:text-sm mt-2">
                  Taxis and other transport services are available from these airports to reach Sultanpur.
                </p>
              </motion.div>

              {/* Local Transport */}
              <motion.div 
                className="bg-white p-3 md:p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                variants={fadeIn}
              >
                <div className="flex items-center mb-2 md:mb-3">
                  <Bus size={20} weight="bold" className="text-blue-700 mr-2" />
                  <h4 className="text-lg md:text-xl font-bold text-blue-900">Local Transport</h4>
                </div>
                <p className="text-blue-800 text-xs md:text-sm">
                  From Sultanpur city or railway station, you can reach KNIT by:
                </p>
                <ul className="list-disc ml-5 text-blue-800 text-xs md:text-sm mt-2">
                  <li>Auto-rickshaws (readily available)</li>
                  <li>City buses that run along the highway</li>
                  <li>Private taxis and cab services</li>
                  <li>E-rickshaws from main city points</li>
                </ul>
                <p className="text-blue-800 text-xs md:text-sm mt-2">
                  Travel time from railway station: Approximately 15-20 minutes.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Training & Placement Team */}
          <motion.div 
            className="bg-gray-100 p-4 md:p-6 rounded-lg shadow mb-8 md:mb-10 scroll-animate"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-4 md:mb-6">
              Training & Placement Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* TPO */}
              <motion.div 
                className="bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Training and Placement Officer</h4>
                <div className="flex flex-col items-center mb-3 md:mb-4">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-500 mb-3 hover:border-blue-700 transition-colors duration-300">
                    <Image 
                      src={DLGupta} 
                      alt="Prof. D.L. Gupta - TPO" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-blue-800 text-sm md:text-base">
                  <p>
                    <b>Prof. D.L. Gupta</b> <br />Professor Incharge at Career Development Cell(CDC)
                    Mobile: +91 9415156184 <br />
                    Email:{' '}
                    <a
                      href="mailto:dlgupta@knit.ac.in"
                      className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                    >
                      dlgupta@knit.ac.in
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Office Assistant */}
              <motion.div 
                className="bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Office Assistant</h4>
                <div className="flex flex-col items-center mb-3 md:mb-4">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-500 mb-3 hover:border-blue-700 transition-colors duration-300">
                    <Image 
                      src={RiteshImage} 
                      alt="Mr. Ritesh Upadhyay" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-blue-800 text-sm md:text-base">
                  <p>
                    <b>Mr. Ritesh Upadhyay</b> <br />
                    Phone: +91-7007107513 <br />
                    Email:{' '}
                    <a
                      href="mailto:riteshupadhyayofficial@gmail.com"
                      className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                    >
                      riteshupadhyayofficial@gmail.com
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Coordinators */}
              <motion.div 
                className="bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Placement Coordinators</h4>
                <div className="text-blue-800 text-sm md:text-base">
                  <p>
                    <b>Akshat Mishra</b> (COMPUTER SCIENCE ENGINEERING) <br />
                    Mobile: +91 8052160589
                  </p>
                  <hr className="my-3 md:my-4" />
                  <p>
                    <b>Harsh Kumar Singh</b> (COMPUTER SCIENCE ENGINEERING) <br />
                    Mobile: +91 9260946604
                  </p>
                </div>
              </motion.div>

              {/* Representatives */}
              <motion.div 
                className="bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">TPRs Representatives</h4>
                <div className="text-blue-800 text-sm md:text-base space-y-3 md:space-y-4 max-h-72 md:max-h-96 overflow-y-auto pr-2 custom-scrollbar">
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
              </motion.div>
            </div>
          </motion.div>
          
          {/* Social Media & Additional Contact Information */}
          <motion.div 
            className="bg-blue-50 p-4 md:p-6 rounded-lg shadow scroll-animate"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-4 md:mb-6">Connect With Us</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Social Media Links */}
              <motion.div 
                className="bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Follow Us</h4>
                <div className="flex justify-center space-x-4 md:space-x-6">
                  <motion.a 
                    href="https://www.linkedin.com/in/cdc-knit/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <LinkedinLogo size={28} className="text-blue-700" />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/knit_sultanpur/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <InstagramLogo size={28} className="text-blue-700" />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/knit-sultanpur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <GithubLogo size={28} className="text-blue-700" />
                  </motion.a>
                </div>
                <p className="text-center text-blue-800 text-sm md:text-base mt-3 md:mt-4">
                  Stay updated with the latest news, events, and announcements from KNIT Sultanpur
                </p>
              </motion.div>
              
              {/* Additional Contact */}
              <motion.div 
                className="bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Official Communication</h4>
                <div className="text-blue-800 text-sm md:text-base">
                  <p className="mb-2 md:mb-3">
                    <b>Director's Office:</b><br />
                    Phone: +91 9415041790<br />
                    Email: director@knit.ac.in
                  </p>
                  <p className="mb-2 md:mb-3">
                    <b>Training and Placement Office:</b><br />
                    Phone: +91 9415156184<br />
                    Email: tpo@knit.ac.in
                  </p>
                  <p>
                    <b>For 	Registrar Office</b><br />
                    Phone: +91 9307448592<br />
                    Email: registrar@knit.ac.in
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add custom style for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
        
        /* Fix specific height issues on small screens */
        @media (max-width: 640px) {
          iframe {
            height: 250px !important;
          }
          
          .custom-scrollbar {
            max-height: 200px;
          }
        }
      `}</style>
    </>
  );
}