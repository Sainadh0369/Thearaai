import React from 'react';
import { UserCircle, Star, MessageCircle, Calendar } from 'lucide-react';

const Mentorship = () => {
  const mentors = [
    {
      name: 'Sarah Chen',
      role: 'Senior Frontend Engineer',
      company: 'TechCorp',
      expertise: ['React', 'System Design', 'Career Growth'],
      rating: 4.9,
      reviews: 24,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Engineering Manager',
      company: 'InnovateTech',
      expertise: ['Leadership', 'Frontend Architecture', 'Team Building'],
      rating: 4.8,
      reviews: 18,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Find Your Mentor</h1>
        <p className="text-lg opacity-90">
          Connect with experienced professionals who can guide your career journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex space-x-4">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{mentor.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{mentor.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{mentor.company}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{mentor.rating}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    ({mentor.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Calendar className="w-4 h-4" />
                <span>Schedule Call</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Message</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mentorship Programs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Mentorship Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: '1-on-1 Career Coaching',
              duration: '3 months',
              sessions: '12 sessions',
              focus: 'Career Development',
            },
            {
              title: 'Technical Mentorship',
              duration: '6 months',
              sessions: '24 sessions',
              focus: 'Skill Enhancement',
            },
          ].map((program, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">{program.title}</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Duration: {program.duration}</p>
                <p>Sessions: {program.sessions}</p>
                <p>Focus: {program.focus}</p>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;