import React, { useState } from 'react';
import { Star, Mail, Phone, MapPin, Briefcase, Building, CheckCircle, Video, Search, Filter, Bot } from 'lucide-react';
import CandidateProfile from './CandidateProfile';

export const CandidateList = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

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
      match: 95,
      hasVideoInterview: true,
      aiEvaluation: {
        technicalSkills: 92,
        communication: 88,
        cultureFit: 90,
        strengths: [
          'Strong React expertise',
          'System design knowledge',
          'Team leadership experience'
        ],
        flags: []
      }
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
      match: 88,
      hasVideoInterview: true,
      aiEvaluation: {
        technicalSkills: 85,
        communication: 92,
        cultureFit: 94,
        strengths: [
          'Strong product vision',
          'Excellent communication',
          'Data-driven approach'
        ],
        flags: []
      }
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <h1 className="text-2xl font-bold mb-2">Candidate Management</h1>
        <p className="text-gray-300">
          Track and evaluate candidates with AI-powered insights
        </p>
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
            {['all', 'shortlisted', 'interviewing', 'offered', 'rejected'].map((type) => (
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

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
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
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{candidate.rating}</span>
                    </div>
                    {candidate.hasVideoInterview && (
                      <div className="flex items-center space-x-1 text-indigo-600">
                        <Video className="w-4 h-4" />
                        <span>Video Interview</span>
                      </div>
                    )}
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
                  <button 
                    onClick={() => setSelectedCandidate(candidate)}
                    className="px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100"
                  >
                    View Profile
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Mail className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* AI Evaluation Summary */}
            <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">AI Evaluation</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Technical Skills</div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${candidate.aiEvaluation.technicalSkills}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Communication</div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${candidate.aiEvaluation.communication}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Culture Fit</div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${candidate.aiEvaluation.cultureFit}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Candidate Profile Modal */}
      {selectedCandidate && (
        <CandidateProfile
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </div>
  );
};