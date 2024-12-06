import React, { useState } from 'react';
import { 
  Video, 
  Calendar, 
  Users, 
  MessageSquare, 
  Clock,
  FileText,
  Settings,
  Plus
} from 'lucide-react';

const InterviewHub = () => {
  const [filter, setFilter] = useState('upcoming');
  
  const interviews = [
    {
      id: 1,
      candidate: {
        name: 'Sarah Chen',
        role: 'Senior Frontend Developer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      type: 'Technical',
      date: '2024-03-15',
      time: '10:00 AM PST',
      duration: '1 hour',
      status: 'scheduled',
      interviewers: [
        { name: 'Michael Kim', role: 'Tech Lead' },
        { name: 'Emily Davis', role: 'Senior Engineer' }
      ]
    },
    {
      id: 2,
      candidate: {
        name: 'David Park',
        role: 'Product Manager',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      type: 'Culture Fit',
      date: '2024-03-16',
      time: '2:00 PM PST',
      duration: '45 minutes',
      status: 'pending',
      interviewers: [
        { name: 'Lisa Wang', role: 'HR Manager' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Video className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Interview Hub</h1>
        </div>
        <p className="text-lg opacity-90">
          Schedule and conduct interviews seamlessly
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <Plus className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="font-semibold">Schedule Interview</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Set up a new interview
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Video className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold">Join Interview</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enter virtual room
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold">Templates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage interview formats
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Interview List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
          <div className="flex gap-2">
            {['upcoming', 'completed', 'cancelled'].map((type) => (
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

        <div className="space-y-4">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={interview.candidate.image}
                    alt={interview.candidate.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{interview.candidate.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {interview.candidate.role}
                    </p>
                    <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{interview.date} at {interview.time}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{interview.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    interview.status === 'scheduled'
                      ? 'bg-green-100 dark:bg-green-900 text-green-600'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
                  }`}>
                    {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                  </span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Join Room
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Interviewers: {interview.interviewers.map(i => i.name).join(', ')}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {interview.type} Interview
                  </span>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <FileText className="w-4 h-4" />
                  <span>View Notes</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewHub;