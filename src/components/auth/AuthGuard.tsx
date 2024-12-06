import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: ('employer' | 'jobseeker')[];
  requireAuth?: boolean;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  allowedRoles = [],
  requireAuth = true
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  // Redirect to sign in if not authenticated
  if (!isAuthenticated && requireAuth) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Check role-based access
  if (isAuthenticated && user && allowedRoles.length > 0) {
    if (!allowedRoles.includes(user.role)) {
      // Redirect to appropriate dashboard based on role
      return <Navigate to={`/${user.role}`} replace />;
    }
  }

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && ['/signin', '/signup'].includes(location.pathname)) {
    return <Navigate to={`/${user?.role}`} replace />;
  }

  return <>{children}</>;
};