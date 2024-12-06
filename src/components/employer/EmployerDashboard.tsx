import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, Users, BarChart, TrendingUp, 
  Clock, CheckCircle, XCircle, MessageSquare 
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

const EmployerDashboard = () => {
  const stats = [
    { icon: <Briefcase />, label: 'Active Jobs', value: '12' },
    { icon: <Users />, label: 'Total Applicants', value: '143' },
    { icon: <CheckCircle />, label: 'Interviews Scheduled', value: '28' },
    { icon: <TrendingUp />, label: 'Hiring Rate', value: '92%' },
  ];

  const chartData = [
    { name: 'Jan', applicants: 65 },
    { name: 'Feb', applicants: 85 },
    { name: 'Mar', applicants: 120 },
    { name: 'Apr', applicants: 95 },
    { name: 'May', applicants: 140 },
    { name: 'Jun', applicants: 180 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600 dark:text-indigo-400">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Applicant Trends */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Applicant Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="applicants" 
                stroke="#4f46e5" 
                fill="#4f46e5" 
                fillOpacity={0.1} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {[
              {
                name: 'Sarah Chen',
                role: 'Senior Frontend Developer',
                status: 'shortlisted',
                time: '2 hours ago',
              },
              {
                name: 'Michael Kim',
                role: 'UI/UX Designer',
                status: 'reviewing',
                time: '5 hours ago',
              },
            ].map((applicant, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{applicant.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {applicant.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {applicant.time}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    applicant.status === 'shortlisted'
                      ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
                  }`}
                >
                  {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
          <div className="space-y-4">
            {[
              {
                name: 'David Park',
                role: 'Frontend Developer',
                time: 'Today at 2:00 PM',
                type: 'Technical',
              },
              {
                name: 'Emma Wilson',
                role: 'Product Designer',
                time: 'Tomorrow at 11:00 AM',
                type: 'Culture Fit',
              },
            ].map((interview, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{interview.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {interview.role}
                  </p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{interview.time}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                  {interview.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;