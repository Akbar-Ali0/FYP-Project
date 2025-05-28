// pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getUser, logout, getUserProfile } from '../utils/auth';
import { getUser, logout, getUserProfile } from '../../../backend/utils/auth';


export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        // Get user from localStorage first
        const localUser = getUser();
        setUser(localUser);

        // Optionally fetch fresh user data from backend
        const profileData = await getUserProfile();
        if (profileData) {
          setUser(profileData);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  const handleLogout = async () => {
    try {
      // Optional: Call backend logout endpoint
      await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage and redirect
      logout();
      navigate('/signin');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
          
          <div className="px-6 py-4">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Welcome back!</h2>
              
              {user && (
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <h3 className="font-semibold text-teal-800 mb-2">User Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Name:</span> {user.name}</p>
                    <p><span className="font-medium">Email:</span> {user.email}</p>
                    <p><span className="font-medium">Role:</span> {user.role}</p>
                    <p><span className="font-medium">Member since:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Quick Actions</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li><a href="#" className="hover:underline">View Profile</a></li>
                  <li><a href="#" className="hover:underline">Account Settings</a></li>
                  <li><a href="#" className="hover:underline">Preferences</a></li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Recent Activity</h3>
                <p className="text-sm text-green-700">No recent activity to display</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-2">Notifications</h3>
                <p className="text-sm text-purple-700">No new notifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}