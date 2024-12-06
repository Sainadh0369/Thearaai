import React from 'react';
import { Bot, Video, Shield, LineChart, Users, BrainCircuit, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EmployerSolutions = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-6">
          <Bot className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Employer Solutions</h1>
            <p className="text-lg opacity-90">Transform your recruitment process with AI</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Bot className="w-6 h-6" />,
            title: 'Smart Candidate Matching',
            description: 'AI-powered matching with your job requirements'
          },
          {
            icon: <Video className="w-6 h-6" />,
            title: 'Video Screening',
            description: 'Automated video interviews and assessments'
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: 'Background Verification',
            description: 'Automated checks and skill validation'
          },
          {
            icon: <LineChart className="w-6 h-6" />,
            title: 'Recruitment Analytics',
            description: 'Data-driven hiring insights and metrics'
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: 'Team Collaboration',
            description: 'Streamlined hiring workflow with team tools'
          },
          {
            icon: <BrainCircuit className="w-6 h-6" />,
            title: 'Learning System',
            description: 'AI that learns from your hiring patterns'
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
          <p className="text-xl mb-8">
            Join thousands of companies using The Ara AI to build amazing teams
          </p>
          <Link
            to="/employer"
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