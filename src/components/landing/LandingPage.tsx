import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { ProcessSection } from './sections/ProcessSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CTASection } from './sections/CTASection';

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with RTEN Feature */}
      <HeroSection />

      {/* Main Content */}
      <div className="space-y-32">
        {/* Stats Overview */}
        <StatsSection />

        {/* Solutions */}
        <SolutionsSection />

        {/* Core Features */}
        <FeaturesSection />

        {/* How It Works */}
        <ProcessSection />

        {/* Success Stories */}
        <TestimonialsSection />

        {/* Call to Action */}
        <CTASection />
      </div>
    </div>
  );
};