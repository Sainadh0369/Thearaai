import React, { useState } from 'react';
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  CheckCircle,
  Plus,
  Edit,
  Trash2,
  Flag
} from 'lucide-react';

interface Goal {
  id: number;
  title: string;
  description: string;
  deadline: string;
  progress: number;
  milestones: {
    id: number;
    title: string;
    completed: boolean;
  }[];
}

const CareerPlanning = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: 'Become Senior Frontend Developer',
      description: 'Master advanced React patterns and system design',
      deadline: '2024-12-31',
      progress: 65,
      milestones: [
        { id: 1, title: 'Complete Advanced React course', completed: true },
        { id: 2, title: 'Build 3 complex applications', completed: true },
        { id: 3, title: 'Learn system design patterns', completed: false },
        { id: 4, title: 'Contribute to open source', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Learn AI/ML Integration',
      description: 'Develop skills in AI/ML for frontend applications',
      deadline: '2024-06-30',
      progress: 35,
      milestones: [
        { id: 1, title: 'Complete ML basics course', completed: true },
        { id: 2, title: 'Learn TensorFlow.js', completed: false },
        { id: 3, title: 'Build AI-powered web app', completed: false }
      ]
    }
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Career Planning</h1>
            <p className="text-lg opacity-90">
              Set and track your professional goals
            </p>
          </div>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{goal.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {goal.description}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Due {goal.deadline}</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>{goal.progress}% Complete</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              {goal.milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle
                      className={`w-5 h-5 ${
                        milestone.completed
                          ? 'text-green-500'
                          : 'text-gray-400'
                      }`}
                    />
                    <span className={milestone.completed ? 'line-through' : ''}>
                      {milestone.title}
                    </span>
                  </div>
                  <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button className="flex items-center space-x-2 mt-4 text-indigo-600 hover:text-indigo-700">
              <Plus className="w-4 h-4" />
              <span>Add Milestone</span>
            </button>
          </div>
        ))}

        {/* Add New Goal Card */}
        <button className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
          <div className="flex flex-col items-center justify-center h-full space-y-2 text-gray-600 dark:text-gray-400">
            <Plus className="w-8 h-8" />
            <span>Add New Goal</span>
          </div>
        </button>
      </div>

      {/* Progress Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Progress Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {goals.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Active Goals
            </div>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {goals.reduce((acc, goal) => 
                acc + goal.milestones.filter(m => m.completed).length, 0
              )}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Completed Milestones
            </div>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {Math.round(
                goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length
              )}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Progress
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPlanning;