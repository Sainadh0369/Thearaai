import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <BrainCircuit className="w-10 h-10 text-gray-900 dark:text-white" />
      <div className="flex items-center space-x-1">
        <span className="text-2xl font-medium text-gray-900 dark:text-white">The</span>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">Ara</span>
        <span className="text-2xl font-medium text-gray-900 dark:text-white">AI</span>
      </div>
    </div>
  );
};