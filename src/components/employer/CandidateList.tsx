import React from 'react';
import { Star, Mail, Phone, MapPin, Briefcase, Building, CheckCircle } from 'lucide-react';

export const CandidateList = () => {
  const candidates = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      experience: '8 years',
      location: 'San Francisco, CA',
      company: 'TechCorp Inc.',
      rating: 4.8,
      status: 'Interview Scheduled',
      skills: ['React', 'TypeScript', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      match: 95
    },
    {
      id: 2,
      name: 'Michael Kim',
      role: 'Product Manager',
      experience: '6 years',
      location: 'New York, NY',
      company: 'InnovateTech',
      rating: 4.5,
      status: 'Application Review',
      skills: ['Product Strategy', 'Agile', 'Team Leadership'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      match: 88
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Recent Candidates</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and track candidate applications
          </p>
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100">
          View All
        </button>
      </div>

      <div className="space-y-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
          >
            <div className="flex space-x-4">
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{candidate.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{candidate.role}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{candidate.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{candidate.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-gray-400" />
                    <span>{candidate.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">
                {candidate.match}% Match
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">
                {candidate.status}
              </span>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium">
          Load More Candidates
        </button>
      </div>
    </div>
  );
};