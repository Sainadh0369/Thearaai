import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Code,
  FileText,
  Monitor,
  MessageSquare,
  Bot
} from 'lucide-react';
import { jobSimulationEngine } from '@/lib/rten/jobSimulation';
import type { JobSimulation, SimulationTask } from '@/lib/types/rten';

export const JobSimulator = () => {
  const [activeSimulation, setActiveSimulation] = useState<JobSimulation | null>(null);
  const [currentTask, setCurrentTask] = useState<SimulationTask | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const startSimulation = async (jobId: string) => {
    try {
      const simulation = await jobSimulationEngine.createSimulation(jobId, {
        title: 'Frontend Developer Assessment',
        description: 'Complete a series of tasks to demonstrate your frontend development skills',
        skills: ['React', 'TypeScript', 'System Design'],
        technical: {
          criteria: [
            'Code quality',
            'Performance optimization',
            'Component architecture'
          ]
        },
        design: {
          criteria: [
            'UI/UX considerations',
            'Responsive design',
            'Accessibility'
          ]
        }
      });

      setActiveSimulation(simulation);
      setCurrentTask(simulation.tasks[0]);
    } catch (error) {
      console.error('Error starting simulation:', error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Monitor className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Interactive Job Simulation</h1>
            <p className="text-lg opacity-90">
              Demonstrate your skills in real-world scenarios
            </p>
          </div>
        </div>
      </div>

      {!activeSimulation ? (
        // Simulation Selection
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Available Simulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Frontend Development',
                description: 'Build and optimize a React application',
                duration: '60 minutes',
                difficulty: 'Advanced'
              },
              {
                title: 'System Design',
                description: 'Design a scalable frontend architecture',
                duration: '45 minutes',
                difficulty: 'Intermediate'
              }
            ].map((sim, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors cursor-pointer"
                onClick={() => startSimulation(`sim_${index}`)}
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
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Active Simulation
        <div className="space-y-6">
          {/* Progress Tracker */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">{activeSimulation.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {activeSimulation.description}
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
              {activeSimulation.tasks.map((task, index) => (
                <div
                  key={index}
                  className={`flex-1 h-2 rounded-full ${
                    index < activeSimulation.tasks.indexOf(currentTask!)
                      ? 'bg-green-500'
                      : index === activeSimulation.tasks.indexOf(currentTask!)
                      ? 'bg-indigo-500'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Current Task */}
          {currentTask && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">{currentTask.title}</h3>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentTask.timeLimit} minutes</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {currentTask.description}
              </p>

              {/* Task Interface */}
              {currentTask.type === 'coding' && (
                <div className="space-y-4">
                  <div className="h-[400px] bg-gray-900 rounded-lg p-4">
                    {/* Code editor component */}
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
              )}

              {currentTask.type === 'design' && (
                <div className="space-y-4">
                  <div className="h-[400px] bg-white border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Drag and drop your design files here</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* AI Assistant */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-5 h-5 text-indigo-600" />
              <span className="font-medium">AI Assistant</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need help? I can provide hints and guidance without giving away the solution.
            </p>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Ask AI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};