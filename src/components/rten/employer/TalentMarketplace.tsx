import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Bot, Users, Star, Filter } from 'lucide-react';
import { useRTENStore } from '@/store/useRTENStore';
import { TalentCard } from './TalentCard';
import { TalentDetails } from './TalentDetails';
import { containerVariants, fadeIn } from '@/lib/animations';

export const TalentMarketplace = () => {
  const { marketMetrics } = useRTENStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTalent, setSelectedTalent] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const talents = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      skills: ['React', 'TypeScript', 'Node.js'],
      experience: '8 years',
      location: 'San Francisco, CA',
      availability: 'Available in 2 weeks',
      matchScore: 95,
      verifiedSkills: true,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    },
    {
      id: '2',
      name: 'Michael Kim',
      role: 'Full Stack Developer',
      skills: ['React', 'Python', 'AWS'],
      experience: '5 years',
      location: 'New York, NY',
      availability: 'Immediately available',
      matchScore: 88,
      verifiedSkills: true,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8"
    >
      {/* Search and Filters */}
      <motion.div
        variants={fadeIn}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search talent by skills, role, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent"
          >
            <option value="all">All Skills</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
          </select>
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div
        variants={fadeIn}
        className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Talent Insights</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Based on your job requirements, we've identified top candidates with verified skills and experience.
        </p>
      </motion.div>

      {/* Talent Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {talents.map((talent) => (
          <TalentCard
            key={talent.id}
            talent={talent}
            onClick={() => setSelectedTalent(talent.id)}
          />
        ))}
      </motion.div>

      {/* Talent Details Modal */}
      {selectedTalent && (
        <TalentDetails
          talent={talents.find(t => t.id === selectedTalent)!}
          onClose={() => setSelectedTalent(null)}
        />
      )}
    </motion.div>
  );
};