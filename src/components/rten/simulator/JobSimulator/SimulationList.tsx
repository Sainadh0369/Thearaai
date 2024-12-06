import React from 'react';
import { Clock } from 'lucide-react';
import type { JobSimulation } from '@/lib/types/rten';

interface SimulationListProps {
  onSelect: (simulation: JobSimulation) => void;
}

const AVAILABLE_SIMULATIONS: JobSimulation[] = [
  {
    id: 'sim_1',
    title: 'Frontend Development',
    description: 'Build and optimize a React application',
    skills: ['React', 'TypeScript', 'Performance'],
    duration: 60,
    difficulty: 'advanced',
    tasks: []
  },
  {
    id: 'sim_2',
    title: 'System Design',
    description: 'Design a scalable frontend architecture',
    skills: ['Architecture', 'Scalability', 'Performance'],
    duration: 45,
    difficulty: 'intermediate',
    tasks: []
  }
];

export const SimulationList: React.FC<SimulationListProps> = ({ onSelect }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Available Simulations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {AVAILABLE_SIMULATIONS.map((sim) => (
          <div
            key={sim.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors cursor-pointer"
            onClick={() => onSelect(sim)}
          >
            <h3 className="font-semibold mb-2">{sim.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {sim.description}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{sim.duration} minutes</span>
              </div>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                {sim.difficulty.charAt(0).toUpperCase() + sim.difficulty.slice(1)}
              </span>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {sim.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};