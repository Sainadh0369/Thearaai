import React, { useState } from 'react';
import { 
  Bot, 
  Search, 
  Briefcase, 
  Settings, 
  Play, 
  Pause,
  AlertCircle,
  CheckCircle,
  Globe,
  Filter
} from 'lucide-react';

const JobApplicationBot = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [settings, setSettings] = useState({
    keywords: ['frontend developer', 'react developer'],
    locations: ['remote', 'san francisco'],
    platforms: ['indeed', 'linkedin', 'monster'],
    autoFill: true,
    maxApplications: 50
  });

  const [applications, setApplications] = useState([
    {
      company: 'TechCorp Inc.',
      position: 'Senior Frontend Developer',
      platform: 'LinkedIn',
      status: 'applied',
      timestamp: '2 mins ago'
    },
    {
      company: 'InnovateTech',
      position: 'React Developer',
      platform: 'Indeed',
      status: 'processing',
      timestamp: 'Just now'
    }
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="w-8 h-8" />
          <h1 className="text-2xl font-bold">AI Job Application Bot</h1>
        </div>
        <p className="text-lg opacity-90">
          Automate your job search across multiple platforms
        </p>
      </div>

      {/* Control Panel */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg ${
                isRunning
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-green-600 hover:bg-green-700'
              } text-white transition-colors`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-5 h-5" />
                  <span>Stop Bot</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Start Bot</span>
                </>
              )}
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {isRunning ? (
                <span className="flex items-center text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
                  Bot is running
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
                  Bot is idle
                </span>
              )}
            </div>
          </div>
          <button
            className="flex items-center space-x-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500"
            onClick={() => {/* Open settings modal */}}
          >
            <Settings className="w-5 h-5" />
            <span>Configure Bot</span>
          </button>
        </div>

        {/* Search Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Keywords</label>
            <div className="flex flex-wrap gap-2">
              {settings.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Locations</label>
            <div className="flex flex-wrap gap-2">
              {settings.locations.map((location, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Platforms</label>
            <div className="flex flex-wrap gap-2">
              {settings.platforms.map((platform, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Application Status */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Applications</h2>
        <div className="space-y-4">
          {applications.map((application, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium">{application.position}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {application.company}
                  </p>
                  <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                    <Globe className="w-4 h-4" />
                    <span>{application.platform}</span>
                    <span>•</span>
                    <span>{application.timestamp}</span>
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  application.status === 'applied'
                    ? 'bg-green-100 dark:bg-green-900 text-green-600'
                    : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
                }`}
              >
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Applications Today</h3>
            <span className="text-2xl font-bold">24</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Daily limit: 50
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Success Rate</h3>
            <span className="text-2xl font-bold">92%</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Based on form completions
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Time Saved</h3>
            <span className="text-2xl font-bold">12h</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            This week
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationBot;