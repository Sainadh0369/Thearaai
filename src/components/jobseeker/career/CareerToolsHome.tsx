import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Award, Compass, Target, BrainCircuit, Sparkles, Bot, LineChart } from 'lucide-react';

const CareerToolsHome = () => {
  const tools = [
    {
      icon: <Video className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      title: 'AI Mock Interviews',
      description: 'Practice with AI-powered interviews tailored to your industry',
      link: '/jobseeker/career-tools/mock-interview',
      stats: '24 interviews completed',
      color: 'bg-gray-50 dark:bg-gray-800/50'
    },
    {
      icon: <Award className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      title: 'Skill Assessments',
      description: 'Verify your skills and earn badges',
      link: '/jobseeker/career-tools/skill-assessment',
      stats: '8 badges earned',
      color: 'bg-gray-50 dark:bg-gray-800/50'
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      title: 'AI Career Advisor',
      description: 'Get personalized career guidance and recommendations',
      link: '/jobseeker/career-tools/advisor',
      stats: '3 career paths analyzed',
      color: 'bg-gray-50 dark:bg-gray-800/50'
    },
    {
      icon: <LineChart className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      title: 'Career Planning',
      description: 'Set and track your career goals',
      link: '/jobseeker/career-tools/planning',
      stats: '2 goals in progress',
      color: 'bg-gray-50 dark:bg-gray-800/50'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Compass className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-bold">Career Development Tools</h1>
            <p className="text-lg opacity-90">
              Enhance your professional journey with AI-powered tools
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <Link
            key={index}
            to={tool.link}
            className={`${tool.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                {tool.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                <p className="text-sm text-gray-700 dark:text-gray-400">{tool.stats}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* AI Assistant */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <Bot className="w-8 h-8" />
          <h2 className="text-xl font-semibold">AI Career Assistant</h2>
        </div>
        <p className="mb-4">
          Get personalized career advice and guidance 24/7. Ask anything about your career path, skills development, or job search strategy.
        </p>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
          <Sparkles className="w-5 h-5" />
          <span>Start Conversation</span>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Frontend Developer Mock Interview',
              date: '2 days ago',
              score: '85%',
              type: 'interview',
              icon: <Video className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            },
            {
              title: 'React.js Assessment',
              date: '1 week ago',
              score: '92%',
              type: 'assessment',
              icon: <Award className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            }
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="font-medium">{activity.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm font-medium">
                  Score: {activity.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerToolsHome;