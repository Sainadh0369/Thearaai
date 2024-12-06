import React, { useState } from 'react';
import { AIChat } from './AIChat';
import { AIInsights } from './AIInsights';

const AITesting = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const mockData = {
    skills: ['React', 'TypeScript', 'Node.js'],
    jobTitle: 'Senior Frontend Developer',
    jobDescription: 'Looking for an experienced frontend developer with strong React skills...'
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('chat')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'chat'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}
        >
          AI Chat
        </button>
        <button
          onClick={() => setActiveTab('insights')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'insights'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}
        >
          AI Insights
        </button>
      </div>

      {activeTab === 'chat' ? (
        <AIChat />
      ) : (
        <AIInsights data={mockData} />
      )}
    </div>
  );
};

export default AITesting;