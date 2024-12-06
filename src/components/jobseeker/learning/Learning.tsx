import React, { useState } from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  Award, 
  Star,
  Clock,
  Users,
  Play,
  ArrowRight,
  BrainCircuit,
  Target,
  CheckCircle,
  Sparkles,
  GraduationCap
} from 'lucide-react';

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      provider: 'Frontend Masters',
      duration: '8 hours',
      level: 'Advanced',
      enrolled: 1250,
      rating: 4.8,
      progress: 35,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      relevance: 95,
      skills: ['React', 'TypeScript', 'Design Patterns'],
      color: 'bg-gray-50 dark:bg-gray-800/50',
      iconColor: 'text-gray-700 dark:text-gray-300'
    },
    {
      id: 2,
      title: 'System Design for Frontend',
      provider: 'Educative',
      duration: '10 hours',
      level: 'Intermediate',
      enrolled: 850,
      rating: 4.7,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      relevance: 88,
      skills: ['Architecture', 'Scalability', 'Performance'],
      color: 'bg-gray-50 dark:bg-gray-800/50',
      iconColor: 'text-gray-700 dark:text-gray-300'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <GraduationCap className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Learning & Development</h1>
            <p className="text-lg opacity-90">AI-powered learning recommendations</p>
          </div>
        </div>
      </div>

      {/* AI Learning Path */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <BrainCircuit className="w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold">Your AI Learning Path</h2>
            <p className="text-sm opacity-90">Personalized learning journey based on your career goals</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4">
            <Target className="w-6 h-6 mb-2" />
            <h3 className="font-medium">Next Goal</h3>
            <p className="text-sm opacity-90">Frontend Architect</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <Award className="w-6 h-6 mb-2" />
            <h3 className="font-medium">Skills to Acquire</h3>
            <p className="text-sm opacity-90">System Design, Architecture</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <TrendingUp className="w-6 h-6 mb-2" />
            <h3 className="font-medium">Progress</h3>
            <p className="text-sm opacity-90">75% towards goal</p>
          </div>
        </div>
      </div>

      {/* Course Recommendations */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recommended Courses</h2>
          <div className="flex space-x-2">
            {['all', 'technical', 'soft skills', 'leadership'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`${course.color} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {course.provider}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">
                    {course.relevance}% Match
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{course.enrolled} enrolled</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-gray-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-gray-900 dark:bg-gray-100 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                    <Play className="w-4 h-4" />
                    <span>{course.progress > 0 ? 'Continue' : 'Start'} Course</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Learning Time</h3>
            <Clock className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-3xl font-bold mt-2">24h</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">This month</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Courses Completed</h3>
            <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-3xl font-bold mt-2">5</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">All time</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Skills Gained</h3>
            <Award className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-3xl font-bold mt-2">12</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Verified skills</p>
        </div>
      </div>
    </div>
  );
};

export default Learning;