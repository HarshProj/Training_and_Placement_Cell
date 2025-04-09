'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ChatbotWidget from '../Components/ChatbotWidget';

const AdminPage = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'add' | 'list' | 'orders'>('add');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const router = useRouter();

  const availableRoles = [
    'SDE',
    'Data Analyst',
    'DevOps Engineer',
    'Product Manager',
    'UI/UX Designer',
    'QA Tester',
    'Machine Learning Engineer',
    'Technical Support',
    'BDE',
    'Others'
  ];

  const logout = () => {
    sessionStorage.removeItem('authtoken');
    router.push('/recruiter_login');
  };

  const handleRoleChange = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
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

            {/* Company Logo Upload */}
            <div className="mb-6">
              <label className="block font-medium mb-1 text-gray-700">Company Logo</label>
              <input
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
              />
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Company Name</label>
              <input
                type="text"
                placeholder="e.g. Google"
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Description</label>
              <textarea
                placeholder="Brief about the company or the drive"
                className="w-full border p-2 rounded h-28"
              />
            </div>

            {/* Roles Offered (with checkboxes and display) */}
            <div className="mb-6">
              <label className="block font-medium mb-2 text-gray-700">Roles Offered</label>

              {/* Selected Roles Display */}
              {selectedRoles.length > 0 ? (
                <div className="mb-4 flex flex-wrap gap-2">
                  {selectedRoles.map((role) => (
                    <span
                      key={role}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 mb-4">No roles selected</p>
              )}

              {/* Checkboxes */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableRoles.map((role) => (
                  <label key={role} className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={role}
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleChange(role)}
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span className="text-gray-700">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* CTC Offered */}
            <div className="mb-4">
              <label className="block font-medium mb-1">CTC Offered (in LPA)</label>
              <input
                type="number"
                placeholder="e.g. 12"
                className="w-full border p-2 rounded"
              />
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
          onClick={() => setIsChatbotOpen(prev => !prev)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
          title="Chat with Placement Bot"
        >
          💬
        </button>
      </div>
      {/* Chatbot Widget */}
      <ChatbotWidget isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
};

export default AdminPage;
