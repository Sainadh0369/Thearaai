import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Plus, Video, Globe, Search } from 'lucide-react';

const EventsManager = () => {
  const [filter, setFilter] = useState('upcoming');
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
      description: 'Join us for our annual tech career fair featuring opportunities in AI, ML, and frontend development.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
    },
    {
      id: 2,
      title: 'AI in Frontend Development',
      type: 'Webinar',
      date: 'Mar 18, 2024',
      time: '2:00 PM PST',
      duration: '1 hour',
      attendees: 180,
      description: 'Learn how AI is transforming frontend development and what skills you need to stay ahead.',
      image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=400',
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Events Manager</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create and manage recruitment events
          </p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Event</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 outline-none bg-transparent"
            />
          </div>
          <div className="flex gap-2">
            {['upcoming', 'past', 'draft'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === type
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-1">
                    {event.type === 'Virtual Fair' ? (
                      <Video className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                    <span>{event.type}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {event.attendees}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {event.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{event.time}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  Manage Event
                </button>
                <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsManager;