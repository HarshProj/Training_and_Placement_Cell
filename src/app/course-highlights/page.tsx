"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import KNITLogo from '../Assets/logo.png'; 
import KnitBackground from '../Assets/knit.jpeg';

// Define TypeScript interfaces for data structures
interface Department {
  id: string;
  name: string;
  description: string;
  vision?: string;
  mission?: string[];
  mtech?: boolean;
  phd?: boolean;
  mtechSpecialization?: string;
  seats?: number;
}

interface Specialization {
  dept: string;
  spec: string;
  seats: number;
}

interface ProgramType {
  type: string;
  duration: string;
  seats: string;
  specializations: Specialization[];
}

interface Program {
  id: string;
  title: string;
  duration?: string;
  branches?: string[];
  types?: ProgramType[];
  description?: string;
  departments?: string[];
}

const CourseHighlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('btech');

  const departments: Department[] = [
    {
      id: 'cse',
      name: 'Computer Science & Engineering',
      description: 'Computer Science & Engineering Department is the largest department of the Institute. It offers B.Tech. (Computer Science & Engineering), B.Tech. (Information Technology) and MCA Programmes. The Department is well equipped with high end computers, latest software and state of the art IT infrastructure. All computing resources are interconnected with high speed internet. The Campus wide Networking facility is also managed by the department. The Department has a well-qualified faculty and several well equipped laboratories catering to the needs of not only the CSE, IT and MCA students but also students from other Departments. The Present infrastructure is sufficient enough to carry out research and other academic work by UG and PG students.',
      vision: 'To be the center of excellence in the field of computer science and engineering and to produce competent, ethical professionals empowered with high impact research leading to sustainable innovation and entrepreneurship inculcating moral values and societal concern.',
      mtech: true,
      phd: true,
      mtechSpecialization: 'Computer Science & Engineering',
      seats: 18
    },
    {
      id: 'ee',
      name: 'Electrical Engineering',
      description: 'The Electrical Engineering Department is also one of the oldest departments of the Institute. The department has a well qualified faculty and technical supporting staff. All the laboratories of the department are well equipped with modern equipments. The department offers U.G. as well as P.G. (FullTime) and P.G. (PartTime) courses. The department has acquired state-of-the-art equipments through World Bank assisted TEQIP programme. The department is also developing Power Electronics Centre under the grant received from MHRD, New Delhi.',
      vision: 'To be supplier of globally competent, socially committed and value imbibed quality electrical engineers.',
      mtech: true,
      phd: true,
      mtechSpecialization: 'Power Electronics & Drives (Full-time) / Solid State Controls & Power Systems (Part-time)',
      seats: 18
    },
    {
      id: 'ece',
      name: 'Electronics Engineering',
      description: 'The Electronics Engineering Department offers both U.G. and P.G. (PartTime) courses. It has a well qualified faculty and technical supporting staff. All the laboratories of the department are well equipped with modern equipments. The department has also acquired stateoftheart equipments through World Bank assisted TEQIP programme.',
      vision: 'Develop competent technocrats who strive continuously in pursuit of professional excellence in the field of Electronics Engineering and generate new knowledge for society and industry.',
      mtech: true,
      phd: true,
      mtechSpecialization: 'Digital Electronics & Systems (Part-time)',
      seats: 13
    },
    {
      id: 'ce',
      name: 'Civil Engineering',
      description: 'The Civil Engineering Department is one of the oldest departments of the institute. The department has a well qualified faculty and technical supporting staff. The department offers U.G. as well as P.G. (FullTime) and P.G. (PartTime) courses. All the laboratories of the department are well equipped with modern equipments. The department has acquired state of the art equipments through World Bank assisted TEQIP programme.',
      vision: 'To prepare our students to become responsible, technically qualified professionals with high ethical and human values by providing adequate teaching-learning environment and exposure to research',
      mtech: true,
      phd: true,
      mtechSpecialization: 'Geotechnical & Geoenvironmental Engineering (Full-time) / Geotechnical Engineering & Water Resources Engineering (Part-time)',
      seats: 18
    },
    {
      id: 'me',
      name: 'Mechanical Engineering',
      description: 'The Mechanical Engineering Department offers comprehensive education and research opportunities in the field of mechanical engineering. With state-of-the-art laboratories and experienced faculty, the department prepares students for challenging careers in industry and academia.',
      vision: 'To develop competent technocrats who strive continuously in pursuit of professional excellence in the field of Mechanical Engineering and generate new knowledge for society and industry.',
      mission: [
        'Enable students to develop the skill to solve complex technical problems through innovative and group work exercise which enhances the entrepreneurial skill, employability, and multidisciplinary activities.',
        'To promote research culture by infusing scientific temper in the students and guiding them towards the R&D activities.',
        'To empower practicing engineers with the state of art and technology to meet the growing challenges of the industry.'
      ],
      mtech: true,
      phd: true,
      mtechSpecialization: 'Thermal Engineering (Full-time) / Machine Design & Industrial Systems Engineering (Part-time)',
      seats: 18
    },
    {
      id: 'ash',
      name: 'Applied Sciences and Humanities',
      description: 'The Applied Sciences and Humanities Department is an allied department which serves as a bedrock for the engineering departments of the Institute. The department takes care of core subjects like Mathematics, Physics, Chemistry and Professional communications. The department has competent and knowledgeable faculty and well equipped laboratories.',
      phd: true,
    }
  ];

  const programs: Program[] = [
    {
      id: 'btech',
      title: 'B.Tech Programs',
      duration: '4 Years (8 Semesters)',
      branches: [
        'Computer Science & Engineering',
        'Information Technology',
        'Electronics Engineering',
        'Electrical Engineering',
        'Civil Engineering',
        'Mechanical Engineering'
      ]
    },
    {
      id: 'mtech',
      title: 'M.Tech Programs',
      types: [
        {
          type: 'Full Time',
          duration: '4 Semesters',
          seats: '10 General + 5 Sponsored + 3 SC/ST',
          specializations: [
            { dept: 'Civil Engineering', spec: 'Geotechnical & Geoenvironmental Engineering', seats: 18 },
            { dept: 'Computer Science & Engineering', spec: '', seats: 18 },
            { dept: 'Electrical Engineering', spec: 'Power Electronics & Drives', seats: 18 },
            { dept: 'Mechanical Engineering', spec: 'Thermal Engineering', seats: 18 }
          ]
        },
        {
          type: 'Part Time',
          duration: '6 Semesters',
          seats: '10 General + 3 SC/ST',
          specializations: [
            { dept: 'Civil Engineering', spec: 'Geotechnical Engineering / Water Resources Engineering', seats: 13 },
            { dept: 'Electrical Engineering', spec: 'Solid State Controls / Power Systems', seats: 13 },
            { dept: 'Mechanical Engineering', spec: 'Machine Design / Industrial Systems Engineering', seats: 13 },
            { dept: 'Electronics Engineering', spec: 'Digital Electronics & Systems', seats: 13 }
          ]
        }
      ]
    },
    {
      id: 'mca',
      title: 'MCA Program',
      duration: '3 Years (6 Semesters)',
      description: 'The Master of Computer Applications (MCA) program is designed to meet the growing demand for qualified professionals in the IT industry. The program provides students with the technical skills and knowledge required to develop and implement computer applications.'
    },
    {
      id: 'phd',
      title: 'Doctoral Programs (Ph.D)',
      departments: [
        'Civil Engineering',
        'Computer Science & Engineering',
        'Electrical Engineering',
        'Electronics Engineering',
        'Mechanical Engineering',
        'Humanities and Applied Sciences'
      ],
      description: 'The Ph.D. programs aim to develop researchers and scientists who can contribute to the advancement of knowledge in their respective fields. The programs provide opportunities for cutting-edge research under the guidance of experienced faculty members.'
    }
  ];

  // Helper function to safely find program information with type checking
  const findProgram = (id: string): Program => {
    const program = programs.find(p => p.id === id);
    return program || { 
      id: '',
      title: '', 
      duration: '', 
      description: '',
      departments: [],
      types: []
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80">
        <div className="absolute inset-0">
          <Image
            src={KnitBackground}
            alt="KNIT Campus"
            className="w-full h-full object-cover brightness-50"
            fill
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20 relative mr-4">
              <Image
                src={KNITLogo}
                alt="KNIT Logo"
                className="w-full h-full object-contain"
                width={80}
                height={80}
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center">Course Highlights</h1>
          </div>
          <p className="text-lg md:text-xl text-center max-w-3xl px-4">
            Excellence in Education, Research and Innovation
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto pb-2 hide-scrollbar">
          <nav className="flex space-x-2 md:space-x-4">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-md whitespace-nowrap transition-colors duration-200 ${
                  activeTab === program.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {program.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="mt-6">
          {activeTab === 'btech' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Bachelor of Technology (B.Tech)</h2>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {findProgram('btech').duration}
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                The B.Tech program at our institute is designed to produce industry-ready engineers with strong foundational knowledge and practical skills in their chosen field of specialization.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Branches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {departments.filter(dept => dept.id !== 'ash').map((dept) => (
                  <div key={dept.id} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-gray-800">{dept.name}</h4>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Department Highlights</h3>
                <div className="space-y-6">
                  {departments.filter(dept => dept.id !== 'ash').map((dept) => (
                    <div key={dept.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-medium text-blue-600 mb-2">{dept.name}</h4>
                      <p className="text-gray-600 mb-4">{dept.description}</p>
                      {dept.vision && (
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-800 mb-1">Vision</h5>
                          <p className="text-gray-600 italic">{dept.vision}</p>
                        </div>
                      )}
                      {dept.mission && (
                        <div>
                          <h5 className="font-medium text-gray-800 mb-1">Mission</h5>
                          <ul className="list-disc list-inside text-gray-600">
                            {dept.mission.map((item, index) => (
                              <li key={index} className="italic">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mtech' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Master of Technology (M.Tech)</h2>
              
              <div className="space-y-8">
                {findProgram('mtech').types?.map((type, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{type.type} M.Tech</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {type.duration}
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        {type.seats}
                      </span>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Department
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Specialization
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Seats
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {type.specializations.map((spec, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {spec.dept}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {spec.spec || 'General'}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {spec.seats}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mca' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Master of Computer Applications (MCA)</h2>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {findProgram('mca').duration}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {findProgram('mca').description}
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Program Highlights</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Industry-relevant curriculum designed in consultation with IT industry experts</li>
                  <li>Hands-on experience with latest technologies and programming languages</li>
                  <li>Opportunity to work on real-world projects in collaboration with industry partners</li>
                  <li>Specialized tracks in emerging areas such as AI/ML, Data Science, and Cloud Computing</li>
                  <li>Strong emphasis on soft skills and professional development</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Department Information</h3>
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-medium text-blue-600 mb-2">Computer Science & Engineering Department</h4>
                  <p className="text-gray-600">
                    {departments.find(d => d.id === 'cse')?.description || ''}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'phd' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctoral Programs (Ph.D)</h2>
              
              <p className="text-gray-600 mb-6">
                {findProgram('phd').description}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Departments Offering Ph.D Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {findProgram('phd').departments?.map((dept, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-gray-800">{dept}</h4>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Research Areas</h3>
              <div className="space-y-6">
                {departments.filter(dept => dept.phd).map((dept) => (
                  <div key={dept.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium text-blue-600 mb-2">{dept.name}</h4>
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    {dept.vision && (
                      <div>
                        <h5 className="font-medium text-gray-800 mb-1">Vision</h5>
                        <p className="text-gray-600 italic">{dept.vision}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-blue-100">B.Tech Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">8</div>
              <div className="text-blue-100">M.Tech Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1</div>
              <div className="text-blue-100">MCA Program</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-blue-100">Ph.D Departments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Have Questions?</h2>
            <p className="text-gray-600 mt-2">Contact our admissions office for more information about our programs</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
              Contact Admissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;