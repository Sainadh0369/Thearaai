import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Play, 
  Pause,
  Settings,
  Plus,
  X,
  Globe,
  Clock,
  CheckCircle
} from 'lucide-react';
import { applicationAutomation } from '@/lib/ai/applicationAutomation';
import { useAutomationStore } from '@/store/useAutomationStore';
import { fadeIn, containerVariants } from '@/lib/animations';

export const ApplicationAutomationPanel = () => {
  const {
    isRunning,
    jobSearchSettings,
    applications,
    stats,
    startAutomation,
    stopAutomation,
    updateSettings
  } = useAutomationStore();

  const [showSettings, setShowSettings] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const [newLocation, setNewLocation] = useState('');

  useEffect(() => {
    const handleStatsUpdate = (event: CustomEvent<any>) => {
      updateStats(event.detail);
    };

    window.addEventListener('automation-stats-update', handleStatsUpdate as EventListener);

    return () => {
      window.removeEventListener('automation-stats-update', handleStatsUpdate as EventListener);
    };
  }, []);

  const handleStart = async () => {
    if (isRunning) {
      stopAutomation();
      applicationAutomation.stop();
    } else {
      startAutomation();
      await applicationAutomation.start(jobSearchSettings);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Control Panel */}
      <motion.div
        variants={fadeIn}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleStart}
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
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>

        {showSettings && (
          <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-6">
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
                  onClick={() => {
                    if (newKeyword.trim()) {
                      updateSettings({
                        keywords: [...jobSearchSettings.keywords, newKeyword.trim()]
                      });
                      setNewKeyword('');
                    }
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {jobSearchSettings.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="flex items-center space-x-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full"
                  >
                    <span>{keyword}</span>
                    <button
                      onClick={() => {
                        const newKeywords = [...jobSearchSettings.keywords];
                        newKeywords.splice(index, 1);
                        updateSettings({ keywords: newKeywords });
                      }}
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
                  onClick={() => {
                    if (newLocation.trim()) {
                      updateSettings({
                        locations: [...jobSearchSettings.locations, newLocation.trim()]
                      });
                      setNewLocation('');
                    }
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {jobSearchSettings.locations.map((location, index) => (
                  <span
                    key={index}
                    className="flex items-center space-x-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full"
                  >
                    <span>{location}</span>
                    <button
                      onClick={() => {
                        const newLocations = [...jobSearchSettings.locations];
                        newLocations.splice(index, 1);
                        updateSettings({ locations: newLocations });
                      }}
                      className="text-green-600 hover:text-green-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Other Settings */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Experience Level</label>
                <select
                  value={jobSearchSettings.experienceLevel}
                  onChange={(e) => updateSettings({ experienceLevel: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
                >
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Maximum Applications</label>
                <input
                  type="number"
                  value={jobSearchSettings.maxApplications}
                  onChange={(e) => updateSettings({ maxApplications: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Recent Applications */}
      <motion.div
        variants={fadeIn}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
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
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Applications Today</h3>
            <span className="text-2xl font-bold">{stats.applicationsToday}</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Daily limit: {jobSearchSettings.maxApplications}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Success Rate</h3>
            <span className="text-2xl font-bold">{stats.successRate}%</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Based on form completions
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Time Saved</h3>
            <span className="text-2xl font-bold">{stats.timeSaved}h</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            This week
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};