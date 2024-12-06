import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={author}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-gray-600 dark:text-gray-400">{role}</div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 italic">"{quote}"</p>
    </div>
  );
};