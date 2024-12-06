import React from 'react';
import { Bot } from 'lucide-react';

interface AILoadingProps {
  message?: string;
}

const AILoading: React.FC<AILoadingProps> = ({ message = 'AI is processing...' }) => {
  return (
    <div className="flex items-center justify-center space-x-3 p-4">
      <Bot className="w-6 h-6 text-indigo-600 animate-pulse" />
      <span className="text-gray-600 dark:text-gray-400">{message}</span>
    </div>
  );
};

export default AILoading;