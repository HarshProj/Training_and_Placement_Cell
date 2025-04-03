'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RecruiterAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSignup) {
      alert(`Signup successful for ${company} with email: ${email}`);
      setIsSignup(false);
    } else {
      alert(`Login successful for ${email}`);
      router.push('/recruiter-dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition duration-300 hover:scale-105 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isSignup ? 'Recruiter Signup' : 'Recruiter Login'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 shadow-sm"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 shadow-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 shadow-sm"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition hover:shadow-lg">
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <span 
            className="text-blue-600 font-semibold cursor-pointer hover:underline" 
            onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login' : 'Signup'}
          </span>
        </p>
      </div>
    </div>
  );
}
