import React from 'react';
import { BarChart, TrendingUp, Users, Clock, Target, Globe } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

export const EmployerAnalytics = () => {
  const metrics = [
    {
      title: 'Time to Hire',
      value: '18 days',
      change: '-2 days',
      icon: <Clock className="w-6 h-6" />,
      trend: 'positive'
    },
    {
      title: 'Application Rate',
      value: '+15%',
      change: '+3%',
      icon: <TrendingUp className="w-6 h-6" />,
      trend: 'positive'
    },
    {
      title: 'Interview Success',
      value: '72%',
      change: '+5%',
      icon: <Users className="w-6 h-6" />,
      trend: 'positive'
    },
    {
      title: 'Offer Acceptance',
      value: '85%',
      change: '+2%',
      icon: <Target className="w-6 h-6" />,
      trend: 'positive'
    }
  ];

  const chartData = [
    { name: 'Jan', applicants: 65 },
    { name: 'Feb', applicants: 85 },
    { name: 'Mar', applicants: 120 },
    { name: 'Apr', applicants: 95 },
    { name: 'May', applicants: 140 },
    { name: 'Jun', applicants: 180 }
  ];

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="text-gray-900 dark:text-gray-100">
                  {metric.icon}
                </div>
              </div>
              <span className={`text-sm font-medium ${
                metric.trend === 'positive' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-4">{metric.title}</h3>
            <p className="text-2xl font-bold mt-2">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Application Trends */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Application Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="applicants"
                stroke="#111827"
                fill="#111827"
                fillOpacity={0.1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Diversity Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Diversity & Inclusion</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Gender Diversity</span>
                <span>75%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-full bg-gray-900 dark:bg-gray-100 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Ethnic Diversity</span>
                <span>68%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-full bg-gray-900 dark:bg-gray-100 rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Global Reach</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              <span>25 Countries</span>
            </div>
            <span className="text-gray-900 dark:text-gray-100">+15% YoY</span>
          </div>
          <div className="mt-4 space-y-2">
            {['North America', 'Europe', 'Asia Pacific'].map((region) => (
              <div key={region} className="flex justify-between items-center">
                <span>{region}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {Math.floor(Math.random() * 30 + 20)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};