import React from 'react';
import { useAuth } from '@/hooks/useAuth';

interface RTENNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const RTENNav: React.FC<RTENNavProps> = ({ activeTab, onTabChange }) => {
  const { user } = useAuth();

  const employerTabs = [
    { id: 'marketplace', label: 'Talent Marketplace' },
    { id: 'simulation', label: 'Assessment Builder' },
    { id: 'insights', label: 'Market Insights' },
    { id: 'engagement', label: 'Engagement Analytics' }
  ];

  const jobSeekerTabs = [
    { id: 'marketplace', label: 'Skills Marketplace' },
    { id: 'simulation', label: 'Job Simulation' },
    { id: 'insights', label: 'Market Insights' },
    { id: 'behavioral', label: 'Behavioral Analytics' }
  ];

  const tabs = user?.role === 'employer' ? employerTabs : jobSeekerTabs;

  return (
    <div className="flex space-x-4">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === tab.id
              ? 'bg-white text-gray-900'
              : 'text-white hover:bg-white/10'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};