import React, { useState } from 'react';
import { Code } from 'lucide-react';

interface SimulationTaskProps {
  simulation: any;
}

export const SimulationTask: React.FC<SimulationTaskProps> = ({ simulation }) => {
  const [code, setCode] = useState('');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Current Task</h3>
        <div className="flex items-center space-x-2">
          <Code className="w-4 h-4" />
          <span>Coding Challenge</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-[400px] bg-gray-900 rounded-lg p-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-transparent text-white font-mono resize-none focus:outline-none"
            placeholder="Write your code here..."
          />
        </div>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Run Tests
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Submit Solution
          </button>
        </div>
      </div>
    </div>
  );
};