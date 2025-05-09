'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_API_URL;

export default function RecruiterAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post<{ msg: string; authtoken: string; success: boolean }>(
        `${URL}/api/auth/adminlogin`,
        { email, password }
      );

      if (res.data.success) {
        // alert('Login successful!');
        sessionStorage.setItem('authtoken', res.data.authtoken);
        router.push('/admin');
      } else {
        alert("invalid credentials");
      }
    } catch (err: any) {
      console.error('Error during login:', err);
      alert(err.response?.data?.message || 'Something went wrong. Please try again.');
    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition duration-300 hover:scale-105 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="username"
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
