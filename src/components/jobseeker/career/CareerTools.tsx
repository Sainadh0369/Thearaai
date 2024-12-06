import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Award, 
  Compass, 
  Target, 
  BrainCircuit, 
  Sparkles,
  Bot,
  LineChart,
  BookOpen,
  Users
} from 'lucide-react';
import MockInterview from './MockInterview';
import SkillAssessment from './SkillAssessment';
import CareerAdvisor from './CareerAdvisor';
import CareerPlanning from './CareerPlanning';

const CareerTools = () => {
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
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Compass className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Career Development Tools</h1>
            <p className="text-lg opacity-90">
              Enhance your professional journey with AI-powered tools
            </p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
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

      {/* Learning Resources */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Recommended Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Advanced React Patterns',
              provider: 'Frontend Masters',
              duration: '8 hours',
              enrolled: 1200,
              icon: <BookOpen className="w-6 h-6" />
            },
            {
              title: 'Technical Leadership',
              provider: 'Tech Leaders Academy',
              duration: '12 hours',
              enrolled: 850,
              icon: <Users className="w-6 h-6" />
            }
          ].map((course, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  {course.icon}
                </div>
                <div>
                  <h3 className="font-medium">{course.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {course.provider}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                <span>{course.duration}</span>
                <span>{course.enrolled} enrolled</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="mock-interview" element={<MockInterview />} />
        <Route path="skill-assessment" element={<SkillAssessment />} />
        <Route path="advisor" element={<CareerAdvisor />} />
        <Route path="planning" element={<CareerPlanning />} />
      </Routes>
    </div>
  );
};

export default CareerTools;