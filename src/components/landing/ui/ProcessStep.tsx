import React from 'react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-900 dark:text-gray-100">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};