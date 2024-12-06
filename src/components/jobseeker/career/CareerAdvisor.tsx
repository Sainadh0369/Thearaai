import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  TrendingUp, 
  Sparkles,
  BookOpen,
  Award,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

const CareerAdvisor = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const careerPaths = [
    {
      title: 'Frontend Architect',
      description: 'Lead frontend architecture and design systems',
      skills: ['React', 'System Design', 'Performance Optimization'],
      timeframe: '2-3 years',
      salary: '$150k - $200k',
      growth: '+25%',
      confidence: 95
    },
    {
      title: 'AI/ML Engineer',
      description: 'Specialize in AI/ML applications',
      skills: ['Python', 'TensorFlow', 'Machine Learning'],
      timeframe: '2-4 years',
      salary: '$160k - $220k',
      growth: '+40%',
      confidence: 88
    }
  ];

  const recommendations = [
    {
      type: 'course',
      title: 'Advanced React Patterns',
      provider: 'Frontend Masters',
      duration: '8 hours',
      relevance: '95%'
    },
    {
      type: 'certification',
      title: 'AWS Solutions Architect',
      provider: 'Amazon',
      duration: '3 months',
      relevance: '88%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* AI Insights Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <BrainCircuit className="w-8 h-8" />
          <h1 className="text-2xl font-bold">AI Career Guidance</h1>
        </div>
        <p className="text-lg opacity-90">
          Personalized career recommendations based on your skills, experience, and market trends
        </p>
      </div>

      {/* Career Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careerPaths.map((path, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer transition-all ${
              selectedPath === path.title ? 'ring-2 ring-indigo-600' : ''
            }`}
            onClick={() => setSelectedPath(path.title)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{path.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {path.description}
                </p>
              </div>
              <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>{path.growth}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Required Skills</div>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Timeline</div>
                  <div className="font-medium">{path.timeframe}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Salary Range</div>
                  <div className="font-medium">{path.salary}</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">AI Confidence Score</div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${path.confidence}%` }}
                  />
                </div>
                <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {path.confidence}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Recommendations */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recommended Learning Path</h2>
          <div className="flex items-center space-x-2 text-indigo-600">
            <Sparkles className="w-5 h-5" />
            <span>AI-Curated</span>
          </div>
        </div>

        <div className="space-y-4">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  {item.type === 'course' ? (
                    <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  ) : (
                    <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.provider} • {item.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                  {item.relevance} match
                </span>
                <button className="text-indigo-600 hover:text-indigo-700">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Skill Demand Trends</h3>
          <div className="space-y-4">
            {[
              { skill: 'React', trend: '+35%' },
              { skill: 'TypeScript', trend: '+28%' },
              { skill: 'AI/ML', trend: '+45%' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{item.skill}</span>
                <span className="text-green-600">{item.trend}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Industry Outlook</h3>
          <div className="space-y-4">
            {[
              { metric: 'Job Growth', value: '15% YoY' },
              { metric: 'Remote Opportunities', value: '70%' },
              { metric: 'Average Salary Increase', value: '12%' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{item.metric}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisor;