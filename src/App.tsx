import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LandingPage } from './components/landing/LandingPage';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { JobSeekerPortal } from './components/jobseeker/JobSeekerPortal';
import { EmployerPortal } from './components/employer/EmployerPortal';
import { CareerPage } from './components/company/CareerPage';
import { EmployerSolutions } from './components/employer/EmployerSolutions';
import { JobSeekerSolutions } from './components/jobseeker/JobSeekerSolutions';
import { RTENDashboard } from './components/rten/RTENDashboard';
import { useAuth } from './hooks/useAuth';
import { AuthGuard } from './components/auth/AuthGuard';
import { AIAssistant } from './components/common/AIAssistant';

const App = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={
                isAuthenticated ? <Navigate to={`/${user?.role}`} /> : <SignIn />
              } />
              <Route path="/signup" element={
                isAuthenticated ? <Navigate to={`/${user?.role}`} /> : <SignUp />
              } />
              <Route path="/employer/solutions" element={<EmployerSolutions />} />
              <Route path="/jobseeker/solutions" element={<JobSeekerSolutions />} />
              <Route path="/careers" element={<CareerPage />} />

              {/* Protected Routes */}
              <Route path="/employer/*" element={
                <AuthGuard allowedRoles={['employer']}>
                  <EmployerPortal />
                </AuthGuard>
              } />
              <Route path="/jobseeker/*" element={
                <AuthGuard allowedRoles={['jobseeker']}>
                  <JobSeekerPortal />
                </AuthGuard>
              } />
              <Route path="/rten/*" element={
                <AuthGuard>
                  <RTENDashboard />
                </AuthGuard>
              } />

              {/* Fallback Route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </BrowserRouter>
  );
};

export default App;