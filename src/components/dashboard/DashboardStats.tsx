import React from 'react';
import { BarChart, Users, BriefcaseIcon, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Applications',
    value: '2,847',
    change: '+12.5%',
    icon: <BriefcaseIcon className="w-6 h-6" />,
  },
  {
    title: 'Active Jobs',
    value: '245',
    change: '+4.3%',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Interview Rate',
    value: '68%',
    change: '+2.1%',
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: 'Time to Hire',
    value: '18 days',
    change: '-3.2%',
    icon: <BarChart className="w-6 h-6" />,
  },
];

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="text-gray-900 dark:text-gray-100">
                {stat.icon}
              </div>
            </div>
            <span
              className={`text-sm font-medium ${
                stat.change.startsWith('+')
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {stat.change}
            </span>
          </div>
          <h3 className="text-lg font-semibold mt-4">{stat.title}</h3>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};