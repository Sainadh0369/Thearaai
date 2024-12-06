import React from 'react';
import { TrendingUp, DollarSign, Users } from 'lucide-react';
import type { SkillMarketMetrics } from '@/lib/types/rten';

interface SkillCardProps {
  metric: SkillMarketMetrics;
  onClick?: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ metric, onClick }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{metric.skill}</h3>
        <span className="text-green-500 flex items-center space-x-1">
          <TrendingUp className="w-4 h-4" />
          <span>+{metric.growthRate}%</span>
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Users className="w-4 h-4" />
            <span>Demand</span>
          </div>
          <span>{metric.demand} positions</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <DollarSign className="w-4 h-4" />
            <span>Avg. Salary</span>
          </div>
          <span>${metric.averageSalary.toLocaleString()}</span>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Saturation</div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${(metric.supplyCount / metric.demand) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};