import React, { useState } from 'react';
import { Send, Paperclip, Bot } from 'lucide-react';

interface MessageThreadProps {
  threadId: number;
}

const MessageThread: React.FC<MessageThreadProps> = ({ threadId }) => {
  const [message, setMessage] = useState('');
  const [showAiSuggestions, setShowAiSuggestions] = useState(false);

  const aiSuggestions = [
    "Thank you for your interest in the position. Your experience aligns well with what we're looking for.",
    "Could you please provide more details about your experience with React and TypeScript?",
    "I'd be happy to schedule a technical interview to discuss your background further."
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Thread Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
              alt="Sarah Chen"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">Sarah Chen</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Frontend Developer Candidate
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowAiSuggestions(!showAiSuggestions)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <Bot className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex justify-start">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
            <p>Thank you for considering my application. I am looking forward to discussing the role further.</p>
            <span className="text-xs text-gray-500 mt-1">2 hours ago</span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-indigo-600 text-white rounded-lg p-3 max-w-[80%]">
            <p>Hi Sarah, we are impressed with your background. Would you be available for a technical interview this week?</p>
            <span className="text-xs text-indigo-200 mt-1">1 hour ago</span>
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      {showAiSuggestions && (
        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-3">
            <Bot className="w-5 h-5 text-indigo-600" />
            <span className="font-medium">AI Suggestions</span>
          </div>
          <div className="space-y-2">
            {aiSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setMessage(suggestion)}
                className="w-full text-left p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg text-sm transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
          />
          <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageThread;