'use client';
import React from 'react';
import Image from 'next/image';
import KNITLogo from '../Assets/KNIT-Sultanpur-Logo.webp';
import RKUpadhyay from '../Assets/R.K.Upadhyay.png';
import DLGupta from '../Assets/D.L.Gupta.png';
import KnitImage1 from '../Assets/knit.jpeg';
import KnitImage2 from '../Assets/knit2.jpeg';
import Logo from '../Assets/logo.png';

const AboutPage = () => {
  return (
    <div className="pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="relative h-full w-full">
          <Image 
            src={KnitImage1}
            alt="KNIT Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <div className="w-24 h-24 relative mb-4">
            <Image 
              src={KNITLogo} 
              alt="KNIT Sultanpur Logo" 
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-yellow-400">KNIT Sultanpur</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
            Centre of Excellence in the field of Technical Education since 1976
          </p>
          <p className="font-serif italic text-yellow-300 mt-6 text-xl">
            योगः कर्मसु कौशलम्
          </p>
        </div>
      </section>

      {/* Institute Overview Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">About the Institute</h2>
            <p className="text-gray-700 mb-4">
              Kamla Nehru Institute of Technology is one of the most prestigious Institutes in Northern India and has been a
              Centre of Excellence in the field of Technical Education since its inception in 1976. The Institute aims to impart
              high-quality Technical Education to students.
            </p>
            <p className="text-gray-700 mb-4">
              The infrastructure and technical facilities enable the students to meet the requirements of the modern technical world.
              Institute provides facilities that are arguably at par with the industrial requirements.
            </p>
            <p className="text-gray-700">
              The Institute was established by considering the need for technical education and training. The Institute is also
              committed to providing quality education through its courses and programs in accordance with the latest
              international standards, which are recognized by all stakeholders as being a prestigious and reputed
              institution for imparting quality technical education in India. Our establishment takes pride in the fact that it is
              both AICTE and UGC approved, and we are currently in the pipeline for consideration in the NIRF Ranking.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-80 w-full max-w-md rounded-lg shadow-xl overflow-hidden">
              <Image 
                src={KnitImage2} 
                alt="KNIT Campus" 
                fill 
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Mission & Vision</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 relative">
                  <Image 
                    src={Logo} 
                    alt="KNIT Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700">
                The Kamla Nehru Institute of Technology (KNIT), Sultanpur is a leading technical educational institution that
                aims at providing the nation with globally competitive, professionally well-qualified technical manpower of the
                highest standard. The institute offers world-class academic programs in engineering, technology, and management.
                This further enriches an attempt to allow students to develop their skills through hands-on learning and practical
                experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 relative">
                  <Image 
                    src={Logo} 
                    alt="KNIT Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700">
                KNIT's vision is to be a supplier of globally competitive, professionally well-qualified technical manpower of
                world-class standard for contributing to the need of the nation by evolving a sustainable, flexible, and dynamic
                system responsive to the aspirations of the industry and to be a resource centre for generation and dissemination
                of technologies for socio-economic development of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
              <Image 
                src={RKUpadhyay} 
                alt="Director of KNIT - Prof. R. K. Upadhyay" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Director's Message</h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-gray-700">
              <p className="mb-4">
                The Kamla Nehru Institute of Technology Sultanpur is a leading engineering institute in India. KNIT Sultanpur
                was established in 1976 and has since been consistently nurturing young and talented minds, giving shape to their
                innovations, notions and thoughts.
              </p>
              <p className="mb-4">
                KNIT Sultanpur has a proud legacy of producing exceptional engineers who have made substantial
                contributions, both nationally and internationally. The institute's robust recruitment process draws heavily
                upon the efforts and expertise of its accomplished alumni. This symbiotic relationship keeps the institute's
                recruiting experience at the forefront, facilitating the continued growth of its global community of engineers.
              </p>
              <p>
                On behalf of KNIT Sultanpur, I extend a warm invitation to our esteemed recruiters to tap into the
                wealth of talent that graces our institution. With 47 years of excellence, KNIT Sultanpur is poised to
                continue shaping the future of engineering and innovation, both in India and beyond.
              </p>
            </blockquote>
            <div className="mt-4 text-right">
              <p className="font-semibold text-blue-900">Prof. R. K. Upadhyay</p>
              <p className="text-gray-600 text-sm">Director, KNIT Sultanpur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professor In-Charge's Message */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
                <Image 
                  src={DLGupta} 
                  alt="Professor In-Charge of CDC - Prof. D.L. Gupta" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Professor In-Charge's Message</h2>
              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-gray-700">
                <p className="mb-4">
                  Kamla Nehru Institute of Technology is a flagship government autonomous college affiliated to the
                  Dr. APJ Abdul Kalam Technical University. It has a very good reputation all over the nation and the alumni of
                  KNIT are spread all over the globe.
                </p>
                <p className="mb-4">
                  KNIT is one of the most preferred institutes for recruitment to many MNCs. The most desired
                  attributes of the students of our institute are their ability to grasp the information quickly, dynamism
                  and their versatility. Our Alumni have achieved tremendous success in all spheres and this bears
                  a graceful testimony to our efforts.
                </p>
                <p>
                  The institute offers campus placement for students graduating with a Bachelor of Technology (B.Tech) and Master
                  of Computer Application (MCA). KNIT Sultanpur has fine and efficient facilities for campus
                  recruiters, and we are pleased to make them available to the participating organizations.
                </p>
              </blockquote>
              <div className="mt-4 text-right">
                <p className="font-semibold text-blue-900">Prof. D.L. Gupta</p>
                <p className="text-gray-600 text-sm">Professor In-Charge, Career Development Cell</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Institute at a Glance</h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">1976</div>
            <div className="text-gray-600 font-medium">Established</div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">47+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600 font-medium">B.Tech Programs</div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">80+</div>
            <div className="text-gray-600 font-medium">Companies Visit</div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <div className="w-20 h-20 relative mx-auto mb-6">
            <Image 
              src={KNITLogo} 
              alt="KNIT Sultanpur Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-6">Building Tomorrow's Leaders</h3>
          <p className="text-lg">
            Role of academia has always been to nurture brilliant minds and provide them an appropriate exposure to make them
            capable of shaping future. At Kamla Nehru Institute of Technology, we take pride in inculcating dexterity in our
            students with unwavering commitment in alignment with technological advancements and ever evolving corporate
            landscape.
          </p>
          <p className="text-lg mt-4">
            Through TPO (Training and Placement office) we leverage the opportunity to foster collaboration that empowers
            organization, students and be conducive to nation building.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;