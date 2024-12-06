import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock,
  Filter,
  Sparkles,
  Building,
  Star,
  BookmarkPlus
} from 'lucide-react';

const JobSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: 'all',
    type: 'all',
    experience: 'all',
    salary: 'all'
  });

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      posted: '2 hours ago',
      match: 95,
      requirements: ['React', 'TypeScript', 'Node.js'],
      logo: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $140k',
      posted: '5 hours ago',
      match: 88,
      requirements: ['Figma', 'UI Design', 'User Research'],
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Find Your Next Opportunity</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs, skills, or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-opacity-90 transition-colors font-medium">
            Search Jobs
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="px-4 py-2 border dark:border-gray-700 rounded-lg bg-transparent"
          >
            <option value="all">All Locations</option>
            <option value="remote">Remote</option>
            <option value="sf">San Francisco</option>
            <option value="ny">New York</option>
          </select>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="px-4 py-2 border dark:border-gray-700 rounded-lg bg-transparent"
          >
            <option value="all">All Types</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>
          <select
            value={filters.experience}
            onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
            className="px-4 py-2 border dark:border-gray-700 rounded-lg bg-transparent"
          >
            <option value="all">All Experience</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>
          <select
            value={filters.salary}
            onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
            className="px-4 py-2 border dark:border-gray-700 rounded-lg bg-transparent"
          >
            <option value="all">All Salaries</option>
            <option value="50k">$50k+</option>
            <option value="100k">$100k+</option>
            <option value="150k">$150k+</option>
          </select>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-indigo-50 dark:bg-indigo-900/50 rounded-xl p-6">
        <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="font-medium">AI Recommendations</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Based on your profile and preferences, we've found jobs that match your skills and career goals.
        </p>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex space-x-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Building className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                  {job.match}% Match
                </span>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <BookmarkPlus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Briefcase className="w-4 h-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{job.posted}</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Apply Now
              </button>
              <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSearch;