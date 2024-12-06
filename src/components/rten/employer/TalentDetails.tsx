import React from 'react';
import { X, MapPin, Clock, Shield, Star, Download, Video, MessageCircle } from 'lucide-react';

interface TalentDetailsProps {
  talent: {
    name: string;
    role: string;
    skills: string[];
    experience: string;
    location: string;
    availability: string;
    matchScore: number;
    verifiedSkills: boolean;
    image: string;
  };
  onClose: () => void;
}

export const TalentDetails: React.FC<TalentDetailsProps> = ({ talent, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <img
              src={talent.image}
              alt={talent.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">{talent.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{talent.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Key Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>{talent.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>{talent.availability}</span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {talent.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full"
                >
                  <span>{skill}</span>
                  {talent.verifiedSkills && (
                    <Shield className="w-4 h-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Match Score */}
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Match Score</span>
              <span className="text-green-600">{talent.matchScore}%</span>
            </div>
            <div className="h-2 bg-green-200 dark:bg-green-800 rounded-full">
              <div
                className="h-full bg-green-600 rounded-full"
                style={{ width: `${talent.matchScore}%` }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Video className="w-4 h-4" />
              <span>Schedule Interview</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500">
              <MessageCircle className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};