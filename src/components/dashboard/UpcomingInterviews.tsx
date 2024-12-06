import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

export const UpcomingInterviews = () => {
  const interviews = [
    {
      id: 1,
      candidate: 'David Park',
      role: 'Frontend Developer',
      type: 'Technical Interview',
      date: 'Tomorrow',
      time: '10:00 AM',
      interviewer: 'John Smith'
    },
    {
      id: 2,
      candidate: 'Lisa Wang',
      role: 'Product Designer',
      type: 'Portfolio Review',
      date: 'Tomorrow',
      time: '2:00 PM',
      interviewer: 'Emma Wilson'
    },
    {
      id: 3,
      candidate: 'James Chen',
      role: 'Full Stack Developer',
      type: 'Final Interview',
      date: 'Mar 15',
      time: '11:00 AM',
      interviewer: 'Michael Brown'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Upcoming Interviews</h2>
      <div className="space-y-4">
        {interviews.map((interview) => (
          <div
            key={interview.id}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{interview.candidate}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {interview.role}
                </p>
              </div>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                {interview.type}
              </span>
            </div>
            <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {interview.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {interview.time}
              </div>
              <div className="flex items-center">
                <Video className="w-4 h-4 mr-1" />
                Virtual
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
        View All Interviews
      </button>
    </div>
  );
};