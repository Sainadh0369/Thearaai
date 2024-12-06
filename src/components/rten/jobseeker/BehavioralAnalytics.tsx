import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Target, 
  TrendingUp, 
  Bot,
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { behavioralEngine } from '@/lib/ai/behavioralEngine';
import { containerVariants, fadeIn } from '@/lib/animations';

export const BehavioralAnalytics = () => {
  const [insights, setInsights] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadInsights();
  }, []);

  const loadInsights = async () => {
    try {
      const userId = 'current_user'; // Replace with actual user ID
      const newInsights = await behavioralEngine.getInsights(userId);
      setInsights(newInsights);
    } catch (error) {
      console.error('Error loading insights:', error);
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
      {/* Success Metrics */}
      <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Application Success</h3>
            <Target className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">85%</span>
            <span className="text-sm text-green-500 ml-2">+12%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Best Application Time</h3>
            <Clock className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">10 AM</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Tuesday</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Response Rate</h3>
            <TrendingUp className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">72%</span>
            <span className="text-sm text-green-500 ml-2">+8%</span>
          </div>
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Bot className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-semibold">AI Behavioral Insights</h2>
        </div>

        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {insight.confidence > 0.8 ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  )}
                  <span className="font-medium">{insight.type}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {Math.round(insight.confidence * 100)}% confidence
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {insight.insight}
              </p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">
                Recommendation: {insight.recommendation}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Application Timeline */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Application Timeline</h2>
        <div className="space-y-4">
          {[
            {
              date: '2024-03-10',
              time: '10:30 AM',
              action: 'Application Submitted',
              company: 'TechCorp Inc.',
              outcome: 'Viewed'
            },
            {
              date: '2024-03-09',
              time: '2:15 PM',
              action: 'Profile Updated',
              company: 'System',
              outcome: 'Completed'
            }
          ].map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div className="text-sm text-gray-500 mt-1">{event.time}</div>
                </div>
                <div>
                  <h3 className="font-medium">{event.action}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {event.company}
                  </p>
                </div>
              </div>
              <span className="text-sm text-indigo-600">{event.outcome}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};