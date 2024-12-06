import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Globe, 
  Users, 
  Search,
  Filter,
  BrainCircuit,
  Target,
  ArrowRight
} from 'lucide-react';
import { skillsMarketplace } from '@/lib/rten/skillsMarketplace';
import type { SkillMarketMetrics } from '@/lib/types/rten';

export const SkillsMarketplace = () => {
  const [marketMetrics, setMarketMetrics] = useState<SkillMarketMetrics[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarketData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const insights = await skillsMarketplace.getMarketInsights();
        setMarketMetrics(insights);
      } catch (error) {
        setError('Failed to load market insights. Please try again later.');
        console.error('Error loading market insights:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMarketData();
    skillsMarketplace.connect();

    return () => {
      skillsMarketplace.disconnect();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Globe className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Real-Time Skills Marketplace</h1>
            <p className="text-lg opacity-90">
              Connect with opportunities matching your skills in real-time
            </p>
          </div>
        </div>

        <div className="mt-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search skills, roles, or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      {/* Market Insights */}
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
            <div className="space-y-2">
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

      {/* Rest of the component remains the same */}
    </div>
  );
};