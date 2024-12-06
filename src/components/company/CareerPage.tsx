import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, Award, Sparkles } from 'lucide-react';
import { Benefits } from '../common/Benefits';
import { JobListings } from '../common/JobListings';

export const CareerPage = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold leading-tight">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300">
            Build the future of AI-powered talent acquisition with a team of innovators
          </p>
          <Link
            to="#positions"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're building the most advanced AI-powered recruitment platform to connect talent with opportunity, making hiring smarter and more equitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-12 h-12 text-gray-900 dark:text-white" />,
              title: "Innovation",
              description: "Push the boundaries of AI in recruitment"
            },
            {
              icon: <Users className="w-12 h-12 text-gray-900 dark:text-white" />,
              title: "Impact",
              description: "Transform how companies build their teams"
            },
            {
              icon: <Award className="w-12 h-12 text-gray-900 dark:text-white" />,
              title: "Excellence",
              description: "Deliver outstanding results through collaboration"
            }
          ].map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Benefits />
      <JobListings />

      {/* Culture Section */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 flex items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Culture</h2>
              <p className="text-gray-600 dark:text-gray-400">
                At The Ara AI, we foster a culture of innovation, collaboration, and continuous learning. Our diverse team brings together unique perspectives to solve complex challenges in recruitment technology.
              </p>
              <ul className="space-y-4">
                {[
                  'Inclusive and diverse environment',
                  'Focus on learning and growth',
                  'Data-driven decision making',
                  'Work-life balance',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-gray-900 dark:text-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};