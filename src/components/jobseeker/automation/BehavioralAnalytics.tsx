import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Bot,
  Calendar,
  CheckCircle,
  AlertCircle,
  Brain,
  Sparkles,
  LineChart
} from 'lucide-react';
import { behavioralEngine } from '@/lib/ai/behavioralEngine';
import { fadeIn, containerVariants } from '@/lib/animations';

export const BehavioralAnalytics = () => {
  const [insights, setInsights] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [learningMetrics, setLearningMetrics] = useState({
    adaptationRate: 0,
    successPatterns: [],
    improvementAreas: []
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const userId = 'current_user'; // Replace with actual user ID
      const [newInsights, metrics] = await Promise.all([
        behavioralEngine.getInsights(userId),
        loadLearningMetrics()
      ]);
      setInsights(newInsights);
      setLearningMetrics(metrics);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadLearningMetrics = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      adaptationRate: 85,
      successPatterns: [
        'Early morning applications',
        'Detailed cover letters',
        'Quick response to messages'
      ],
      improvementAreas: [
        'Follow-up timing',
        'Interview preparation',
        'Skill highlighting'
      ]
    };
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
      {/* Learning Progress */}
      <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Adaptation Rate</h3>
            <Brain className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{learningMetrics.adaptationRate}%</span>
            <span className="text-sm text-green-500 ml-2">+12%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Success Patterns</h3>
            <Sparkles className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">{learningMetrics.successPatterns.length}</span>
            <span className="text-sm text-green-500 ml-2">+3 new</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Learning Score</h3>
            <LineChart className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">92</span>
            <span className="text-sm text-green-500 ml-2">+8%</span>
          </div>
        </div>
      </motion.div>

      {/* Success Patterns */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Success Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-600 dark:text-gray-400">What's Working</h3>
            {learningMetrics.successPatterns.map((pattern, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{pattern}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-600 dark:text-gray-400">Areas for Improvement</h3>
            {learningMetrics.improvementAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg"
              >
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div variants={fadeIn} className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Behavioral Insights</span>
        </div>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg"
            >
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Brain className="w-5 h-5 text-indigo-600" />
              </div>
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

      {/* Learning Timeline */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Learning Timeline</h2>
        <div className="space-y-4">
          {[
            {
              date: '2024-03-10',
              time: '10:30 AM',
              event: 'New Success Pattern Identified',
              detail: 'Early morning applications show 40% higher response rate',
              type: 'success'
            },
            {
              date: '2024-03-09',
              time: '2:15 PM',
              event: 'Behavior Adaptation',
              detail: 'Adjusted application strategy based on feedback',
              type: 'info'
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
                  <h3 className="font-medium">{event.event}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {event.detail}
                  </p>
                </div>
              </div>
              {event.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-blue-500" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};