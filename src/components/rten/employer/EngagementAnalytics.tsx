import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Clock, 
  TrendingUp, 
  Bot,
  Star,
  Calendar
} from 'lucide-react';
import { containerVariants, fadeIn } from '@/lib/animations';

export const EngagementAnalytics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    loadMetrics();
  }, []);

  const loadMetrics = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMetrics({
        profileViews: 1234,
        averageViewTime: '2.5 mins',
        responseRate: '92%',
        engagementScore: 85
      });
    } catch (error) {
      console.error('Error loading metrics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Key Metrics */}
      <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Profile Views</h3>
            <Users className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{metrics.profileViews}</span>
            <span className="text-sm text-green-500 ml-2">+15%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Avg. View Time</h3>
            <Clock className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{metrics.averageViewTime}</span>
            <span className="text-sm text-green-500 ml-2">+8%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Response Rate</h3>
            <TrendingUp className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{metrics.responseRate}</span>
            <span className="text-sm text-green-500 ml-2">+5%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Engagement Score</h3>
            <Star className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{metrics.engagementScore}</span>
            <span className="text-sm text-green-500 ml-2">+10%</span>
          </div>
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div variants={fadeIn} className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Engagement Insights</span>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Profile views peak between 9 AM and 11 AM. Consider scheduling important
            updates during these hours for maximum visibility.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Candidates spend more time reviewing profiles with detailed project
            descriptions and verified skills.
          </p>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
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
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {activity.time}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Duration: {activity.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};