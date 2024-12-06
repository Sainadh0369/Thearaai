import React from 'react';
import { DashboardStats } from './DashboardStats';
import { RecentApplications } from './RecentApplications';
import { UpcomingInterviews } from './UpcomingInterviews';
import { MarketInsights } from './MarketInsights';

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-300">Welcome back! Here's your recruitment overview</p>
      </div>

      {/* Stats Overview */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentApplications />
        <UpcomingInterviews />
      </div>

      {/* Market Insights */}
      <MarketInsights />
    </div>
  );
};