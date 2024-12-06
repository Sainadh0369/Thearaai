import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, CheckCircle, AlertCircle, TrendingUp, Target } from 'lucide-react';
import { resumeMatcher } from '@/lib/ai/resumeMatcher';
import { fadeIn, containerVariants } from '@/lib/animations';

export const ResumeMatchingPanel = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchResult, setMatchResult] = useState<any>(null);
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleMatch = async () => {
    if (!resume || !jobDescription) return;

    setIsAnalyzing(true);
    try {
      const result = await resumeMatcher.matchResumeToJob(resume, jobDescription);
      setMatchResult(result);
    } catch (error) {
      console.error('Error matching resume:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Input Section */}
      <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block font-medium">Resume</label>
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="w-full h-64 p-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
            placeholder="Paste your resume here..."
          />
        </div>

        <div className="space-y-4">
          <label className="block font-medium">Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full h-64 p-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
            placeholder="Paste the job description here..."
          />
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.div variants={fadeIn} className="flex justify-center">
        <button
          onClick={handleMatch}
          disabled={isAnalyzing || !resume || !jobDescription}
          className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Bot className="w-5 h-5" />
          <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Match'}</span>
        </button>
      </motion.div>

      {/* Results */}
      {matchResult && (
        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          {/* Match Score */}
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Match Score</h3>
              <span className={`text-2xl font-bold ${
                matchResult.score >= 80
                  ? 'text-green-500'
                  : matchResult.score >= 60
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}>
                {matchResult.score}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                className={`h-full rounded-full ${
                  matchResult.score >= 80
                    ? 'bg-green-500'
                    : matchResult.score >= 60
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${matchResult.score}%` }}
              />
            </div>
          </motion.div>

          {/* Strengths and Gaps */}
          <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Strengths</span>
              </h3>
              <ul className="space-y-2">
                {matchResult.strengths.map((strength: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <span>Areas for Improvement</span>
              </h3>
              <ul className="space-y-2">
                {matchResult.gaps.map((gap: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    <span>{gap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AI Insights */}
          <motion.div
            variants={fadeIn}
            className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold">AI Insights</h3>
            </div>
            <div className="space-y-4">
              {matchResult.insights.map((insight: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Recommendations</span>
            </h3>
            <ul className="space-y-4">
              {matchResult.recommendations.map((rec: string, index: number) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <Target className="w-4 h-4" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};