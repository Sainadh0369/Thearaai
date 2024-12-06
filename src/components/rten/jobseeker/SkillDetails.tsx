import React from 'react';
import { X, Globe, TrendingUp, Users, DollarSign, Bot } from 'lucide-react';
import type { SkillMarketMetrics } from '@/lib/types/rten';

interface SkillDetailsProps {
  skill: SkillMarketMetrics;
  onClose: () => void;
}

export const SkillDetails: React.FC<SkillDetailsProps> = ({ skill, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-semibold">{skill.skill}</h2>
            <p className="text-gray-600 dark:text-gray-400">Market Analysis</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Growth Rate</span>
              </div>
              <div className="text-2xl font-bold text-green-500">
                +{skill.growthRate}%
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                <Users className="w-4 h-4" />
                <span>Demand/Supply</span>
              </div>
              <div className="text-2xl font-bold">
                {(skill.demand / skill.supplyCount).toFixed(1)}x
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                <DollarSign className="w-4 h-4" />
                <span>Avg. Salary</span>
              </div>
              <div className="text-2xl font-bold">
                ${(skill.averageSalary / 1000).toFixed(0)}k
              </div>
            </div>
          </div>

          {/* Regional Distribution */}
          <div>
            <h3 className="font-semibold mb-4">Regional Distribution</h3>
            <div className="space-y-4">
              {skill.regionDistribution.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <span>{region.region}</span>
                  </div>
                  <span>{region.count} professionals</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Bot className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold">AI Career Insights</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                {skill.growthRate > 30
                  ? `${skill.skill} shows exceptional growth potential. High demand across all regions with competitive compensation.`
                  : skill.growthRate > 15
                  ? `${skill.skill} maintains steady growth with balanced market dynamics.`
                  : `${skill.skill} shows stable demand. Consider combining with complementary skills.`}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {skill.demand > skill.supplyCount
                  ? 'Current market shows more opportunities than available talent.'
                  : 'Market is competitive. Focus on specialization and expertise.'}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};