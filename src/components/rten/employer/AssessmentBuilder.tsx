import React, { useState } from 'react';
import { Plus, Code, FileText, Bot, Settings } from 'lucide-react';

export const AssessmentBuilder = () => {
  const [assessments, setAssessments] = useState([
    {
      id: 1,
      title: 'Frontend Development Assessment',
      type: 'Technical',
      duration: '60 minutes',
      skills: ['React', 'TypeScript', 'System Design'],
      questions: 15,
      aiEnabled: true
    },
    {
      id: 2,
      title: 'Problem Solving Challenge',
      type: 'Algorithmic',
      duration: '45 minutes',
      skills: ['Data Structures', 'Algorithms', 'Optimization'],
      questions: 10,
      aiEnabled: true
    }
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Assessment Builder</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-5 h-5" />
          <span>Create Assessment</span>
        </button>
      </div>

      {/* Assessment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessments.map((assessment) => (
          <div
            key={assessment.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{assessment.title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Code className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {assessment.type}
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                {assessment.duration}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {assessment.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>{assessment.questions} Questions</span>
              </div>
              {assessment.aiEnabled && (
                <div className="flex items-center space-x-2 text-indigo-600">
                  <Bot className="w-4 h-4" />
                  <span>AI-Powered</span>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Edit
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Assistant */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Assessment Assistant</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Let our AI help you create effective assessments by suggesting questions,
          analyzing difficulty levels, and ensuring comprehensive skill coverage.
        </p>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Generate Questions
        </button>
      </div>
    </div>
  );
};