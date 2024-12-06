import React, { useState } from 'react';
import { Code } from 'lucide-react';
import type { SimulationTask as ISimulationTask } from '@/lib/types/rten';

interface SimulationTaskProps {
  task: ISimulationTask;
  onComplete: () => void;
}

export const SimulationTask: React.FC<SimulationTaskProps> = ({
  task,
  onComplete
}) => {
  const [code, setCode] = useState('');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <div className="flex items-center space-x-2">
          <Code className="w-4 h-4" />
          <span>{task.type}</span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {task.description}
      </p>

      <div className="space-y-4">
        {task.type === 'coding' && (
          <div className="h-[400px] bg-gray-900 rounded-lg p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-transparent text-white font-mono resize-none focus:outline-none"
              placeholder="Write your code here..."
            />
          </div>
        )}

        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            onClick={() => {/* Run tests */}}
          >
            Run Tests
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            onClick={onComplete}
          >
            Submit Solution
          </button>
        </div>
      </div>
    </div>
  );
};