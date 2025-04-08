'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function StudentAuth() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();
  const [isLoading,setisLoading]=useState(false);
  // Step 1: Generate OTP
  const handleSendOtp = async () => {
    if (!email.endsWith('@knit.ac.in')) {
      alert('Please use your @knit.ac.in email address.');
      return;
    }
  
    try {
      setisLoading(true);
  
      // Step 1: Generate OTP
      const otpRes = await axios.get(`http://localhost:5000/api/auth/generateotp?email=${email}`);
      if (otpRes.status === 200 && otpRes.data.code) {
        const otp = otpRes.data.code;
  
        // Step 2: Send email via /registermail
        const mailRes = await axios.post(`http://localhost:5000/api/auth/registermail`, {
          username: email.split('@')[0],   // You can replace this with actual name input if available
          useremail: email,
          text: otp,
          subject: 'Your OTP Code'
        });
  
        if (mailRes.status === 200) {
          alert('OTP sent to your email!');
          setIsOtpSent(true);
        } else {
          alert('Failed to send OTP email.');
        }
  
      } else {
        alert('Failed to generate OTP.');
      }
  
    } catch (err) {
      console.error("OTP Error:", err);
      alert('Error sending OTP. Try again.');
    }
  
    setisLoading(false);
  };
  

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/auth/verifyotp?code=${otp}&email=${email}`);
      if (res.status === 201) {
        alert('OTP Verified!');
        setIsOtpVerified(true);
      } else {
        alert('Invalid OTP');
      }
    } catch (err) {
      alert('Error verifying OTP.');
      console.error(err);
    }
  };

  // Step 3: Login
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isOtpVerified) {
      alert('Please verify your OTP first!');
      return;
    }

    try {
      const res = await axios.post<{ msg: string; authtoken: string; success: boolean }>(
        'http://localhost:5000/api/auth/login',
        { email }
      );
      console.log(res);
      if (res.data.success) {
        sessionStorage.setItem('authtoken', res.data.authtoken);
        router.push('/');
      } else {
        alert('Login failed.');
      }
    } catch (err: any) {
      console.error('Login Error:', err);
      alert(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition duration-300 hover:scale-105 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isSignup ? 'Student Signup' : 'Student Login'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsOtpSent(false);
              setIsOtpVerified(false);
              setOtp('');
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
            required
          />
          {!isOtpSent && (
            <button
              type="button"
              disabled={isLoading}
              onClick={handleSendOtp}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition hover:shadow-lg"
            >
              {isLoading?"Sending Otp...":"Get OTP"}
            </button>
          )}

          {isOtpSent && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition hover:shadow-lg"
              >
                Verify OTP
              </button>
            </>
          )}

          <button
            type="submit"
            disabled={!isOtpVerified}
            className={`w-full ${
              isOtpVerified ? 'bg-gradient-to-r from-green-500 to-teal-500' : 'bg-gray-300'
            } text-white py-3 rounded-lg font-semibold shadow-md transition hover:shadow-lg`}
          >
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700">
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <span
            className="text-green-600 font-semibold cursor-pointer hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? 'Login' : 'Signup'}
          </span>
        </p>
      </div>
    </div>
  );
}
