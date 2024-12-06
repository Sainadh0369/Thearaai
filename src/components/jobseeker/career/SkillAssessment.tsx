import React, { useState } from 'react';
import { Award, CheckCircle, Clock } from 'lucide-react';

const SkillAssessment = () => {
  const skills = [
    {
      category: 'Technical Skills',
      tests: [
        { name: 'React.js', status: 'completed', score: 92, badge: 'Expert' },
        { name: 'TypeScript', status: 'completed', score: 88, badge: 'Advanced' },
        { name: 'Node.js', status: 'pending', duration: '45 min' }
      ]
    },
    {
      category: 'Soft Skills',
      tests: [
        { name: 'Communication', status: 'completed', score: 95, badge: 'Expert' },
        { name: 'Leadership', status: 'pending', duration: '30 min' },
        { name: 'Problem Solving', status: 'pending', duration: '40 min' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Skill Assessments</h1>

        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h2 className="text-xl font-semibold mb-4">{skillCategory.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategory.tests.map((test, testIndex) => (
                <div
                  key={testIndex}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-indigo-500 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium">{test.name}</h3>
                    {test.status === 'completed' ? (
                      <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">Complete</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm">{test.duration}</span>
                      </div>
                    )}
                  </div>

                  {test.status === 'completed' ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Score</span>
                        <span className="font-medium">{test.score}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm font-medium">{test.badge} Badge Earned</span>
                      </div>
                    </div>
                  ) : (
                    <button className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Start Assessment
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Assessments Completed</div>
          </div>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Badges Earned</div>
          </div>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">90%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Average Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;