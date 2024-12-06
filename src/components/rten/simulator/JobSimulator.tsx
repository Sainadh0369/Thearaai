import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  CheckCircle, 
  Code,
  Monitor,
  Bot
} from 'lucide-react';
import { SimulationTask } from './SimulationTask';
import { SimulationProgress } from './SimulationProgress';
import { AIAssistant } from './AIAssistant';

export const JobSimulator = () => {
  const [activeSimulation, setActiveSimulation] = useState<any | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const simulations = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Build and optimize a React application',
      duration: '60 minutes',
      difficulty: 'Advanced',
      skills: ['React', 'TypeScript', 'Performance Optimization']
    },
    {
      id: 2,
      title: 'System Design',
      description: 'Design a scalable frontend architecture',
      duration: '45 minutes',
      difficulty: 'Intermediate',
      skills: ['Architecture', 'Scalability', 'Performance']
    }
  ];

  return (
    <div className="space-y-8">
      {!activeSimulation ? (
        // Simulation Selection
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Available Simulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {simulations.map((sim) => (
              <div
                key={sim.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors cursor-pointer"
                onClick={() => setActiveSimulation(sim)}
              >
                <h3 className="font-semibold mb-2">{sim.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {sim.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{sim.duration}</span>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {sim.difficulty}
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
      ) : (
        // Active Simulation
        <div className="space-y-6">
          <SimulationProgress 
            simulation={activeSimulation}
            timeRemaining={timeRemaining}
          />
          <SimulationTask simulation={activeSimulation} />
          <AIAssistant />
        </div>
      )}
    </div>
  );
};