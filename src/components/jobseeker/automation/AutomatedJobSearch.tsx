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
  Filter,
  Plus,
  X,
  Target,
  Sliders
} from 'lucide-react';

const AutomatedJobSearch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [settings, setSettings] = useState({
    keywords: ['frontend developer', 'react developer'],
    locations: ['remote', 'san francisco'],
    platforms: ['indeed', 'linkedin', 'monster', 'company career pages'],
    autoApply: true,
    maxApplications: 50,
    blacklistedCompanies: [],
    salary: {
      min: 100000,
      max: 180000
    },
    experienceLevel: 'senior',
    workType: ['full-time', 'remote']
  });

  const [applications, setApplications] = useState([
    {
      company: 'TechCorp Inc.',
      position: 'Senior Frontend Developer',
      platform: 'Company Career Page',
      status: 'applied',
      timestamp: '2 mins ago',
      match: 95
    },
    {
      company: 'InnovateTech',
      position: 'React Developer',
      platform: 'LinkedIn',
      status: 'processing',
      timestamp: 'Just now',
      match: 88
    }
  ]);

  const [newKeyword, setNewKeyword] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newBlacklistedCompany, setNewBlacklistedCompany] = useState('');

  const addKeyword = () => {
    if (newKeyword.trim()) {
      setSettings({
        ...settings,
        keywords: [...settings.keywords, newKeyword.trim()]
      });
      setNewKeyword('');
    }
  };

  const removeKeyword = (index: number) => {
    const newKeywords = [...settings.keywords];
    newKeywords.splice(index, 1);
    setSettings({
      ...settings,
      keywords: newKeywords
    });
  };

  const addLocation = () => {
    if (newLocation.trim()) {
      setSettings({
        ...settings,
        locations: [...settings.locations, newLocation.trim()]
      });
      setNewLocation('');
    }
  };

  const removeLocation = (index: number) => {
    const newLocations = [...settings.locations];
    newLocations.splice(index, 1);
    setSettings({
      ...settings,
      locations: newLocations
    });
  };

  const addBlacklistedCompany = () => {
    if (newBlacklistedCompany.trim()) {
      setSettings({
        ...settings,
        blacklistedCompanies: [...settings.blacklistedCompanies, newBlacklistedCompany.trim()]
      });
      setNewBlacklistedCompany('');
    }
  };

  const removeBlacklistedCompany = (index: number) => {
    const newBlacklistedCompanies = [...settings.blacklistedCompanies];
    newBlacklistedCompanies.splice(index, 1);
    setSettings({
      ...settings,
      blacklistedCompanies: newBlacklistedCompanies
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">AI Job Search Automation</h1>
            <p className="text-lg opacity-90">
              Let AI automatically find and apply to matching jobs
            </p>
          </div>
        </div>
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
          >
            <Settings className="w-5 h-5" />
            <span>Configure Bot</span>
          </button>
        </div>

        {/* Search Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Keywords */}
          <div className="space-y-4">
            <h3 className="font-medium">Keywords</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                placeholder="Add keyword..."
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
              />
              <button
                onClick={addKeyword}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {settings.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="flex items-center space-x-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full"
                >
                  <span>{keyword}</span>
                  <button
                    onClick={() => removeKeyword(index)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="font-medium">Locations</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                placeholder="Add location..."
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
              />
              <button
                onClick={addLocation}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {settings.locations.map((location, index) => (
                <span
                  key={index}
                  className="flex items-center space-x-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full"
                >
                  <span>{location}</span>
                  <button
                    onClick={() => removeLocation(index)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="mt-6 space-y-6">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-medium mb-4">Advanced Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Salary Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Salary Range</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={settings.salary.min}
                    onChange={(e) => setSettings({
                      ...settings,
                      salary: { ...settings.salary, min: parseInt(e.target.value) }
                    })}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
                    placeholder="Min"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={settings.salary.max}
                    onChange={(e) => setSettings({
                      ...settings,
                      salary: { ...settings.salary, max: parseInt(e.target.value) }
                    })}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
                    placeholder="Max"
                  />
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Experience Level</label>
                <select
                  value={settings.experienceLevel}
                  onChange={(e) => setSettings({
                    ...settings,
                    experienceLevel: e.target.value
                  })}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
                >
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                  <option value="lead">Lead/Manager</option>
                </select>
              </div>
            </div>
          </div>

          {/* Blacklisted Companies */}
          <div className="space-y-4">
            <h3 className="font-medium">Blacklisted Companies</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newBlacklistedCompany}
                onChange={(e) => setNewBlacklistedCompany(e.target.value)}
                placeholder="Add company to blacklist..."
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
              />
              <button
                onClick={addBlacklistedCompany}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {settings.blacklistedCompanies.map((company, index) => (
                <span
                  key={index}
                  className="flex items-center space-x-1 px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full"
                >
                  <span>{company}</span>
                  <button
                    onClick={() => removeBlacklistedCompany(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Applications</h2>
        <div className="space-y-4">
          {applications.map((application, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
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
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                  {application.match}% Match
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    application.status === 'applied'
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
                  }`}
                >
                  {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </span>
              </div>
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
            Daily limit: {settings.maxApplications}
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

export default AutomatedJobSearch;