import React from 'react';
import { 
  BarChart as BarChartIcon, TrendingUp, Users, Clock, 
  Calendar, CheckCircle, XCircle, Target, Globe,
  UserCheck, Building, BrainCircuit
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area,
  PieChart, Pie, Cell, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const Analytics = () => {
  // Diversity Metrics
  const diversityData = {
    gender: [
      { name: 'Female', value: 42 },
      { name: 'Male', value: 55 },
      { name: 'Non-Binary', value: 3 }
    ],
    ethnicity: [
      { name: 'Asian', value: 30 },
      { name: 'Black', value: 15 },
      { name: 'Hispanic', value: 20 },
      { name: 'White', value: 25 },
      { name: 'Other', value: 10 }
    ],
    improvement: '+15% diversity increase YoY'
  };

  // Job Posting Performance
  const jobPostingData = [
    { position: 'Frontend Dev', applications: 150, interviews: 12, offers: 3 },
    { position: 'UX Designer', applications: 120, interviews: 8, offers: 2 },
    { position: 'Product Manager', applications: 90, interviews: 6, offers: 1 }
  ];

  // Cultural Fit Assessment
  const culturalFitData = [
    { trait: 'Innovation', score: 85 },
    { trait: 'Collaboration', score: 92 },
    { trait: 'Growth Mindset', score: 88 },
    { trait: 'Adaptability', score: 90 },
    { trait: 'Leadership', score: 82 }
  ];

  const COLORS = ['#4f46e5', '#06b6d4', '#8b5cf6', '#f43f5e', '#10b981'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Advanced Analytics</h1>
        <p className="text-lg opacity-90">
          Comprehensive insights into your recruitment process and candidate pipeline
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            icon: <Users className="w-6 h-6" />,
            label: 'Diversity Score',
            value: '85%',
            trend: '+12%',
            color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600'
          },
          { 
            icon: <Target className="w-6 h-6" />,
            label: 'Candidate Fit',
            value: '92%',
            trend: '+5%',
            color: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600'
          },
          { 
            icon: <Building className="w-6 h-6" />,
            label: 'Cultural Match',
            value: '88%',
            trend: '+8%',
            color: 'bg-purple-100 dark:bg-purple-900 text-purple-600'
          },
          { 
            icon: <UserCheck className="w-6 h-6" />,
            label: 'Retention Rate',
            value: '95%',
            trend: '+3%',
            color: 'bg-rose-100 dark:bg-rose-900 text-rose-600'
          }
        ].map((metric, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${metric.color}`}>
                {metric.icon}
              </div>
              <span className="text-green-500 text-sm font-medium">
                {metric.trend}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-4">{metric.value}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Diversity & Inclusion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Diversity Metrics</h2>
            <span className="text-green-500 text-sm font-medium">
              {diversityData.improvement}
            </span>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={diversityData.gender}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {diversityData.gender.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Cultural Fit Assessment</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={culturalFitData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="trait" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#4f46e5"
                  fill="#4f46e5"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Job Posting Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Job Posting Performance</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={jobPostingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="position" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#4f46e5" name="Applications" />
              <Bar dataKey="interviews" fill="#8b5cf6" name="Interviews" />
              <Bar dataKey="offers" fill="#06b6d4" name="Offers" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Candidate Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Candidate Pipeline Health</h2>
          <div className="space-y-4">
            {[
              { stage: 'Application Review', count: 245, change: '+12%' },
              { stage: 'Technical Assessment', count: 120, change: '+8%' },
              { stage: 'Interview Stage', count: 45, change: '+15%' },
              { stage: 'Offer Stage', count: 12, change: '+5%' }
            ].map((stage, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium">{stage.stage}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stage.count} candidates
                  </p>
                </div>
                <span className="text-green-500 text-sm font-medium">
                  {stage.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">AI Insights</h2>
          <div className="space-y-6">
            {[
              {
                icon: <BrainCircuit className="w-6 h-6" />,
                title: 'Candidate Quality Prediction',
                description: '85% of current candidates show high potential for long-term retention',
                trend: '+5% from last month'
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Geographic Distribution',
                description: 'Most qualified candidates are from tech hubs: SF, NYC, and Remote',
                trend: 'Remote candidates ↑ 25%'
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Skill Trends',
                description: 'Rising demand for AI/ML and Cloud expertise',
                trend: 'AI skills ↑ 40% YoY'
              }
            ].map((insight, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600 dark:text-indigo-400">
                  {insight.icon}
                </div>
                <div>
                  <h3 className="font-medium">{insight.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {insight.description}
                  </p>
                  <p className="text-sm text-green-500 mt-1">{insight.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;