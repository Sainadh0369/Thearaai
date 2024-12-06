import React from 'react';
import { Clock } from 'lucide-react';

interface SimulationProgressProps {
  simulation: any;
  timeRemaining: number | null;
}

export const SimulationProgress: React.FC<SimulationProgressProps> = ({
  simulation,
  timeRemaining
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">{simulation.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {simulation.description}
          </p>
        </div>
        {timeRemaining && (
          <div className="flex items-center space-x-2 text-red-600">
            <Clock className="w-5 h-5" />
            <span className="font-medium">{timeRemaining}m remaining</span>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div
            className="h-full bg-indigo-600 rounded-full"
            style={{ width: '25%' }}
          />
        </div>
      </div>
    </div>
  );
};