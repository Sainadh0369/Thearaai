export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface AIResponse {
  text: string;
  confidence: number;
  suggestions?: string[];
}

export interface SkillAnalysis {
  score: number;
  recommendations: string[];
}

export interface JobMatch {
  score: number;
  strengths: string[];
  gaps: string[];
}

export interface InterviewQuestion {
  id: string;
  question: string;
  type: 'technical' | 'behavioral';
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface AIInsight {
  type: 'skill' | 'job' | 'interview';
  content: string;
  score?: number;
  recommendations?: string[];
}