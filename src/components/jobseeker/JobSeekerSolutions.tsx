import React from 'react';
import { Bot, Video, Target, BrainCircuit, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const JobSeekerSolutions = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-6">
          <Bot className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Job Seeker Solutions</h1>
            <p className="text-lg opacity-90">Let AI power your job search and career growth</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Bot className="w-6 h-6" />,
            title: 'Automated Job Search',
            description: 'AI finds and applies to matching jobs'
          },
          {
            icon: <Video className="w-6 h-6" />,
            title: 'Video Profile',
            description: 'Create AI-powered video responses'
          },
          {
            icon: <BrainCircuit className="w-6 h-6" />,
            title: 'Career Guidance',
            description: 'Personalized career recommendations'
          },
          {
            icon: <Target className="w-6 h-6" />,
            title: 'Skill Validation',
            description: 'Verify skills with assessments'
          },
          {
            icon: <Search className="w-6 h-6" />,
            title: 'Smart Matching',
            description: 'Get matched with perfect opportunities'
          },
          {
            icon: <Bot className="w-6 h-6" />,
            title: 'AI Assistant',
            description: '24/7 career guidance and support'
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg w-fit mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8">
            Join thousands of professionals using The Ara AI to find their dream jobs
          </p>
          <Link
            to="/jobseeker"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};