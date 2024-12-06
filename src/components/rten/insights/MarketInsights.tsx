import React from 'react';
import { TrendingUp, Globe, Users } from 'lucide-react';
import { useRTENStore } from '@/store/useRTENStore';

export const MarketInsights = () => {
  const { marketMetrics } = useRTENStore();

  return (
    <div className="space-y-8">
      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {marketMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{metric.skill}</h3>
              <span className="text-green-500 flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>+{metric.growthRate}%</span>
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Demand</span>
                <span>{metric.demand} positions</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Supply</span>
                <span>{metric.supplyCount} candidates</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Avg. Salary</span>
                <span>${metric.averageSalary.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Regional Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Regional Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketMetrics[0]?.regionDistribution.map((region, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{region.region}</span>
                <Globe className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Talent Pool</span>
                <span>{region.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};