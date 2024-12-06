import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Handshake, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  Search,
  Filter,
  Building,
  MapPin,
  Briefcase,
  Globe,
  Star,
  UserPlus,
  BrainCircuit
} from 'lucide-react';

const NetworkHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const quickActions = [
    {
      icon: <Users className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: 'Find Connections',
      description: 'Discover professionals in your field',
      link: '/jobseeker/network/connections',
      color: 'bg-gray-50 dark:bg-gray-800/50'
    },
    {
      icon: <Calendar className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: 'Networking Events',
      description: 'Join virtual and local events',
      link: '/jobseeker/network/events',
      color: 'bg-gray-50 dark:bg-gray-800/50'
    },
    {
      icon: <Handshake className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      title: 'Find Mentors',
      description: 'Connect with industry experts',
      link: '/jobseeker/network/mentorship',
      color: 'bg-gray-50 dark:bg-gray-800/50'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Professional Network</h1>
            <p className="text-lg opacity-90">Build meaningful connections in your industry</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search professionals by name, role, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 outline-none"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className={`${action.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg w-fit mb-4">
              {action.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{action.description}</p>
          </Link>
        ))}
      </div>

      {/* AI Networking Assistant */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <BrainCircuit className="w-8 h-8" />
          <h2 className="text-xl font-semibold">AI Networking Assistant</h2>
        </div>
        <p className="mb-4">
          Get personalized networking recommendations and introduction suggestions based on your career goals.
        </p>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
          <Star className="w-5 h-5" />
          <span>View Recommendations</span>
        </button>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Connections</h3>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">245</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            +12 this month
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Profile Views</h3>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">89</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            +45% from last week
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Messages</h3>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            5 unread messages
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkHome;