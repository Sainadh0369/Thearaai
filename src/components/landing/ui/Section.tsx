import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  description
}) => {
  return (
    <section className={cn("py-20", className)}>
      {(title || description) && (
        <div className="text-center max-w-3xl mx-auto mb-16">
          {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
          {description && (
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};