'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  organization: string;
  phone: string;
  rating: number;
  feedback: string;
}

interface ResponseData {
  data: {
    _id: string;
    createdAt: string;
    // Add other response properties as needed
  };
  message?: string;
}

export default function RecruiterFeedback() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization: '',
    phone: '',
    rating: 3,
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? parseInt(value) : value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/recruiter/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json() as ResponseData;
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Store the response data (contains ID, createdAt, etc.)
      setResponseData(data);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to submit feedback. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div key={i} className="star-container inline-block mx-1">
          <input
            type="radio"
            id={`star-${i}`}
            name="rating"
            value={i}
            checked={formData.rating === i}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={`star-${i}`}
            className={`text-3xl cursor-pointer ${
              i <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </label>
        </div>
      );
    }
    return stars;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 pt-24 pb-10">
      <div className="max-w-3xl mx-auto">
        {!submitted ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
              <h1 className="text-3xl font-bold">Recruiter Feedback</h1>
              <p className="mt-2 opacity-90">Help us improve our candidates and placement process</p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
                <p className="text-blue-800">
                  You can either fill out this form below or use our{' '}
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeYgEJH3g7C0Ombt-qOUqXsp_-MBIo0_6lJopx7G4QQsIS5IQ/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 underline hover:text-blue-800"
                  >
                    Google Form
                  </a>
                  .
                </p>
              </div>
              
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
                  <p className="text-red-800">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Overall Performance of Candidate *</label>
                    <div className="flex items-center justify-center my-2">
                      {renderStars()}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 px-2">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">Additional Feedback</label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      placeholder="Please share any additional comments or suggestions..."
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ${
                      loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:shadow-lg'
                    }`}
                  >
                    {loading ? 
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div> : 'Submit Feedback'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center transition-all duration-300 transform scale-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your feedback has been submitted successfully. We appreciate your time and valuable input.
            </p>
            
            {responseData && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Submission Details:</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Confirmation ID:</span> {responseData.data._id}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Date Submitted:</span> {formatDate(responseData.data.createdAt)}
                </p>
              </div>
            )}
            
            <Link href="/">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Return Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}