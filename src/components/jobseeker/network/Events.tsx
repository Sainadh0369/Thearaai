import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Filter, Search, Tag } from 'lucide-react';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: 1,
      title: 'Tech Career Fair 2024',
      type: 'Virtual Fair',
      date: 'Mar 15, 2024',
      time: '10:00 AM PST',
      duration: '4 hours',
      attendees: 520,
      companies: ['Google', 'Microsoft', 'Amazon'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
      tags: ['Tech', 'Career Fair', 'Networking'],
    },
    {
      id: 2,
      title: 'AI in Frontend Development',
      type: 'Workshop',
      date: 'Mar 18, 2024',
      time: '2:00 PM PST',
      duration: '2 hours',
      attendees: 180,
      speaker: 'Dr. Sarah Chen',
      image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=400',
      tags: ['AI', 'Frontend', 'Workshop'],
    },
    {
      id: 3,
      title: 'React Advanced Patterns',
      type: 'Webinar',
      date: 'Mar 20, 2024',
      time: '11:00 AM PST',
      duration: '1.5 hours',
      attendees: 250,
      speaker: 'Michael Rodriguez',
      image: 'https://images.unsplash.com/photo-1558403194-611308249627?w=400',
      tags: ['React', 'Advanced', 'Development'],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Professional Events</h1>
        <p className="text-lg opacity-90">
          Connect, learn, and grow with industry professionals
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none bg-transparent"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'virtual fair', 'workshop', 'webinar'].map((type) => (
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

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                  {event.type}
                </span>
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{event.attendees}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{event.time} ({event.duration})</span>
                </div>
                {event.speaker && (
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Speaker: {event.speaker}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar View Toggle */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Schedule</h2>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>View Calendar</span>
          </button>
        </div>
        <div className="space-y-4">
          {events.slice(0, 2).map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {event.date} at {event.time}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:underline">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;