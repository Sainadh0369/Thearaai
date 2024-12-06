import React from 'react';
import { AlertCircle } from 'lucide-react';

interface AIErrorProps {
  message: string;
  onRetry?: () => void;
}

const AIError: React.FC<AIErrorProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
      <p className="text-red-500 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default AIError;