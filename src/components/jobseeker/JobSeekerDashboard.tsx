import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Briefcase, Trophy, Target, Bot, BookOpen, Users } from 'lucide-react';

const JobSeekerDashboard = () => {
  const stats = [
    { icon: <Sparkles className="w-8 h-8" />, label: 'Profile Match Score', value: '85%' },
    { icon: <Briefcase className="w-8 h-8" />, label: 'Job Matches', value: '24' },
    { icon: <Trophy className="w-8 h-8" />, label: 'Skills Verified', value: '12' },
    { icon: <Target className="w-8 h-8" />, label: 'Interview Ready', value: '92%' }
  ];

  const recommendedJobs = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      salary: '$120k - $150k',
      match: '95%'
    },
    {
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      salary: '$90k - $120k',
      match: '88%'
    }
  ];

  const learningPaths = [
    {
      title: 'Advanced React Patterns',
      provider: 'Frontend Masters',
      progress: 65,
      remaining: '2 hours'
    },
    {
      title: 'System Design',
      provider: 'Educative',
      progress: 40,
      remaining: '4 hours'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-gray-100">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Assistant Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <Bot className="w-6 h-6 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">AI Career Assistant</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your personalized career guidance
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Career Insights</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Based on your profile, consider focusing on system design skills to increase your
              senior role opportunities.
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Skill Recommendations</h3>
            <div className="flex flex-wrap gap-2">
              {['System Design', 'React Native', 'GraphQL'].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/jobseeker/jobs"
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <Briefcase className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <h3 className="font-semibold">Find Jobs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Browse AI-matched opportunities
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/jobseeker/learning"
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <BookOpen className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <h3 className="font-semibold">Continue Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enhance your skills
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/jobseeker/network"
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <Users className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <h3 className="font-semibold">Grow Network</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Connect with professionals
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recommended Jobs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Recommended Jobs</h2>
        <div className="space-y-4">
          {recommendedJobs.map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
            >
              <div>
                <h3 className="font-medium">{job.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {job.company} • {job.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{job.salary}</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                  {job.match} Match
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Learning Progress</h2>
        <div className="space-y-6">
          {learningPaths.map((course, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{course.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {course.provider} • {course.remaining} remaining
                  </p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-gray-900 dark:bg-gray-100 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;