import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Bot, AlertCircle } from 'lucide-react';

export const CompleteProfile = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Common fields
    name: user?.name || '',
    phone: '',
    location: '',
    
    // Job seeker fields
    resume: null as File | null,
    skills: [] as string[],
    experience: '',
    aiAutomation: false,
    
    // Employer fields
    companyName: '',
    industry: '',
    companySize: '',
    website: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update user profile
    updateUser({
      ...user,
      profileComplete: true
    });

    // If job seeker with AI automation enabled, redirect to automated search
    if (user?.role === 'jobseeker' && formData.aiAutomation) {
      navigate('/jobseeker/automated-search');
    } else {
      // Redirect based on role
      navigate(user?.role === 'employer' ? '/employer' : '/jobseeker');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Complete Your Profile</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Common Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
        </div>

        {/* Role-specific fields */}
        {user?.role === 'jobseeker' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Resume</label>
              <input
                type="file"
                onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                className="w-full"
                accept=".pdf,.doc,.docx"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Skills</label>
              <input
                type="text"
                placeholder="Enter skills separated by commas"
                onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(',').map(s => s.trim()) })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Years of Experience</label>
              <input
                type="number"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                min="0"
              />
            </div>

            {/* AI Automation Consent */}
            <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">AI Job Search Automation</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Enable AI to automatically search and apply for matching jobs across multiple platforms.
                The AI will customize your resume for each application to increase your chances of success.
              </p>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.aiAutomation}
                  onChange={(e) => setFormData({ ...formData, aiAutomation: e.target.checked })}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm">
                  I authorize the AI to search and apply for jobs on my behalf
                </span>
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Industry</label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Company Size</label>
              <select
                value={formData.companySize}
                onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              >
                <option value="">Select size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">501+ employees</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Company Website</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
};