import React from 'react';
import { Building, Users, BookOpen, Shield, Bell } from 'lucide-react';

const EducationalPartnerships = () => {
  const partnerships = [
    {
      name: 'Stanford University',
      students: 1200,
      placements: 85,
      programs: ['Computer Science', 'AI/ML', 'Data Science'],
      status: 'active'
    },
    {
      name: 'MIT',
      students: 950,
      placements: 78,
      programs: ['Software Engineering', 'Robotics', 'AI'],
      status: 'active'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Educational Partnerships</h1>
        </div>
        <p className="text-lg opacity-90">
          Manage university collaborations and talent pipelines
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Partner Institutions', value: '15', icon: <Building /> },
          { label: 'Student Reach', value: '5,000+', icon: <Users /> },
          { label: 'Placement Rate', value: '85%', icon: <TrendingUp /> }
        ].map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Partnerships */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Active Partnerships</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Add Partner
          </button>
        </div>

        <div className="space-y-4">
          {partnerships.map((partner, index) => (
            <div key={index} className="border dark:border-gray-700 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{partner.name}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {partner.students} Students
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {partner.placements} Placements
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 rounded-full text-sm">
                  Active
                </span>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Programs</h4>
                <div className="flex flex-wrap gap-2">
                  {partner.programs.map((program, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 rounded-full text-sm"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  View Details
                </button>
                <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500">
                  Manage Programs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Status */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-semibold">Compliance Status</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'GDPR Compliance', status: 'Compliant', lastAudit: '2024-02-15' },
            { label: 'Data Protection', status: 'Compliant', lastAudit: '2024-02-15' },
            { label: 'Privacy Policy', status: 'Up to date', lastAudit: '2024-02-10' },
            { label: 'Student Data Handling', status: 'Compliant', lastAudit: '2024-02-12' }
          ].map((item, index) => (
            <div key={index} className="p-4 border dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{item.label}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Last audit: {item.lastAudit}
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 rounded-full text-sm">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalPartnerships;