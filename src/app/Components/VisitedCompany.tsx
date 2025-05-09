'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Company {
  _id: string;
  name: string;
  description: string;
  image: string;
  ctc: number;
  roles_offered: string[]; // array with 1 item that's a stringified array
}

const VisitedCompany = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${URL}/api/admin/getcompanies`);
        const data = res.data.data;

        setCompanies(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching companies:', err);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) return <p className="text-center mt-10 text-blue-600">Loading companies...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">🏢 Companies Visited</h2>

      {companies.length === 0 ? (
        <p className="text-center text-gray-600">No companies found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => {
            let roles: string[] = [];

            if (
              Array.isArray(company.roles_offered) &&
              typeof company.roles_offered[0] === 'string'
            ) {
              try {
                roles = JSON.parse(company.roles_offered[0]);
              } catch (e) {
                console.error('Parsing roles failed:', e);
              }
            }

            return (
              <div
                key={company._id}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="h-40 flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-2xl p-4">
                  <img
                    src={`${URL}/images/${company.image}`}
                    alt={company.name}
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{company.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{company.description}</p>
                  <p className="text-sm font-medium text-gray-800 mb-4">💰 CTC: {company.ctc} LPA</p>
                  <div className="flex flex-wrap gap-2">
                    {roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VisitedCompany;
