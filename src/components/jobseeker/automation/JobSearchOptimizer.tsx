import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  TrendingUp, 
  Bot,
  Globe,
  Calendar,
  Clock,
  AlertCircle
} from 'lucide-react';
import { jobAutomation } from '@/lib/ai/jobAutomation';
import { fadeIn, containerVariants } from '@/lib/animations';

export const JobSearchOptimizer = () => {
  const [insights, setInsights] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchMetrics, setSearchMetrics] = useState({
    totalSearches: 0,
    matchRate: 0,
    averageScore: 0,
    topKeywords: []
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Simulate API calls
      await Promise.all([
        loadInsights(),
        loadMetrics()
      ]);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadInsights = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setInsights([
      {
        type: 'keyword',
        insight: 'Adding "system design" to your profile increased matches by 25%',
        confidence: 0.92
      },
      {
        type: 'timing',
        insight: 'Applications submitted between 9-11 AM have 40% higher response rates',
        confidence: 0.88
      },
      {
        type: 'location',
        insight: 'Remote positions show 30% higher match rates for your profile',
        confidence: 0.85
      }
    ]);
  };

  const loadMetrics = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSearchMetrics({
      totalSearches: 1234,
      matchRate: 85,
      averageScore: 92,
      topKeywords: ['React', 'TypeScript', 'Node.js']
    });
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
      {/* Search Metrics */}
      <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Total Searches</h3>
            <Search className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{searchMetrics.totalSearches}</span>
            <span className="text-sm text-green-500 ml-2">+15%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Match Rate</h3>
            <Target className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{searchMetrics.matchRate}%</span>
            <span className="text-sm text-green-500 ml-2">+8%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Average Score</h3>
            <TrendingUp className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{searchMetrics.averageScore}</span>
            <span className="text-sm text-green-500 ml-2">+5%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Top Keywords</h3>
            <Globe className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {searchMetrics.topKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div variants={fadeIn} className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Search Insights</span>
        </div>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg"
            >
              {insight.type === 'keyword' && <Search className="w-5 h-5 text-indigo-600" />}
              {insight.type === 'timing' && <Clock className="w-5 h-5 text-indigo-600" />}
              {insight.type === 'location' && <Globe className="w-5 h-5 text-indigo-600" />}
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-400">{insight.insight}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-sm text-indigo-600">
                    {Math.round(insight.confidence * 100)}% confidence
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Optimization Timeline */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Optimization Timeline</h2>
        <div className="space-y-4">
          {[
            {
              date: '2024-03-10',
              time: '10:30 AM',
              action: 'Search Parameters Updated',
              impact: 'Match rate increased by 15%',
              type: 'success'
            },
            {
              date: '2024-03-09',
              time: '2:15 PM',
              action: 'New Keywords Added',
              impact: 'Visibility improved by 25%',
              type: 'success'
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
                    {event.impact}
                  </p>
                </div>
              </div>
              {event.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-500" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};