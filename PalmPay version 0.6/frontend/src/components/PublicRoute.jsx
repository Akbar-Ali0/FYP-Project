// components/PublicRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, verifyToken } from '../../../backend/utils/auth';

const PublicRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      // First check if token exists in localStorage
      if (!isAuthenticated()) {
        setIsLoading(false);
        return;
      }

      // Then verify token with backend
      const tokenValid = await verifyToken();
      setIsValid(tokenValid);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  // If user is authenticated, redirect to dashboard
  if (isValid) {
    return <Navigate to="/dashboard" replace />;
  }

  // If not authenticated, show the public page (signin/signup)
  return children;
};

export default PublicRoute;