import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployerNav from './EmployerNav';
import { JobPostings } from './JobPostings';
import { CandidateList } from './CandidateList';
import { EmployerAnalytics } from './EmployerAnalytics';
import { CompanyProfile } from './CompanyProfile';
import BackgroundVerification from './verification/BackgroundVerification';
import EventsManager from './events/EventsManager';
import InterviewScheduler from './interviews/InterviewScheduler';
import CommunicationHub from './communication/CommunicationHub';

export const EmployerPortal = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Employer Portal</h1>
        <p className="text-gray-300">Manage your recruitment process efficiently</p>
      </div>

      {/* Navigation */}
      <EmployerNav />

      {/* Main Content */}
      <div className="mt-8">
        <Routes>
          <Route index element={<JobPostings />} />
          <Route path="jobs/*" element={<JobPostings />} />
          <Route path="candidates/*" element={<CandidateList />} />
          <Route path="interviews/*" element={<InterviewScheduler />} />
          <Route path="communication/*" element={<CommunicationHub />} />
          <Route path="analytics" element={<EmployerAnalytics />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="verification/*" element={<BackgroundVerification />} />
          <Route path="events/*" element={<EventsManager />} />
        </Routes>
      </div>
    </div>
  );
};