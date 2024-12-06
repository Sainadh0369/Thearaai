import React from 'react';
import { Clock, X } from 'lucide-react';
import type { JobSimulation } from '@/lib/types/rten';

interface SimulationProgressProps {
  simulation: JobSimulation;
  timeRemaining: number;
  currentTaskIndex: number;
  onExit: () => void;
}

export const SimulationProgress: React.FC<SimulationProgressProps> = ({
  simulation,
  timeRemaining,
  currentTaskIndex,
  onExit
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">{simulation.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {simulation.description}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-red-600">
            <Clock className="w-5 h-5" />
            <span className="font-medium">{formatTime(timeRemaining)}</span>
          </div>
          <button
            onClick={onExit}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {simulation.tasks.map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-2 rounded-full ${
              index < currentTaskIndex
                ? 'bg-green-500'
                : index === currentTaskIndex
                ? 'bg-indigo-500'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};