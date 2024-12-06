import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Bot } from 'lucide-react';
import { useRTENStore } from '@/store/useRTENStore';
import { SkillCard } from './SkillCard';
import { SkillDetails } from './SkillDetails';
import { containerVariants, fadeIn } from '@/lib/animations';

export const SkillsMarketplace = () => {
  const { marketMetrics } = useRTENStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredMetrics = marketMetrics.filter(metric =>
    metric.skill.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8"
    >
      {/* Search */}
      <motion.div
        variants={fadeIn}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-transparent"
          />
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div
        variants={fadeIn}
        className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI Career Insights</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Based on your profile and market trends, these skills align well with your career goals.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {filteredMetrics.map((metric, index) => (
          <SkillCard
            key={index}
            metric={metric}
            onClick={() => setSelectedSkill(metric.skill)}
          />
        ))}
      </motion.div>

      {/* Skill Details Modal */}
      {selectedSkill && (
        <SkillDetails
          skill={marketMetrics.find(m => m.skill === selectedSkill)!}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </motion.div>
  );
};