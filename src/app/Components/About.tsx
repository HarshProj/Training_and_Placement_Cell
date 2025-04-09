'use client';

import React from 'react';
import Image from 'next/image';
import RK from '../Assets/R.K.Upadhyay.png';
import DL from '../Assets/D.L.Gupta.png';
import Marquee from 'react-fast-marquee';

export const About: React.FC = () => {
  return (
    <div className="min-h-[100vh] max-h-full pt-12">
      <div className="w-full pt-4 relative">
        <div className="w-full bg-orange-300 flex justify-center h-[130px]">
          <div className="bg-white w-[400px] h-[160px] py-1 px-5 shadow-lg rounded-md top-0 absolute">
            <h4 className="text-xl">Brochure</h4>
            <p>Training and Placement</p>
            <p className="text-gray-400">2024-2025</p>
            <div className="cursor-pointer hover:text-blue-400 inline bottom-12 absolute">
              <a href="/Placement-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                Open
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 items-center mt-20">
        <div className="mb-5">
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>
        <div className="w-[60%] h-[1px] bg-black" />

        <p className="w-[80%] mt-2 leading-loose text-sm shadow-md p-5 rounded-md">
          We, the Training and Placement Office, aim to create an encouraging atmosphere for students by
          providing them ample prospects of building competencies in sync with their dream careers,
          thereby ensuring a smooth landing into the professional world. With innovative training methods,
          skill assessment programs, and continuous evaluation of student interests, the Training and Placement
          Office offers services and resources that assist students in competence development, career planning,
          and job search. It has a dedicated team of staff and student volunteers to assist the talent acquisition
          team for the smooth conduct of campus recruitment processes.{' '}
          <a className="text-blue-400 cursor-pointer hover:underline">Read More</a>
          <br />
          We extend a cordial invitation to you to participate in the Campus Placement Drive for the season 2024–25
          and hope that you will find the best talent you are looking for.
        </p>
      </div>

      {/* Profiles Section */}
      <div className="flex flex-col justify-center items-center gap-10 my-10">
        {/* Director profile */}
        <div className="shadow-lg w-[280px] h-[400px] flex flex-col items-center">
          <div className="h-[70%] w-full flex justify-center items-center">
            <div className="border rounded-full w-[80%] h-[80%]">
              <Image className="h-full w-full bg-cover rounded-full" src={RK} alt="Director" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-center">Prof. R.K. Upadhyay</h2>
            <p className="text-gray-400 text-xl text-center">Director</p>
          </div>
        </div>

        {/* Professor In-Charge profile */}
        <div className="shadow-lg w-[280px] h-[400px] flex flex-col items-center">
          <div className="h-[70%] w-full flex justify-center items-center">
            <div className="border rounded-full w-[80%] h-[80%]">
              <Image className="h-full w-full bg-cover rounded-full" src={DL} alt="Professor In-Charge" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-center">Prof. D.L. Gupta</h2>
            <p className="text-gray-400 text-xl text-center">
              Professor In-Charge <br /> (Career Development Cell)
            </p>
          </div>
        </div>
      </div>

      {/* Past Recruiters Section */}
      <div className="w-full flex flex-col gap-5 items-center mt-10 mb-8">
        <div className="mb-2">
          <h1 className="text-3xl font-bold">Past Recruiters</h1>
        </div>
        <div className="w-[60%] h-[1px] bg-black" />

        <div className="w-[80%] h-[200px] border">
          <Marquee className="w-full h-full">
            {[
              { src: '/logos/tcs.jpg', name: 'TCS' },
              { src: '/logos/ittiam.jpg', name: 'Ittiam' },
              { src: '/logos/adrosonic.png', name: 'Adrosonic' },
              { src: '/logos/prolift.jpg', name: 'Prolift' },
              { src: '/logos/altdigital.jpg', name: 'Altdigital' },
              { src: '/logos/express.jpg', name: 'American Express' },
              { src: '/logos/academor.jpg', name: 'Academor' },
            ].map((company, index) => (
              <div key={index} className="flex flex-col items-center p-5 mx-5">
                <img src={company.src} className="w-32 h-32 object-contain" alt={company.name} />
                <p className="text-center">{company.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <hr />
    </div>
  );
};
