import React from 'react';
import { Clock, Users, Star, TrendingUp, Bot } from 'lucide-react';
import { useRTENStore } from '@/store/useRTENStore';

export const EngagementDashboard = () => {
  const { marketMetrics } = useRTENStore();

  const engagementStats = [
    {
      label: 'Average Review Time',
      value: '2.5 mins',
      trend: '+15%',
      icon: <Clock className="w-6 h-6" />
    },
    {
      label: 'Profile Views',
      value: '1,234',
      trend: '+25%',
      icon: <Users className="w-6 h-6" />
    },
    {
      label: 'Interest Score',
      value: '92%',
      trend: '+8%',
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {engagementStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                {stat.icon}
              </div>
              <span className="text-green-500 text-sm">{stat.trend}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Engagement Insights</span>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Candidate engagement is highest during morning hours (9 AM - 11 AM).
            Consider scheduling important communications during this window.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Profiles with verified skills receive 45% more views and have a 60%
            higher response rate.
          </p>
        </div>
      </div>

      {/* Engagement Timeline */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              action: 'Profile View',
              candidate: 'Sarah Chen',
              time: '5 minutes ago',
              duration: '2.5 mins'
            },
            {
              action: 'Resume Download',
              candidate: 'Michael Kim',
              time: '15 minutes ago',
              duration: '1 min'
            }
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div>
                <h3 className="font-medium">{activity.action}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.candidate}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.time}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Duration: {activity.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">AI Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Optimize Profile Views',
              description: 'Schedule candidate communications during peak engagement hours (9 AM - 11 AM)',
              impact: 'High'
            },
            {
              title: 'Improve Response Rate',
              description: 'Personalize messages based on candidate preferences and availability',
              impact: 'Medium'
            }
          ].map((rec, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{rec.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  rec.impact === 'High'
                    ? 'bg-green-100 dark:bg-green-900 text-green-600'
                    : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
                }`}>
                  {rec.impact} Impact
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {rec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};