import React, { useState } from 'react';
import { 
  Shield, 
  FileCheck, 
  Building, 
  GraduationCap, 
  Briefcase,
  AlertCircle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Download
} from 'lucide-react';

const BackgroundVerification = () => {
  const [filter, setFilter] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');

  const verifications = [
    {
      id: 1,
      candidate: {
        name: 'Sarah Chen',
        role: 'Senior Frontend Developer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      status: 'in-progress',
      progress: 75,
      checks: [
        { type: 'Identity', status: 'completed', result: 'verified' },
        { type: 'Education', status: 'completed', result: 'verified' },
        { type: 'Employment', status: 'in-progress', result: 'pending' },
        { type: 'Criminal', status: 'completed', result: 'clear' }
      ],
      startDate: '2024-03-01',
      eta: '2024-03-15'
    },
    {
      id: 2,
      candidate: {
        name: 'Michael Kim',
        role: 'Product Manager',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      status: 'pending',
      progress: 0,
      checks: [
        { type: 'Identity', status: 'pending', result: null },
        { type: 'Education', status: 'pending', result: null },
        { type: 'Employment', status: 'pending', result: null },
        { type: 'Criminal', status: 'pending', result: null }
      ],
      startDate: null,
      eta: null
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Background Verification</h1>
        </div>
        <p className="text-lg opacity-90">
          Comprehensive background checks and verification system
        </p>
      </div>

      {/* Verification Types */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            icon: <FileCheck className="w-6 h-6" />,
            title: 'Identity Verification',
            description: 'Government ID & documents'
          },
          {
            icon: <GraduationCap className="w-6 h-6" />,
            title: 'Education Check',
            description: 'Academic credentials'
          },
          {
            icon: <Building className="w-6 h-6" />,
            title: 'Employment History',
            description: 'Previous employment'
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: 'Criminal Check',
            description: 'Criminal record search'
          }
        ].map((type, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg w-fit text-gray-900 dark:text-gray-100 mb-4">
              {type.icon}
            </div>
            <h3 className="font-semibold mb-2">{type.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {type.description}
            </p>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search candidates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 outline-none bg-transparent"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'pending', 'in-progress', 'completed'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === type
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Verification List */}
      <div className="space-y-6">
        {verifications.map((verification) => (
          <div
            key={verification.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={verification.candidate.image}
                  alt={verification.candidate.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{verification.candidate.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {verification.candidate.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    verification.status === 'completed'
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                      : verification.status === 'in-progress'
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {verification.status.charAt(0).toUpperCase() + verification.status.slice(1)}
                </span>
                {verification.status === 'pending' ? (
                  <button className="px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100">
                    Start Verification
                  </button>
                ) : (
                  <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100">
                    View Details
                  </button>
                )}
              </div>
            </div>

            {verification.status !== 'pending' && (
              <>
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Verification Progress</span>
                    <span>{verification.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-gray-900 dark:bg-gray-100 rounded-full"
                      style={{ width: `${verification.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  {verification.checks.map((check, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{check.type}</span>
                        {check.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                        ) : (
                          <Clock className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                        )}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {check.result || 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div>Started: {verification.startDate || 'Not started'}</div>
                  <div>ETA: {verification.eta || 'TBD'}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundVerification;