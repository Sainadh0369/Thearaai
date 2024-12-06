import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  trend,
  className
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center',
        className
      )}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-gray-100">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        {value}
      </div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
      {trend && (
        <div className="mt-2 text-sm text-green-600 dark:text-green-400">
          {trend}
        </div>
      )}
    </div>
  );
};