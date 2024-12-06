import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Globe } from 'lucide-react';

const data = [
  { month: 'Jan', applications: 65 },
  { month: 'Feb', applications: 85 },
  { month: 'Mar', applications: 120 },
  { month: 'Apr', applications: 95 },
  { month: 'May', applications: 140 },
  { month: 'Jun', applications: 180 }
];

export const MarketInsights = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Market Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg">
              <TrendingUp className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>
            <span className="text-green-600 dark:text-green-400">+15%</span>
          </div>
          <h3 className="font-medium">Market Growth</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Year over year</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg">
              <Users className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>
            <span className="text-green-600 dark:text-green-400">+25%</span>
          </div>
          <h3 className="font-medium">Talent Pool</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active candidates</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg">
              <Globe className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>
            <span className="text-green-600 dark:text-green-400">+30%</span>
          </div>
          <h3 className="font-medium">Remote Jobs</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Global opportunities</p>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="applications"
              stroke="#4B5563"
              fill="#E5E7EB"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};