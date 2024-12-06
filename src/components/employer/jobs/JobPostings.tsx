import React, { useState } from 'react';
import { Plus, Search, Filter, Briefcase, MapPin, Users, Clock } from 'lucide-react';
import CreateJob from './CreateJob';

const JobPostings = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      applicants: 45,
      status: 'active',
      posted: '5 days ago',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      applicants: 32,
      status: 'active',
      posted: '1 week ago',
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      applicants: 28,
      status: 'closed',
      posted: '2 weeks ago',
    },
  ]);

  const handleCreateJob = (jobData: any) => {
    const newJob = {
      id: jobs.length + 1,
      ...jobData,
      applicants: 0,
      status: 'active',
      posted: 'Just now',
    };
    setJobs([newJob, ...jobs]);
    setShowCreateJob(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Postings</h1>
        <button
          onClick={() => setShowCreateJob(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Create Job</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none bg-transparent"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'active', 'draft', 'closed'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === type
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {job.department}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{job.applicants} applicants</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    job.status === 'active'
                      ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
                <button className="px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Job Modal */}
      {showCreateJob && (
        <CreateJob
          onClose={() => setShowCreateJob(false)}
          onSubmit={handleCreateJob}
        />
      )}
    </div>
  );
};

export default JobPostings;