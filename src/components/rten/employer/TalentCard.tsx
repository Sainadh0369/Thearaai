import React from 'react';
import { Star, MapPin, Clock, Shield } from 'lucide-react';

interface TalentCardProps {
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
  onClick?: () => void;
}

export const TalentCard: React.FC<TalentCardProps> = ({ talent, onClick }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all"
      onClick={onClick}
    >
      <div className="flex space-x-4">
        <img
          src={talent.image}
          alt={talent.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{talent.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{talent.role}</p>
            </div>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
              {talent.matchScore}% Match
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{talent.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{talent.availability}</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {talent.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {talent.verifiedSkills && (
            <div className="mt-4 flex items-center space-x-2 text-green-600">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Verified Skills</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};