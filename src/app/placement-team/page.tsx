'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DLGupta from '../Assets/D.L.Gupta.png';
import RiteshImage from '../Assets/Ritesh.jpg';

const PlacementTeam = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-24 pb-8 px-4 md:px-10 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50"
    >
      <motion.h2
        className="text-center text-3xl md:text-4xl font-extrabold text-blue-800 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Our Placement Team
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        {[
          {
            title: 'Training and Placement Officer',
            name: 'Prof. D.L. Gupta',
            info: [
              'Professor Incharge at Career Development Cell (CDC)',
              'Mobile: +91 9415156184',
              'Email: dlgupta@knit.ac.in',
            ],
            image: DLGupta,
          },
          {
            title: 'Office Assistant',
            name: 'Mr. Ritesh Upadhyay',
            info: ['Phone: +91-7007107513', 'Email: riteshupadhyayofficial@gmail.com'],
            image: RiteshImage,
          },
          {
            title: 'Placement Coordinators',
            name: '',
            info: [
              'Akshat Mishra (CSE) - +91 8052160589',
              'Harsh Kumar Singh (CSE) - +91 9260946604',
            ],
            image: null,
          },
        ].map((person, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-1 p-6 text-center flex flex-col items-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <h4 className="text-xl font-semibold text-blue-900 mb-4">{person.title}</h4>
            {person.image && (
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 rounded-full overflow-hidden border-2 border-blue-400">
                <Image src={person.image} alt={person.name} fill className="object-cover" />
              </div>
            )}
            {person.name && <p className="font-medium text-blue-800">{person.name}</p>}
            <ul className="mt-2 text-sm text-blue-700 space-y-1">
              {person.info.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* TPRs Block - spans full row */}
        <motion.div
          className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-1 p-6 text-left col-span-full"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <h4 className="text-xl font-semibold text-blue-900 mb-4 text-center">TPRs Representatives</h4>
          <div className="max-h-80 overflow-y-auto pr-2 space-y-4 custom-scroll">
            {[
              ['Ashu Kumar', 'CSE', '+91 6387534747'],
              ['Sarthak Pandey', 'CIVIL', '+91 7897834921'],
              ['Laxmikant Verma', 'MECH', '+91 9415003041'],
              ['Gaurpad Shukla', 'IT', '+91 9936147550'],
              ['Jyoti Kushwaha', 'ECE', '+91 9555464008'],
              ['Shivam Kumar Bhatt', 'EE', '+91 6387382670'],
            ].map(([name, dept, phone], idx) => (
              <div key={idx} className="text-sm text-blue-800">
                <p className="font-medium">{name} ({dept})</p>
                <p>Mobile: {phone}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlacementTeam;
