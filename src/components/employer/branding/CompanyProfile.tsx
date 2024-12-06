import React, { useState } from 'react';
import { Building, MapPin, Globe, Users, Camera, Plus, Calendar, Edit } from 'lucide-react';

const CompanyProfile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ARA AI Technologies',
    tagline: 'Transforming Recruitment Through AI Innovation',
    description: 'Leading provider of AI-powered recruitment solutions, helping companies build diverse and talented teams.',
    location: 'San Francisco, CA',
    website: 'www.araai.com',
    size: '50-100 employees',
    industry: 'Technology',
    founded: '2020',
    specialties: ['AI/ML', 'Recruitment Technology', 'HR Solutions'],
    culture: {
      mission: 'To revolutionize recruitment through ethical AI',
      values: ['Innovation', 'Diversity', 'Excellence'],
      benefits: ['Remote Work', 'Health Insurance', 'Learning Budget']
    }
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative h-48 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden">
        <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
          <Camera className="w-5 h-5 text-white" />
        </button>
        <div className="absolute -bottom-12 left-8">
          <div className="relative w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center">
            <Building className="w-12 h-12 text-indigo-600" />
            <button className="absolute -bottom-2 -right-2 p-1.5 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
              <Plus className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
              {profile.tagline}
            </p>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Edit className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {profile.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Globe className="w-5 h-5" />
                  <span>{profile.website}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Users className="w-5 h-5" />
                  <span>{profile.size}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span>Founded {profile.founded}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Culture & Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {profile.culture.mission}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Core Values</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.culture.values.map((value, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Benefits</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.culture.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Specialties</h2>
              <div className="space-y-2">
                {profile.specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    {specialty}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Employee Growth
                  </div>
                  <div className="text-2xl font-bold">+45%</div>
                  <div className="text-sm text-green-600">YoY</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Diversity Score
                  </div>
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-green-600">Above Industry Avg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;