import { delay } from './utils';

// Mock AI response generation with realistic delays
export const generateAIResponse = async (prompt: string): Promise<string> => {
  await delay(1000); // Simulate API latency
  
  // Simple keyword-based response system
  if (prompt.toLowerCase().includes('experience')) {
    return "Based on your experience, I recommend focusing on highlighting specific achievements and metrics in your resume. Consider quantifying your impact where possible.";
  }
  
  if (prompt.toLowerCase().includes('interview')) {
    return "To prepare for your interview, I suggest practicing the STAR method (Situation, Task, Action, Result) for behavioral questions. Also, review recent projects where you demonstrated leadership and problem-solving skills.";
  }
  
  if (prompt.toLowerCase().includes('skills')) {
    return "Looking at current market trends, the most in-demand skills for your profile are: React.js, TypeScript, and System Design. Consider strengthening these areas through practical projects.";
  }
  
  return "I understand your query. Could you provide more specific details about what you're looking for?";
};

// Mock skill analysis
export const analyzeSkills = async (skills: string[]): Promise<{
  score: number;
  recommendations: string[];
}> => {
  await delay(800);
  
  const mockScores: Record<string, number> = {
    'react': 0.9,
    'javascript': 0.85,
    'typescript': 0.8,
    'node': 0.75,
    'python': 0.7
  };
  
  const score = skills.reduce((acc, skill) => {
    return acc + (mockScores[skill.toLowerCase()] || 0.5);
  }, 0) / skills.length;
  
  return {
    score: Math.round(score * 100),
    recommendations: [
      'Consider adding more practical projects to your portfolio',
      'Focus on modern framework features and best practices',
      'Explore related technologies in the ecosystem'
    ]
  };
};

// Mock resume analysis
export const analyzeResume = async (resumeText: string): Promise<{
  score: number;
  improvements: string[];
  keywords: string[];
}> => {
  await delay(1200);
  
  return {
    score: 85,
    improvements: [
      'Add more quantifiable achievements',
      'Include specific technologies used in projects',
      'Highlight leadership experiences'
    ],
    keywords: ['React', 'TypeScript', 'Node.js', 'Team Leadership']
  };
};

// Mock job matching
export const matchJob = async (
  jobDescription: string,
  candidateProfile: any
): Promise<{
  score: number;
  strengths: string[];
  gaps: string[];
}> => {
  await delay(1000);
  
  return {
    score: 92,
    strengths: [
      'Strong technical background',
      'Relevant project experience',
      'Cultural fit indicators'
    ],
    gaps: [
      'Consider gaining more experience with specific tools mentioned',
      'Could benefit from more team leadership experience'
    ]
  };
};

// Mock interview question generation
export const generateInterviewQuestions = async (
  role: string,
  level: string
): Promise<{
  technical: string[];
  behavioral: string[];
}> => {
  await delay(900);
  
  return {
    technical: [
      'Explain the virtual DOM and its benefits',
      'Describe your experience with state management',
      'How do you approach performance optimization?'
    ],
    behavioral: [
      'Tell me about a challenging project you worked on',
      'How do you handle disagreements in your team?',
      'Describe your approach to learning new technologies'
    ]
  };
};

// Mock sentiment analysis
export const analyzeSentiment = async (text: string): Promise<{
  sentiment: 'positive' | 'neutral' | 'negative';
  confidence: number;
  keywords: string[];
}> => {
  await delay(600);
  
  const positiveWords = ['great', 'excellent', 'good', 'best', 'amazing'];
  const negativeWords = ['bad', 'poor', 'worst', 'terrible', 'awful'];
  
  const words = text.toLowerCase().split(' ');
  const positiveCount = words.filter(w => positiveWords.includes(w)).length;
  const negativeCount = words.filter(w => negativeWords.includes(w)).length;
  
  let sentiment: 'positive' | 'neutral' | 'negative' = 'neutral';
  if (positiveCount > negativeCount) sentiment = 'positive';
  if (negativeCount > positiveCount) sentiment = 'negative';
  
  return {
    sentiment,
    confidence: 0.85,
    keywords: words.filter(w => [...positiveWords, ...negativeWords].includes(w))
  };
};