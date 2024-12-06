import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  className,
  align = 'center'
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-16',
        align === 'center' ? 'text-center mx-auto' : 'text-left',
        className
      )}
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
};