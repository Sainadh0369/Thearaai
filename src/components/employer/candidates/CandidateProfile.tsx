import React, { useState } from 'react';
import { 
  X, 
  Briefcase, 
  MapPin, 
  GraduationCap, 
  Award, 
  Star, 
  Download, 
  MessageCircle, 
  UserPlus,
  Play,
  Bot,
  Clock,
  Video,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface CandidateProfileProps {
  candidate: any;
  onClose: () => void;
}

const CandidateProfile: React.FC<CandidateProfileProps> = ({ candidate, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div className="flex space-x-4">
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{candidate.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{candidate.role}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {candidate.location}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mt-6">
            {['overview', 'evaluation', 'interviews', 'documents'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-8">
          {activeTab === 'overview' && (
            <>
              {/* AI Match Score */}
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Bot className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium">AI Match Analysis</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Overall Match
                    </div>
                    <div className="text-3xl font-bold text-indigo-600">
                      {candidate.match}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Technical Skills
                    </div>
                    <div className="text-3xl font-bold text-indigo-600">
                      {candidate.aiEvaluation.technicalSkills}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Culture Fit
                    </div>
                    <div className="text-3xl font-bold text-indigo-600">
                      {candidate.aiEvaluation.cultureFit}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Strengths */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Strengths</h3>
                <div className="space-y-2">
                  {candidate.aiEvaluation.strengths.map((strength: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Video Interview */}
              {candidate.hasVideoInterview && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Video Interview</h3>
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <button className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <Play className="w-8 h-8 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {activeTab === 'evaluation' && (
            <div className="space-y-6">
              {/* Detailed Evaluation Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Technical Skills', value: candidate.aiEvaluation.technicalSkills },
                  { label: 'Communication', value: candidate.aiEvaluation.communication },
                  { label: 'Culture Fit', value: candidate.aiEvaluation.cultureFit },
                  { label: 'Problem Solving', value: 88 },
                  { label: 'Leadership', value: 85 },
                  { label: 'Initiative', value: 90 }
                ].map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{metric.label}</span>
                      <span>{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Insights */}
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Bot className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium">AI Insights</span>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Based on the candidate's profile, interview responses, and skill assessments:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Strong technical background with proven experience in React and TypeScript</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Excellent communication skills demonstrated in video interview</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Values align well with company culture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-800 p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Schedule Interview
            </button>
            <button className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;