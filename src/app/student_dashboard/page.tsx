'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Update {
  _id: string;
  title: string;
  description: string;
  eligibleBranches: string[];
  createdAt: string;
  updatedAt: string;
}

export default function StudentDashboard() {
  const [loading, setLoading] = useState<boolean>(true);
  const [updates, setUpdates] = useState<Update[]>([]);
  const [studentInfo, setStudentInfo] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUpdates, setFilteredUpdates] = useState<Update[]>([]);
  const router = useRouter();

  // Fetch updates and student info
  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem('authtoken');
      if (!token) {
        router.push('/student_login');
        return;
      }

      try {
        // Fetch updates
        const updatesRes = await axios.get('http://localhost:5000/api/v1/updates', {
          headers: {
            Authtoken: token
          }
        });

        if (updatesRes.data.success) {
          setUpdates(updatesRes.data.data);
          setFilteredUpdates(updatesRes.data.data);
        }

        // You can add an endpoint to fetch student info if available
        // const studentRes = await axios.get('http://localhost:5000/api/auth/student', {
        //   headers: {
        //     Authtoken: token
        //   }
        // });
        // setStudentInfo(studentRes.data.student);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // If unauthorized, redirect to login
        router.push('/student_login');
      }
    };

    fetchData();
  }, [router]);

  // Filter updates when search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUpdates(updates);
    } else {
      const filtered = updates.filter(
        update => 
          update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          update.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUpdates(filtered);
    }
  }, [searchTerm, updates]);

  const handleLogout = () => {
    sessionStorage.removeItem('authtoken');
    router.push('/student_login');
  };

  // Check if an update is relevant to the student's branch
  // This is a placeholder - you would replace this with actual logic based on the student's branch
  const isRelevantToStudent = (update: Update): boolean => {
    // For now, consider all updates relevant
    // In a real app, you would check if the student's branch is in the eligibleBranches array
    return true;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">Loading your dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-green-600 to-teal-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">KNIT Placement Portal</div>
            </div>
            <div className="flex items-center">
              <button 
                onClick={handleLogout}
                className="bg-white text-green-700 hover:bg-gray-100 font-medium py-1.5 px-4 rounded-md transition duration-150"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
          <p className="text-gray-600">
            Stay updated with the latest placement drives and opportunities
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">Latest Updates</h2>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search updates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Updates List */}
          {filteredUpdates.length > 0 ? (
            <div className="space-y-6">
              {filteredUpdates.map((update) => (
                <div 
                  key={update._id} 
                  className={`border-l-4 ${
                    isRelevantToStudent(update) ? 'border-green-500' : 'border-gray-300'
                  } bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">{update.title}</h3>
                    <div className="text-xs text-gray-500">
                      {new Date(update.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <p className="mt-2 text-gray-600">{update.description}</p>
                  
                  {/* Eligible Branches Tags */}
                  {update.eligibleBranches && update.eligibleBranches.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">Eligible Branches:</p>
                      <div className="flex flex-wrap gap-1">
                        {update.eligibleBranches.map((branch) => (
                          <span
                            key={branch}
                            className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full"
                          >
                            {branch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No updates found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}