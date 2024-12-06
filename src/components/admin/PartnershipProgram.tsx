import React from 'react';
import { Building, Users, Briefcase, ArrowRight, Globe } from 'lucide-react';

const PartnershipProgram = () => {
  const partners = [
    {
      name: 'Stanford University',
      type: 'Educational',
      students: 1200,
      placements: 85,
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400'
    },
    {
      name: 'TechRecruit Inc',
      type: 'Agency',
      placements: 150,
      clients: 45,
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Globe className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Partnership Program</h1>
        </div>
        <p className="text-lg opacity-90">
          Build strategic relationships to expand your reach
        </p>
      </div>

      {/* Partnership Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Building className="w-6 h-6" />,
            title: 'Educational Partners',
            description: 'Connect with universities and educational institutions'
          },
          {
            icon: <Briefcase className="w-6 h-6" />,
            title: 'Recruitment Agencies',
            description: 'Partner with leading recruitment firms'
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: 'Technology Partners',
            description: 'Integrate with complementary platforms'
          }
        ].map((type, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg w-fit text-indigo-600 dark:text-indigo-400 mb-4">
              {type.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {type.description}
            </p>
            <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Active Partners */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Active Partners</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Add Partner
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="border dark:border-gray-700 rounded-lg p-6"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{partner.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {partner.type} Partner
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {partner.type === 'Educational' ? (
                  <>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Students
                      </div>
                      <div className="font-medium">{partner.students}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Placements
                      </div>
                      <div className="font-medium">{partner.placements}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Placements
                      </div>
                      <div className="font-medium">{partner.placements}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Clients
                      </div>
                      <div className="font-medium">{partner.clients}</div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  View Details
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipProgram;