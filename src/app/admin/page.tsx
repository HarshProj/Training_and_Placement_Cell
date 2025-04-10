'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ChatbotWidget from '../Components/ChatbotWidget';

// Define types for our data
interface Update {
  _id: string;
  title: string;
  description: string;
  eligibleBranches: string[];
  createdAt: string;
  updatedAt: string;
}

interface UpdateFormData {
  title: string;
  description: string;
}

const AdminPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'add' | 'list' | 'orders' | 'updates'>('add');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);
  
  // Updates state
  const [updates, setUpdates] = useState<Update[]>([]);
  const [updateFormData, setUpdateFormData] = useState<UpdateFormData>({
    title: '',
    description: ''
  });
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [editingUpdateId, setEditingUpdateId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

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

  const availableBranches = [
    'Computer Science And Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Electronics Engineering',
    'Information Technology',
    'Civil Engineering',
    'MCA'
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

  const handleBranchChange = (branch: string) => {
    setSelectedBranches((prev) =>
      prev.includes(branch)
        ? prev.filter((b) => b !== branch)
        : [...prev, branch]
    );
  };

  // Handle input change for update form
  const handleUpdateInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdateFormData({
      ...updateFormData,
      [name]: value
    });
  };

  // Fetch all updates
  const fetchUpdates = async () => {
    try {
      const token = sessionStorage.getItem('authtoken');
      const response = await axios.get('http://localhost:5000/api/v1/updates', {
        headers: {
          Authtoken: token
        }
      });
      
      if (response.data.success) {
        setUpdates(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching updates:', error);
    }
  };

  // Submit update form
  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = sessionStorage.getItem('authtoken');
    
    try {
      const updateData = {
        ...updateFormData,
        eligibleBranches: selectedBranches
      };
      
      if (isEditing && editingUpdateId) {
        // Update existing update
        await axios.put(
          `http://localhost:5000/api/v1/updates/${editingUpdateId}`,
          updateData,
          {
            headers: {
              Authtoken: token
            }
          }
        );
      } else {
        // Create new update
        await axios.post(
          'http://localhost:5000/api/v1/updates/create',
          updateData,
          {
            headers: {
              Authtoken: token
            }
          }
        );
      }
      
      // Reset form and refresh updates
      resetUpdateForm();
      fetchUpdates();
    } catch (error) {
      console.error('Error submitting update:', error);
    }
  };

  // Delete an update
  const handleDeleteUpdate = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this update?')) {
      try {
        const token = sessionStorage.getItem('authtoken');
        await axios.delete(`http://localhost:5000/api/v1/updates/${id}`, {
          headers: {
            Authtoken: token
          }
        });
        
        // Refresh updates
        fetchUpdates();
      } catch (error) {
        console.error('Error deleting update:', error);
      }
    }
  };

  // Edit an update
  const handleEditUpdate = (update: Update) => {
    setUpdateFormData({
      title: update.title,
      description: update.description
    });
    setSelectedBranches(update.eligibleBranches);
    setEditingUpdateId(update._id);
    setIsEditing(true);
    setActiveTab('updates');
  };

  // Reset update form
  const resetUpdateForm = () => {
    setUpdateFormData({
      title: '',
      description: ''
    });
    setSelectedBranches([]);
    setEditingUpdateId(null);
    setIsEditing(false);
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
          // Fetch updates after successful verification
          fetchUpdates();
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
            onClick={() => setActiveTab('updates')}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === 'updates'
                ? 'bg-blue-100 border-blue-500 text-blue-800'
                : 'hover:bg-gray-100 border-gray-300'
            }`}
          >
            📢 Manage Updates
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
        
        {activeTab === 'updates' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">
              {isEditing ? '✏️ Edit Update' : '📢 Add New Update'}
            </h2>
            
            {/* Update Form */}
            <form onSubmit={handleUpdateSubmit} className="mb-10">
              {/* Title */}
              <div className="mb-4">
                <label className="block font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={updateFormData.title}
                  onChange={handleUpdateInputChange}
                  placeholder="e.g. Campus Drive Announcement"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              
              {/* Description */}
              <div className="mb-4">
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={updateFormData.description}
                  onChange={handleUpdateInputChange}
                  placeholder="Detailed information about the update"
                  className="w-full border p-2 rounded h-28"
                  required
                />
              </div>
              
              {/* Eligible Branches */}
              <div className="mb-6">
                <label className="block font-medium mb-2 text-gray-700">Eligible Branches</label>
                
                {/* Selected Branches Display */}
                {selectedBranches.length > 0 ? (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {selectedBranches.map((branch) => (
                      <span
                        key={branch}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {branch}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 mb-4">No branches selected</p>
                )}
                
                {/* Checkboxes */}
                <div className="grid grid-cols-2 gap-3">
                  {availableBranches.map((branch) => (
                    <label key={branch} className="inline-flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={branch}
                        checked={selectedBranches.includes(branch)}
                        onChange={() => handleBranchChange(branch)}
                        className="accent-green-600 w-4 h-4"
                      />
                      <span className="text-gray-700">{branch}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  {isEditing ? 'Update' : 'Add'}
                </button>
                
                {isEditing && (
                  <button 
                    type="button" 
                    onClick={resetUpdateForm}
                    className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
            
            {/* Updates List */}
            <h3 className="text-xl font-semibold mb-4 text-blue-700 border-t pt-6">Current Updates</h3>
            
            {updates.length > 0 ? (
              <div className="space-y-4">
                {updates.map((update) => (
                  <div key={update._id} className="border rounded-lg p-4 bg-white shadow-sm">
                    <div className="flex justify-between">
                      <h4 className="font-semibold text-lg">{update.title}</h4>
                      <div className="space-x-2">
                        <button 
                          onClick={() => handleEditUpdate(update)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          ✏️ Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteUpdate(update._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                    
                    <p className="my-2 text-gray-600">{update.description}</p>
                    
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mb-1">Eligible Branches:</p>
                      <div className="flex flex-wrap gap-2">
                        {update.eligibleBranches.map((branch) => (
                          <span 
                            key={branch} 
                            className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                          >
                            {branch}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3 text-xs text-gray-400">
                      Last updated: {new Date(update.updatedAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No updates found. Add your first update above.</p>
            )}
          </div>
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