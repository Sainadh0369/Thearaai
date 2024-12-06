import React, { useState } from 'react';
import { Bot, Video, CheckCircle, AlertCircle, Settings, Plus, X } from 'lucide-react';

interface AIScreeningSettingsProps {
  onSettingsChange: (settings: any) => void;
}

const AIScreeningSettings: React.FC<AIScreeningSettingsProps> = ({ onSettingsChange }) => {
  const [settings, setSettings] = useState({
    enabled: false,
    autoReview: true,
    videoInterview: true,
    autoFeedback: true,
    customQuestions: [] as string[],
    requiredSkills: [] as string[],
    minimumMatch: 80
  });

  const [newQuestion, setNewQuestion] = useState('');
  const [newSkill, setNewSkill] = useState('');

  const handleSettingsChange = (newSettings: any) => {
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  return (
    <div className="space-y-6">
      {/* Enable AI Screening */}
      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="flex items-center space-x-3">
          <Bot className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <div>
            <h3 className="font-medium">AI-Powered Screening</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enable automated candidate screening and interviews
            </p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={settings.enabled}
            onChange={(e) => handleSettingsChange({ ...settings, enabled: e.target.checked })}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
        </label>
      </div>

      {settings.enabled && (
        <>
          {/* Screening Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-medium">Auto Review</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoReview}
                  onChange={(e) => handleSettingsChange({ ...settings, autoReview: e.target.checked })}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Video className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-medium">Video Interview</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.videoInterview}
                  onChange={(e) => handleSettingsChange({ ...settings, videoInterview: e.target.checked })}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-medium">Auto Feedback</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoFeedback}
                  onChange={(e) => handleSettingsChange({ ...settings, autoFeedback: e.target.checked })}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>

          {/* Custom Questions */}
          <div className="space-y-4">
            <h3 className="font-medium">Custom Interview Questions</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Add a custom question..."
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
              />
              <button
                onClick={() => {
                  if (newQuestion.trim()) {
                    handleSettingsChange({
                      ...settings,
                      customQuestions: [...settings.customQuestions, newQuestion.trim()]
                    });
                    setNewQuestion('');
                  }
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              {settings.customQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <span>{question}</span>
                  <button
                    onClick={() => {
                      const newQuestions = [...settings.customQuestions];
                      newQuestions.splice(index, 1);
                      handleSettingsChange({ ...settings, customQuestions: newQuestions });
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Required Skills */}
          <div className="space-y-4">
            <h3 className="font-medium">Required Skills</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a required skill..."
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
              />
              <button
                onClick={() => {
                  if (newSkill.trim()) {
                    handleSettingsChange({
                      ...settings,
                      requiredSkills: [...settings.requiredSkills, newSkill.trim()]
                    });
                    setNewSkill('');
                  }
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {settings.requiredSkills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => {
                      const newSkills = [...settings.requiredSkills];
                      newSkills.splice(index, 1);
                      handleSettingsChange({ ...settings, requiredSkills: newSkills });
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Minimum Match Score */}
          <div className="space-y-2">
            <h3 className="font-medium">Minimum Match Score</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="100"
                value={settings.minimumMatch}
                onChange={(e) => handleSettingsChange({ ...settings, minimumMatch: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <span className="text-sm font-medium">{settings.minimumMatch}%</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIScreeningSettings;