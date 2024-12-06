import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import { itemVariants, cardHover } from '@/lib/animations';

interface SkillCardProps {
  skill: {
    name: string;
    level: string;
    experience: string;
    endorsements: number;
  };
  onClick?: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={cardHover}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{skill.name}</h3>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>{skill.endorsements}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Level</span>
          <span className="font-medium">{skill.level}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Experience</span>
          <span className="font-medium">{skill.experience}</span>
        </div>
      </div>
    </motion.div>
  );
};