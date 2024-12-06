import React, { useState } from 'react';
import { Search, Filter, Sparkles, MapPin, Briefcase, GraduationCap, Star, MessageCircle, UserPlus } from 'lucide-react';
import CandidateProfile from './CandidateProfile';

const CandidateSearch = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    experience: 'all',
    location: 'all',
    skills: [],
  });

  const candidates = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      experience: '8 years',
      location: 'San Francisco, CA',
      skills: ['React', 'TypeScript', 'Node.js'],
      education: 'M.S. Computer Science',
      matchScore: 95,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      availability: 'Available in 2 weeks',
    },
    {
      id: 2,
      name: 'Michael Kim',
      role: 'Full Stack Developer',
      experience: '5 years',
      location: 'New York, NY',
      skills: ['React', 'Python', 'AWS'],
      education: 'B.S. Software Engineering',
      matchScore: 88,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      availability: 'Immediately available',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">AI-Powered Candidate Search</h1>
        <p className="text-lg opacity-90">
          Find the perfect candidates matched to your requirements
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by skills, role, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none bg-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['All Experience', 'Entry Level', 'Mid Level', 'Senior'].map((level) => (
              <button
                key={level}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filters.experience === level.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-indigo-50 dark:bg-indigo-900/50 rounded-xl p-6">
        <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="font-medium">AI Recommendations</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Based on your job requirements, we've identified candidates with strong matches in frontend development and team leadership experience.
        </p>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex space-x-4">
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{candidate.role}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                    {candidate.matchScore}% Match
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Briefcase className="w-4 h-4" />
                    <span>{candidate.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{candidate.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <GraduationCap className="w-4 h-4" />
                    <span>{candidate.education}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {candidate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Contact</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors">
                <UserPlus className="w-4 h-4" />
                <span>Shortlist</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateSearch;