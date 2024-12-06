import React, { useEffect } from 'react';
import { 
  Globe, 
  BrainCircuit, 
  Monitor,
  Target,
  Shield
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useRTENStore } from '@/store/useRTENStore';
import { TalentMarketplace } from './employer/TalentMarketplace';
import { SkillsMarketplace } from './jobseeker/SkillsMarketplace';
import { JobSimulator } from './simulator/JobSimulator';
import { MarketInsights } from './insights/MarketInsights';
import { RTENNav } from './RTENNav';

export const RTENDashboard = () => {
  const { user } = useAuth();
  const { 
    marketMetrics,
    activeTab,
    isLoading,
    error,
    fetchMarketInsights,
    setActiveTab
  } = useRTENStore();

  useEffect(() => {
    fetchMarketInsights();
  }, [fetchMarketInsights]);

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
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button 
          onClick={() => fetchMarketInsights()}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Retry
        </button>
      </div>
    );
  }

  const stats = [
    {
      icon: <Globe className="w-6 h-6" />,
      label: user?.role === 'employer' ? 'Active Candidates' : 'Active Opportunities',
      value: '2,847',
      trend: '+12.5%'
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: user?.role === 'employer' ? 'Talent Matches' : 'Job Matches',
      value: '1,234',
      trend: '+8.3%'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      label: user?.role === 'employer' ? 'Assessments' : 'Simulations',
      value: '456',
      trend: '+15.2%'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      label: 'Verifications',
      value: '3,890',
      trend: '+10.1%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-6">
          <BrainCircuit className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">
              {user?.role === 'employer' ? 'Talent Exchange Network' : 'Skills Exchange Network'}
            </h1>
            <p className="text-lg opacity-90">
              {user?.role === 'employer' 
                ? 'Find and verify top talent in real-time'
                : 'Showcase and verify your skills in real-time'}
            </p>
          </div>
        </div>

        <RTENNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                {stat.icon}
              </div>
              <span className="text-green-500 text-sm">{stat.trend}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="min-h-[600px]">
        {activeTab === 'marketplace' && (
          user?.role === 'employer' ? <TalentMarketplace /> : <SkillsMarketplace />
        )}
        {activeTab === 'simulation' && <JobSimulator />}
        {activeTab === 'insights' && <MarketInsights />}
      </div>
    </div>
  );
};