import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';

export const openPositions = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
  },
];

export const JobListings = () => {
  return (
    <section id="positions" className="max-w-7xl mx-auto px-4">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold">Open Positions</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Join our team and make an impact
        </p>
      </div>

      <div className="space-y-4">
        {openPositions.map((position) => (
          <div
            key={position.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <Briefcase className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{position.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {position.department} • {position.location}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">
                  {position.type}
                </span>
                <Link
                  to={`/careers/${position.id}`}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};