import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  Users,
  Video,
  Building,
  Bot,
  Plus,
  X,
  MessageCircle,
  Mail,
  Link as LinkIcon
} from 'lucide-react';

interface Interview {
  id: number;
  candidate: {
    name: string;
    role: string;
    image: string;
  };
  type: 'technical' | 'cultural' | 'final';
  date: string;
  time: string;
  duration: string;
  interviewers: {
    name: string;
    role: string;
    image: string;
  }[];
  status: 'scheduled' | 'completed' | 'cancelled';
  location: 'remote' | 'onsite';
  aiAssistant: boolean;
}

const InterviewScheduler = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const interviews: Interview[] = [
    {
      id: 1,
      candidate: {
        name: 'Sarah Chen',
        role: 'Senior Frontend Developer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      type: 'technical',
      date: '2024-03-15',
      time: '10:00 AM',
      duration: '1 hour',
      interviewers: [
        {
          name: 'John Smith',
          role: 'Tech Lead',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
        }
      ],
      status: 'scheduled',
      location: 'remote',
      aiAssistant: true
    },
    {
      id: 2,
      candidate: {
        name: 'Michael Kim',
        role: 'Product Manager',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      type: 'cultural',
      date: '2024-03-16',
      time: '2:00 PM',
      duration: '45 minutes',
      interviewers: [
        {
          name: 'Emma Wilson',
          role: 'HR Manager',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
        }
      ],
      status: 'scheduled',
      location: 'remote',
      aiAssistant: true
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-2">Interview Management</h1>
            <p className="text-gray-300">Schedule and manage interviews with AI assistance</p>
          </div>
          <button
            onClick={() => setShowScheduleModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Schedule Interview</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Today\'s Interviews', value: '3', icon: <Calendar /> },
          { label: 'Pending Reviews', value: '5', icon: <Clock /> },
          { label: 'Total Candidates', value: '12', icon: <Users /> },
          { label: 'AI Evaluations', value: '8', icon: <Bot /> }
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                {stat.icon}
              </div>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Upcoming Interviews */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Upcoming Interviews</h2>
        <div className="space-y-4">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
            >
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
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{interview.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{interview.time}</span>
                    </div>
                    {interview.location === 'remote' && (
                      <div className="flex items-center space-x-1">
                        <Video className="w-4 h-4" />
                        <span>Remote</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {interview.interviewers.map((interviewer, index) => (
                    <img
                      key={index}
                      src={interviewer.image}
                      alt={interviewer.name}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                      title={`${interviewer.name} - ${interviewer.role}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Mail className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <LinkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Assistant Section */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-6 h-6 text-indigo-600" />
          <h3 className="text-lg font-semibold">AI Interview Assistant</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Our AI assistant helps prepare customized interview questions and evaluates candidate responses in real-time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'Automated question generation',
            'Real-time response analysis',
            'Instant feedback and scoring'
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded-lg"
            >
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Bot className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewScheduler;