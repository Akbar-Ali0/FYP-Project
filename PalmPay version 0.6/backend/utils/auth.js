// utils/auth.js

// Get token from localStorage
export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Get user data from localStorage
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = getAuthToken();
  const user = getUser();
  return !!(token && user);
};

// Remove authentication data (logout)
export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};

// API call with authentication header
export const authenticatedFetch = async (url, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` })
    }
  };

  const response = await fetch(url, config);
  
  // If token is invalid, redirect to login
  if (response.status === 401 || response.status === 403) {
    logout();
    window.location.href = '/signin';
    return;
  }
  
  return response;
};

// Verify token with backend
export const verifyToken = async () => {
  try {
    const response = await authenticatedFetch('http://localhost:5000/api/verify-token');
    
    if (response && response.ok) {
      const data = await response.json();
      return data.valid;
    }
    
    return false;
  } catch (error) {
    console.error('Token verification failed:', error);
    return false;
  }
};

// Get user profile from backend
export const getUserProfile = async () => {
  try {
    const response = await authenticatedFetch('http://localhost:5000/api/profile');
    
    if (response && response.ok) {
      const data = await response.json();
      return data.user;
    }
    
    return null;
  } catch (error) {
    console.error('Failed to get user profile:', error);
    return null;
  }
};