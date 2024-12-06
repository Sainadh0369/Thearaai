import React from 'react';
import { Bot, Sparkles, TrendingUp, Target, Star, ArrowRight } from 'lucide-react';
import { analyzeSkills, matchJob } from '@/lib/mockAI';

interface AIInsightsProps {
  data: {
    skills: string[];
    jobTitle?: string;
    jobDescription?: string;
  };
}

export const AIInsights: React.FC<AIInsightsProps> = ({ data }) => {
  const [insights, setInsights] = React.useState<{
    skillScore?: number;
    recommendations?: string[];
    jobMatch?: {
      score: number;
      strengths: string[];
      gaps: string[];
    };
  }>({});

  React.useEffect(() => {
    const loadInsights = async () => {
      try {
        const skillAnalysis = await analyzeSkills(data.skills);
        let jobMatchResult;
        if (data.jobTitle && data.jobDescription) {
          jobMatchResult = await matchJob(data.jobDescription, {
            skills: data.skills,
            title: data.jobTitle
          });
        }

        setInsights({
          skillScore: skillAnalysis.score,
          recommendations: skillAnalysis.recommendations,
          jobMatch: jobMatchResult
        });
      } catch (error) {
        console.error('Error loading insights:', error);
      }
    };

    loadInsights();
  }, [data]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">AI Career Insights</h2>
            <p className="text-lg opacity-90">Personalized analysis and recommendations</p>
          </div>
        </div>
      </div>

      {/* Skill Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <Star className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold">Skill Analysis</h3>
          </div>
          {insights.skillScore && (
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {insights.skillScore}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Match</div>
            </div>
          )}
        </div>

        {insights.recommendations && (
          <div className="space-y-4">
            {insights.recommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">{rec}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Job Match */}
      {insights.jobMatch && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold">Job Match Analysis</h3>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {insights.jobMatch.score}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Match</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span>Strengths</span>
              </h4>
              <div className="space-y-2">
                {insights.jobMatch.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="p-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm"
                  >
                    {strength}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium flex items-center space-x-2">
                <Target className="w-5 h-5 text-yellow-500" />
                <span>Areas for Growth</span>
              </h4>
              <div className="space-y-2">
                {insights.jobMatch.gaps.map((gap, index) => (
                  <div
                    key={index}
                    className="p-3 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg text-sm"
                  >
                    {gap}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <span>View Detailed Report</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};