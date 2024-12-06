import React from 'react';
import { 
  Building, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock,
  Globe,
  Users,
  Bot,
  Star,
  X
} from 'lucide-react';

interface JobDetailsProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    posted: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
    companyInfo: {
      description: string;
      size: string;
      industry: string;
      website: string;
    };
    aiInsights: {
      match: number;
      strengths: string[];
      suggestions: string[];
    };
  };
  onClose: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <div className="flex items-center space-x-2 mt-2 text-gray-600 dark:text-gray-400">
                <Building className="w-4 h-4" />
                <span>{job.company}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Job Overview */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Briefcase className="w-4 h-4" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{job.posted}</span>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-5 h-5 text-indigo-600" />
              <span className="font-medium">AI Insights</span>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Your Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {job.aiInsights.strengths.map((strength, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Suggestions</h4>
                <div className="space-y-2">
                  {job.aiInsights.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Job Description</h3>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {job.description}
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About {job.company}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {job.companyInfo.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{job.companyInfo.size}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Briefcase className="w-4 h-4" />
                <span>{job.companyInfo.industry}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>{job.companyInfo.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-800 p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;