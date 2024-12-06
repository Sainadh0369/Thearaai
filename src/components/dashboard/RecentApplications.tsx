import React from 'react';
import { Clock, User } from 'lucide-react';

export const RecentApplications = () => {
  const applications = [
    {
      id: 1,
      candidate: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      time: '2h ago',
      status: 'shortlisted',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    },
    {
      id: 2,
      candidate: 'Michael Kim',
      role: 'Product Manager',
      time: '4h ago',
      status: 'reviewing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    {
      id: 3,
      candidate: 'Emily Davis',
      role: 'UI/UX Designer',
      time: '6h ago',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Applications</h2>
      <div className="space-y-4">
        {applications.map((application) => (
          <div
            key={application.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={application.image}
                alt={application.candidate}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{application.candidate}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {application.role}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  application.status === 'shortlisted'
                    ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                    : application.status === 'reviewing'
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
                    : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                }`}
              >
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {application.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
        View All Applications
      </button>
    </div>
  );
};