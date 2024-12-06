import React from 'react';
import { cn } from '@/lib/utils';

interface IconBoxProps {
  icon: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
}

export const IconBox: React.FC<IconBoxProps> = ({
  icon,
  className,
  size = 'md',
  variant = 'primary'
}) => {
  const sizes = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4'
  };

  const variants = {
    primary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100',
    secondary: 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100',
    outline: 'border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100'
  };

  return (
    <div
      className={cn(
        "rounded-lg",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {icon}
    </div>
  );
};