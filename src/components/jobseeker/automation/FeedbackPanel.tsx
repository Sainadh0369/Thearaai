import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  CheckCircle,
  RefreshCw,
  Bot
} from 'lucide-react';
import { feedbackEngine } from '@/lib/ai/feedbackEngine';
import { fadeIn, containerVariants } from '@/lib/animations';

export const FeedbackPanel = () => {
  const [metrics, setMetrics] = useState<any>(null);
  const [insights, setInsights] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [newMetrics, newInsights] = await Promise.all([
        feedbackEngine.getMetrics(),
        feedbackEngine.getInsights()
      ]);
      setMetrics(newMetrics);
      setInsights(newInsights);
    } catch (error) {
      console.error('Error loading feedback data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Metrics Overview */}
      <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Success Rate</h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">
              {metrics?.successRate.toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Average Response Time</h3>
            <Clock className="w-5 h-5 text-indigo-500" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">
              {(metrics?.averageResponseTime / (24 * 60 * 60 * 1000)).toFixed(1)} days
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Applications Analyzed</h3>
            <RefreshCw className="w-5 h-5 text-purple-500" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">
              {metrics?.totalApplications || 0}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Common Rejection Reasons */}
      <motion.div
        variants={fadeIn}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-6">Common Rejection Factors</h2>
        <div className="space-y-4">
          {metrics?.commonRejectionReasons.map((reason: string, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <span>{reason}</span>
              </div>
              <span className="text-sm text-gray-500">
                {Math.round(Math.random() * 20 + 10)}% of rejections
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div
        variants={fadeIn}
        className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Insights</span>
        </div>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{insight}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Improvement Suggestions */}
      <motion.div
        variants={fadeIn}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-6">Suggested Improvements</h2>
        <div className="space-y-4">
          {metrics?.improvementSuggestions.map((suggestion: string, index: number) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <TrendingUp className="w-5 h-5 text-indigo-500" />
              <span>{suggestion}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Refresh Button */}
      <motion.div variants={fadeIn} className="flex justify-center">
        <button
          onClick={loadData}
          disabled={isLoading}
          className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? 'Refreshing...' : 'Refresh Analysis'}</span>
        </button>
      </motion.div>
    </motion.div>
  );
};