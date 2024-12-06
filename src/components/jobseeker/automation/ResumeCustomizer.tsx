import React, { useState } from 'react';
import { 
  FileText, 
  Bot, 
  CheckCircle, 
  AlertCircle,
  RefreshCw,
  Download,
  Eye,
  Sparkles
} from 'lucide-react';

interface ResumeCustomizationProps {
  jobDescription: string;
  originalResume: string;
  onCustomized: (customizedResume: string) => void;
}

const ResumeCustomizer: React.FC<ResumeCustomizationProps> = ({
  jobDescription,
  originalResume,
  onCustomized
}) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customizedResume, setCustomizedResume] = useState('');
  const [matchScore, setMatchScore] = useState(0);
  const [improvements, setImprovements] = useState<string[]>([]);

  const customizeResume = async () => {
    setIsCustomizing(true);
    
    // Mock AI customization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real implementation, this would be an API call to an AI service
    const mockCustomizedResume = originalResume;
    const mockScore = 85;
    const mockImprovements = [
      'Added relevant keywords from job description',
      'Highlighted matching technical skills',
      'Reordered experience to emphasize relevant projects',
      'Adjusted formatting for ATS optimization'
    ];

    setCustomizedResume(mockCustomizedResume);
    setMatchScore(mockScore);
    setImprovements(mockImprovements);
    setIsCustomizing(false);
    onCustomized(mockCustomizedResume);
  };

  return (
    <div className="space-y-6">
      {/* AI Analysis Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bot className="w-6 h-6 text-indigo-600" />
          <div>
            <h3 className="font-semibold">AI Resume Customization</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Optimizing resume for job requirements
            </p>
          </div>
        </div>
        {matchScore > 0 && (
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
            {matchScore}% Match
          </span>
        )}
      </div>

      {/* Job Requirements Analysis */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h4 className="font-medium mb-2">Key Requirements Identified</h4>
        <div className="space-y-2">
          {[
            'React.js Development',
            'TypeScript Experience',
            'Performance Optimization',
            'Team Leadership'
          ].map((req, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Customization Actions */}
      <div className="flex items-center space-x-4">
        <button
          onClick={customizeResume}
          disabled={isCustomizing}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {isCustomizing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Customizing...</span>
            </>
          ) : (
            <>
              <Bot className="w-4 h-4" />
              <span>Customize Resume</span>
            </>
          )}
        </button>
        {customizedResume && (
          <>
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500">
              <Eye className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500">
              <Download className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Improvements Made */}
      {improvements.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium">Improvements Made</h4>
          <div className="space-y-2">
            {improvements.map((improvement, index) => (
              <div key={index} className="flex items-start space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>{improvement}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Tips */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Tips</span>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Keep your resume concise and focused on relevant experience</span>
          </li>
          <li className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Use industry-specific keywords from the job description</span>
          </li>
          <li className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Quantify achievements with specific metrics when possible</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeCustomizer;