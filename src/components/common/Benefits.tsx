import React from 'react';
import { Globe, Heart, Coffee, Zap } from 'lucide-react';

export const benefits = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Remote-First',
    description: 'Work from anywhere in the world',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs',
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Work-Life Balance',
    description: 'Flexible hours and unlimited PTO',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Growth',
    description: 'Learning budget and career development opportunities',
  },
];

export const Benefits = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900/50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Why Join The Ara AI?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We offer competitive benefits and a culture that puts people first
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg w-fit text-gray-900 dark:text-gray-100 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};