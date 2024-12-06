import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, BrainCircuit, LogOut, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Separate navigation links for employers and job seekers
  const employerLinks = [
    { path: '/employer', label: 'Dashboard' },
    { path: '/employer/jobs', label: 'Job Posts' },
    { path: '/employer/candidates', label: 'Candidates' },
    { path: '/employer/analytics', label: 'Analytics' },
    { path: '/employer/rten', label: 'RTEN' }
  ];

  const jobSeekerLinks = [
    { path: '/jobseeker', label: 'Dashboard' },
    { path: '/jobseeker/jobs', label: 'Find Jobs' },
    { path: '/jobseeker/career-tools', label: 'Career Tools' },
    { path: '/jobseeker/network', label: 'Network' },
    { path: '/jobseeker/rten', label: 'RTEN' }
  ];

  const publicLinks = [
    { path: '/', label: 'Home' },
    { path: '/employer/solutions', label: 'For Employers' },
    { path: '/jobseeker/solutions', label: 'For Job Seekers' }
  ];

  const getNavLinks = () => {
    if (!isAuthenticated) return publicLinks;
    return user?.role === 'employer' ? employerLinks : jobSeekerLinks;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12">
                <BrainCircuit 
                  className="w-12 h-12 text-gray-900 dark:text-white" 
                  strokeWidth={1.5} 
                />
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-medium text-gray-900 dark:text-white mr-2">The</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Ara</span>
                <span className="text-2xl font-medium text-gray-900 dark:text-white ml-2">AI</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {getNavLinks().map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={user?.role === 'employer' ? '/employer/profile' : '/jobseeker/profile'}
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <User className="w-5 h-5" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="px-4 py-3 space-y-2">
              {getNavLinks().map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg text-base font-medium ${
                    isActive(link.path)
                      ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <div className="flex items-center space-x-4 px-4 py-2">
                  <Link
                    to={user?.role === 'employer' ? '/employer/profile' : '/jobseeker/profile'}
                    className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="block w-full px-4 py-2 text-base font-medium text-center text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};