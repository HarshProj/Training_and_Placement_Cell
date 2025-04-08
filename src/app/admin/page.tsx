'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AdminPage = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'add' | 'list' | 'orders'>('add');
  const router = useRouter();

  const logout = () => {
    sessionStorage.removeItem('authtoken');
    router.push('/recruiter_login');
  };

  useEffect(() => {
    const verify = async () => {
      const token = sessionStorage.getItem('authtoken');
      if (!token) {
        router.push('/recruiter_login');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/auth/verifyadmin', {
          headers: {
            Authtoken: token,
          },
        });

        if (res.data.success) {
          setLoading(false);
        } else {
          router.push('/recruiter_login');
        }
      } catch (error: any) {
        console.error('Admin verification failed:', error.response?.data || error.message);
        router.push('/recruiter_login');
      }
    };

    verify();
  }, [router]);

  if (loading) return <div className="p-4 text-center pt-16">Loading admin data...</div>;

  return (
    <div className="flex h-screen pt-16 bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div className="w-1/5 border-r p-4 bg-white shadow-md">
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab('add')}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === 'add'
                ? 'bg-blue-100 border-blue-500 text-blue-800'
                : 'hover:bg-gray-100 border-gray-300'
            }`}
          >
            ➕ Add Recruitment Data
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === 'list'
                ? 'bg-blue-100 border-blue-500 text-blue-800'
                : 'hover:bg-gray-100 border-gray-300'
            }`}
          >
            ✅ Visited Companies
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === 'orders'
                ? 'bg-blue-100 border-blue-500 text-blue-800'
                : 'hover:bg-gray-100 border-gray-300'
            }`}
          >
            ✅ Upcoming Drives
          </button>
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 border rounded bg-red-500 text-white hover:bg-red-600 transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'add' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">📤 Upload Recruitment Info</h2>

            <div className="border-dashed border-2 border-gray-300 p-6 mb-6 text-center text-gray-400 rounded-lg">
              Upload
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Company Name</label>
              <input type="text" placeholder="Type here" className="w-full border p-2 rounded" />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Job Description</label>
              <textarea
                placeholder="Write content here"
                className="w-full border p-2 rounded h-32"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1">Category</label>
                <select className="w-full border p-2 rounded">
                  <option>On Campus</option>
                  <option>Off Campus</option>
                  <option>Internship</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block font-medium mb-1">CTC Offered (in LPA)</label>
                <input type="number" placeholder="Eg: 10" className="w-full border p-2 rounded" />
              </div>
            </div>

            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              ADD
            </button>
          </div>
        )}

        {activeTab === 'list' && (
          <div className="text-xl text-gray-700">📦 Visited Companies section here...</div>
        )}
        {activeTab === 'orders' && (
          <div className="text-xl text-gray-700">🧾 Upcoming Drives section here...</div>
        )}
      </div>

      {/* Chatbot Floating Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
          title="Chat with us"
          onClick={() => alert('Chatbot coming soon!')}
        >
          💬
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
