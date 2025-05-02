'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [company, setCompany] = useState('');
  const [employees, setEmployees] = useState<any[]>([]);

  const fetchEmployees = async () => {
    const res = await fetch('http://localhost:5000/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ company }),
    });

    const data = await res.json();
    console.log(data);
    setEmployees(data);
  };

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">PDL Employee Finder</h1>
      <input
        type="text"
        placeholder="Enter company name (e.g. Google)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={fetchEmployees}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Search
      </button>

      <ul className="mt-4">
        {employees?.map((emp, i) => (
          <li key={i} className="border p-2 my-2">
            <p>
              <strong>{emp.full_name}</strong> – {emp.job_title} at {emp.job_company_name}
            </p>
            <p>Email: {emp.work_email || emp.email || 'N/A'}</p>

            <p>Location: {emp.location_name || 'Unknown'}</p>
            <p>Linkedin: <a
  href={emp.linkedin_url?.startsWith('http') ? emp.linkedin_url : `https://${emp.linkedin_url}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline"
>
  {emp.linkedin_url || 'Unknown'}
</a></p>
          </li>
        ))}
      </ul>
    </main>
  );
}
