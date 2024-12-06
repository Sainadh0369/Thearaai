import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false
}) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-md p-6",
        hover && "hover:shadow-lg transition-shadow",
        className
      )}
    >
      {children}
    </div>
  );
};