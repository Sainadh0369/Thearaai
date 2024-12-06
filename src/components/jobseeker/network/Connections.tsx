import React, { useState } from 'react';
import { Users, UserPlus, MessageCircle, Search, Filter, UserCheck, Building, MapPin } from 'lucide-react';

const Connections = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const connections = [
    {
      id: 1,
      name: 'Emily Chen',
      role: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      mutualConnections: 12,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      status: 'connected',
    },
    {
      id: 2,
      name: 'David Kim',
      role: 'UI/UX Designer',
      company: 'DesignStudio',
      location: 'New York, NY',
      mutualConnections: 8,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'InnovateTech',
      location: 'Seattle, WA',
      mutualConnections: 15,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      status: 'suggested',
    },
  ];

  const suggestions = [
    {
      id: 4,
      name: 'Michael Rodriguez',
      role: 'Engineering Manager',
      company: 'TechGiant',
      location: 'Austin, TX',
      mutualConnections: 20,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      reason: 'Based on your experience',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Frontend Architect',
      company: 'WebScale',
      location: 'Remote',
      mutualConnections: 10,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      reason: 'Similar skills',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Network</h1>
            <p className="text-lg opacity-90">Build and manage your professional connections</p>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
            <Users className="w-5 h-5" />
            <span className="font-semibold">245 Connections</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search connections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none bg-transparent"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'connected', 'pending', 'suggested'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === type
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Connections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {connections.map((connection) => (
          <div
            key={connection.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <img
                src={connection.image}
                alt={connection.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{connection.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{connection.role}</p>
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <Building className="w-4 h-4" />
                  <span>{connection.company}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{connection.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mt-4">
              <Users className="w-4 h-4" />
              <span>{connection.mutualConnections} mutual connections</span>
            </div>

            <div className="flex gap-2 mt-4">
              {connection.status === 'connected' ? (
                <>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Message</span>
                  </button>
                </>
              ) : connection.status === 'pending' ? (
                <button className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300">
                  Pending
                </button>
              ) : (
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  <UserPlus className="w-4 h-4" />
                  <span>Connect</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Connections */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Suggested Connections</h2>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={suggestion.image}
                  alt={suggestion.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{suggestion.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {suggestion.role} at {suggestion.company}
                  </p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <Users className="w-4 h-4" />
                    <span>{suggestion.mutualConnections} mutual connections</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <UserPlus className="w-4 h-4" />
                <span>Connect</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connections;