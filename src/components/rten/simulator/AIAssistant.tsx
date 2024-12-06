import React, { useState } from 'react';
import { Bot } from 'lucide-react';

export const AIAssistant = () => {
  const [question, setQuestion] = useState('');

  return (
    <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Bot className="w-5 h-5 text-indigo-600" />
        <span className="font-medium">AI Assistant</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Need help? I can provide hints and guidance without giving away the solution.
      </p>
      <div className="flex space-x-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
        />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Ask AI
        </button>
      </div>
    </div>
  );
};