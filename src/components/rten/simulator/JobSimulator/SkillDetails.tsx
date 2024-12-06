import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Clock, CheckCircle, Bot } from 'lucide-react';
import { modalVariants, overlayVariants } from '@/lib/animations';

interface SkillDetailsProps {
  skill: {
    name: string;
    level: string;
    experience: string;
    endorsements: number;
    projects: string[];
    certifications: string[];
  };
  onClose: () => void;
}

export const SkillDetails: React.FC<SkillDetailsProps> = ({ skill, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          variants={modalVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-2xl"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-2xl font-semibold">{skill.name}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{skill.endorsements} endorsements</span>
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
            {/* Skill Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Level
                </div>
                <div className="font-medium">{skill.level}</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Experience
                </div>
                <div className="font-medium">{skill.experience}</div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="font-medium mb-4">Related Projects</h3>
              <div className="space-y-2">
                {skill.projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{project}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-medium mb-4">Certifications</h3>
              <div className="space-y-2">
                {skill.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">AI Insights</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                This skill is highly relevant in the current market. Consider obtaining
                additional certifications to strengthen your expertise.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};