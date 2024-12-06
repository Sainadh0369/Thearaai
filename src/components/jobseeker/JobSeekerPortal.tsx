import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobSeekerNav from './JobSeekerNav';
import JobSeekerDashboard from './JobSeekerDashboard';
import Jobs from './jobs/Jobs';
import CareerTools from './career/CareerTools';
import Network from './network/Network';
import Learning from './learning/Learning';
import { Portfolio } from './portfolio/Portfolio';
import VideoInterview from './interview/VideoInterview';
import AutomatedJobSearch from './automation/AutomatedJobSearch';
import ResumeCustomizer from './automation/ResumeCustomizer';

export const JobSeekerPortal = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Job Seeker Portal</h1>
        <p className="text-gray-300">Find your perfect role with AI-powered job matching</p>
      </div>

      {/* Navigation */}
      <JobSeekerNav />

      {/* Main Content */}
      <div className="mt-8">
        <Routes>
          <Route index element={<JobSeekerDashboard />} />
          <Route path="jobs/*" element={<Jobs />} />
          <Route path="career-tools/*" element={<CareerTools />} />
          <Route path="network/*" element={<Network />} />
          <Route path="learning/*" element={<Learning />} />
          <Route path="portfolio/*" element={<Portfolio />} />
          <Route path="video-interview" element={<VideoInterview />} />
          <Route path="automated-search" element={<AutomatedJobSearch />} />
          <Route path="resume-customizer" element={<ResumeCustomizer />} />
        </Routes>
      </div>
    </div>
  );
};