"use client";
import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";

interface Recruiter {
  name: string;
  logo: string;
  website: string;
  description: string;
  roles: string[];
  package: string;
  candidatesHired: number;
  images: string[];
}

const recruiters: Recruiter[] = [
  {
    name: "TCS",
    logo: "/logos/tcs.jpg",
    website: "https://www.tcs.com",
    description: "Tata Consultancy Services (TCS) is a global leader in IT services and consulting.",
    roles: ["Software Engineer", "System Analyst", "Data Scientist"],
    package: "3.5 - 9 LPA",
    candidatesHired: 50,
    images: ["/tcs/p1.png", "/tcs/p2.jpg", "/tcs/p3.png"],
  },
  {
    name: "Ittiam",
    logo: "/logos/ittiam.png",
    website: "https://www.ittiam.com",
    description: "Ittiam Systems is a premier provider of multimedia solutions and IP services.",
    roles: ["Software Engineer", "Multimedia Developer", "Video Compression Engineer"],
    package: "6 - 12 LPA",
    candidatesHired: 20,
    images: ["/drive/ittiam1.jpg", "/drive/ittiam2.jpg"],
  },
  {
    name: "Adrosonic",
    logo: "/logos/adrosonic.png",
    website: "https://www.adrosonic.com",
    description: "Adrosonic is a technology consultancy specializing in digital transformation and automation.",
    roles: ["Full Stack Developer", "QA Engineer", "DevOps Specialist"],
    package: "4 - 8 LPA",
    candidatesHired: 15,
    images: ["/drive/adrosonic1.jpg", "/drive/adrosonic2.jpg"],
  },
  {
    name: "Infosys",
    logo: "/logos/infosys.png",
    website: "https://www.infosys.com",
    description: "Infosys is a multinational IT services company known for innovation and digital transformation.",
    roles: ["Frontend Developer", "Backend Engineer", "AI Engineer"],
    package: "5 - 10 LPA",
    candidatesHired: 60,
    images: ["/drive/infosys1.jpg", "/drive/infosys2.jpg", "/drive/infosys3.jpg"],
  },
  {
    name: "Wipro",
    logo: "/logos/wipro.png",
    website: "https://www.wipro.com",
    description: "Wipro Limited is a leading global information technology company providing business solutions.",
    roles: ["Cloud Engineer", "Cybersecurity Analyst", "Business Analyst"],
    package: "4 - 9 LPA",
    candidatesHired: 40,
    images: ["/drive/wipro1.jpg", "/drive/wipro2.jpg"],
  },
];

const PastRecruiters = () => {
  const [selectedCompany, setSelectedCompany] = useState<Recruiter | null>(recruiters[0]);

  return (
  <>
    {/* <Navbar /> */}
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-xl p-6 overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Past Recruiters</h2>
        <ul className="space-y-3">
          {recruiters.map((company) => (
            <li
              key={company.name}
              className={`p-3 cursor-pointer rounded-lg transition-all ${
                selectedCompany?.name === company.name
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => setSelectedCompany(company)}
            >
              {company.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content with its own scrollbar */}
      <main className="w-3/4 p-4 overflow-y-auto max-h-screen">
        {selectedCompany ? (
          <>
            {/* Company Info */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h1 className="text-4xl font-bold text-blue-700 mb-4">{selectedCompany.name}</h1>
              <a href={selectedCompany.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={selectedCompany.logo}
                  alt={selectedCompany.name}
                  className="w-40 my-6 mx-auto"
                />
              </a>
              <p className="text-lg text-gray-700 mb-6">{selectedCompany.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Roles */}
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Roles Available</h3>
                  <ul className="space-y-2">
                    {selectedCompany.roles.map((role, index) => (
                      <li key={index} className="p-2 bg-blue-100 rounded-md text-blue-800">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package & Candidates */}
                <div className="bg-green-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Hiring Details</h3>
                  <p className="text-lg font-medium text-gray-800 mb-3">
                    💰 Package: <span className="text-green-700">{selectedCompany.package}</span>
                  </p>
                  <p className="text-lg font-medium text-gray-800">
                    👥 Candidates Hired:{" "}
                    <span className="text-green-700">{selectedCompany.candidatesHired}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Drive Day Pictures */}
            <div className="bg-white p-8 mt-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">📸 Drive Day Memories</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedCompany.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Drive day ${index + 1}`}
                    className="rounded-lg shadow-md hover:scale-105 transform transition duration-300 object-contain h-40 w-full"
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Select a company to see details</p>
        )}
      </main>
    </div>

    </> 
  );
};

export default PastRecruiters;
