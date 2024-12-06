import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users } from 'lucide-react';
import type { SkillMarketMetrics } from '@/lib/types/rten';
import { itemVariants, cardHover } from '@/lib/animations';

interface SkillCardProps {
  metric: SkillMarketMetrics;
  onClick?: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ metric, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={cardHover}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{metric.skill}</h3>
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-green-500 flex items-center space-x-1"
        >
          <TrendingUp className="w-4 h-4" />
          <span>+{metric.growthRate}%</span>
        </motion.span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Users className="w-4 h-4" />
            <span>Demand</span>
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {metric.demand} positions
          </motion.span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <DollarSign className="w-4 h-4" />
            <span>Avg. Salary</span>
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            ${metric.averageSalary.toLocaleString()}
          </motion.span>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Saturation</div>
          <motion.div
            className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-indigo-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(metric.supplyCount / metric.demand) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};