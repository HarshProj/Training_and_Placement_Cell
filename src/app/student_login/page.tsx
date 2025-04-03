'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSignup) {
      alert(`Signup successful for ${name} (${rollNo}) with email: ${email}`);
      setIsSignup(false);
    } else {
      alert(`Login successful for ${email}`);
      router.push('/student-dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition duration-300 hover:scale-105 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isSignup ? 'Student Signup' : 'Student Login'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                required
              />
              <input
                type="text"
                placeholder="Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition hover:shadow-lg">
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <span 
            className="text-green-600 font-semibold cursor-pointer hover:underline" 
            onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login' : 'Signup'}
          </span>
        </p>
      </div>
    </div>
  );
}
