import React from 'react';
import { PortfolioSection } from './PortfolioSection';

export const Portfolio: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
        <p className="text-gray-300">Showcase your work and achievements</p>
      </div>

      {/* Portfolio Content */}
      <PortfolioSection />
    </div>
  );
};