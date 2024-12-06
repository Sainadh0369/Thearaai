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
  BookmarkPlus,
  Bot,
  ArrowRight
} from 'lucide-react';
import JobDetails from './JobDetails';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    location: 'all',
    type: 'all',
    experience: 'all',
    salary: 'all'
  });
  const [selectedJob, setSelectedJob] = useState<any>(null);

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
      requirements: [
        'React', 
        'TypeScript', 
        'Node.js'
      ],
      description: 'We are looking for a Senior Frontend Developer to join our team...',
      responsibilities: [
        'Lead frontend architecture decisions',
        'Mentor junior developers',
        'Implement complex UI features'
      ],
      benefits: [
        'Remote work options',
        'Health insurance',
        'Stock options'
      ],
      companyInfo: {
        description: 'Leading tech company...',
        size: '500+ employees',
        industry: 'Technology',
        website: 'techcorp.com'
      },
      aiInsights: {
        match: 95,
        strengths: ['React expertise', 'System design skills'],
        suggestions: ['Highlight performance optimization experience']
      },
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
      requirements: [
        'Figma', 
        'UI Design', 
        'User Research'
      ],
      description: 'Join our design team to create beautiful user experiences...',
      responsibilities: [
        'Create user interfaces',
        'Conduct user research',
        'Design system maintenance'
      ],
      benefits: [
        'Flexible hours',
        'Learning budget',
        'Home office setup'
      ],
      companyInfo: {
        description: 'Award-winning design studio...',
        size: '50-100 employees',
        industry: 'Design',
        website: 'designstudio.com'
      },
      aiInsights: {
        match: 88,
        strengths: ['UI design experience', 'Design systems'],
        suggestions: ['Add more user research examples']
      },
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-6">
          <Bot className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-bold">AI-Powered Job Search</h1>
            <p className="text-lg opacity-90">Find opportunities perfectly matched to your skills</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs, skills, or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 outline-none"
            />
          </div>
          <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Search Jobs
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={selectedFilters.location}
            onChange={(e) => setSelectedFilters({ ...selectedFilters, location: e.target.value })}
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
          >
            <option value="all">All Locations</option>
            <option value="remote">Remote</option>
            <option value="sf">San Francisco</option>
            <option value="ny">New York</option>
          </select>

          <select
            value={selectedFilters.type}
            onChange={(e) => setSelectedFilters({ ...selectedFilters, type: e.target.value })}
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
          >
            <option value="all">All Types</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>

          <select
            value={selectedFilters.experience}
            onChange={(e) => setSelectedFilters({ ...selectedFilters, experience: e.target.value })}
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
          >
            <option value="all">All Experience</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>

          <select
            value={selectedFilters.salary}
            onChange={(e) => setSelectedFilters({ ...selectedFilters, salary: e.target.value })}
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
          >
            <option value="all">All Salaries</option>
            <option value="50k">$50k+</option>
            <option value="100k">$100k+</option>
            <option value="150k">$150k+</option>
          </select>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
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
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                Quick Apply
              </button>
              <button 
                onClick={() => setSelectedJob(job)}
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Jobs;