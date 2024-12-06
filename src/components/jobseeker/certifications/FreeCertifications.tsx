import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Award, 
  BrainCircuit, 
  Star,
  BookOpen,
  Clock,
  ArrowRight,
  Filter,
  Sparkles
} from 'lucide-react';

const FreeCertifications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const freeCertifications = [
    {
      id: 1,
      name: 'Google Analytics Certification',
      provider: 'Google',
      platform: 'Google Skillshop',
      duration: '4-6 hours',
      difficulty: 'Intermediate',
      aiMatch: 92,
      skills: ['Analytics', 'Data Analysis', 'Digital Marketing'],
      url: 'https://skillshop.exceedlms.com/student/catalog',
      enrolled: 15000,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Responsive Web Design',
      provider: 'freeCodeCamp',
      platform: 'freeCodeCamp',
      duration: '300 hours',
      difficulty: 'Beginner',
      aiMatch: 95,
      skills: ['HTML', 'CSS', 'Responsive Design'],
      url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
      enrolled: 25000,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Machine Learning Basics',
      provider: 'Microsoft',
      platform: 'Microsoft Learn',
      duration: '8-10 hours',
      difficulty: 'Intermediate',
      aiMatch: 88,
      skills: ['Python', 'ML Fundamentals', 'Data Science'],
      url: 'https://learn.microsoft.com/',
      enrolled: 12000,
      rating: 4.7
    }
  ];

  const categories = [
    'All',
    'Development',
    'Data Science',
    'Cloud',
    'Marketing',
    'Design'
  ];

  const platforms = [
    { name: 'Google Skillshop', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400' },
    { name: 'freeCodeCamp', logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400' },
    { name: 'Microsoft Learn', logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400' },
    { name: 'Coursera', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-6">
          <Globe className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Free Certifications</h1>
            <p className="text-lg opacity-90">AI-curated free certifications from across the internet</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search certifications by skill, provider, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category.toLowerCase())}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedCategory === category.toLowerCase()
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 mb-4">
          <BrainCircuit className="w-5 h-5" />
          <span className="font-medium">AI Recommendations</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Based on your profile and career goals, we've found these certifications that could boost your career growth.
        </p>
      </div>

      {/* Certification Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {freeCertifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.provider}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                  {cert.aiMatch}% Match
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{cert.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{cert.rating} ({cert.enrolled.toLocaleString()} enrolled)</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Start Learning</span>
                </a>
                <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Platform Integration */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Integrated Platforms</h2>
          <div className="flex items-center space-x-2 text-indigo-600">
            <Sparkles className="w-5 h-5" />
            <span>Auto-sync enabled</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 transition-colors"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-12 h-12 rounded-lg object-cover mb-2"
              />
              <p className="font-medium">{platform.name}</p>
              <p className="text-sm text-green-600">Connected</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeCertifications;