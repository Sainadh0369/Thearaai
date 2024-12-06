import { create } from 'zustand';
import {
  matchJobWithCandidate,
  generateInterviewQuestions,
  analyzeResume,
  generateCommunicationTemplate,
  assessTechnicalSkills,
  getCareerRecommendations,
  optimizeJobSearch
} from '@/lib/openai';

interface AIStore {
  isLoading: boolean;
  error: string | null;
  matchJob: (jobDescription: string, candidateProfile: any) => Promise<string>;
  generateQuestions: (jobRole: string, experience: string) => Promise<string>;
  analyzeResume: (resumeText: string, jobDescription: string) => Promise<string>;
  generateTemplate: (type: string, context: any) => Promise<string>;
  assessSkills: (response: string, skillArea: string) => Promise<string>;
  getCareerAdvice: (profile: any) => Promise<string>;
  optimizeSearch: (preferences: any, marketData: any) => Promise<string>;
}

export const useAI = create<AIStore>((set) => ({
  isLoading: false,
  error: null,

  matchJob: async (jobDescription, candidateProfile) => {
    set({ isLoading: true, error: null });
    try {
      const result = await matchJobWithCandidate(jobDescription, candidateProfile);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
      throw error;
    }
  },

  generateQuestions: async (jobRole, experience) => {
    set({ isLoading: true, error: null });
    try {
      const result = await generateInterviewQuestions(jobRole, experience);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
      throw error;
    }
  },

  analyzeResume: async (resumeText, jobDescription) => {
    set({ isLoading: true, error: null });
    try {
      const result = await analyzeResume(resumeText, jobDescription);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
      throw error;
    }
  },

  generateTemplate: async (type, context) => {
    set({ isLoading: true, error: null });
    try {
      const result = await generateCommunicationTemplate(type, context);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
      throw error;
    }
  },

  assessSkills: async (response, skillArea) => {
    set({ isLoading: true, error: null });
    try {
      const result = await assessTechnicalSkills(response, skillArea);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
      throw error;
    }
  },

  getCareerAdvice: async (profile) => {
    set({ isLoading: true, error: null });
    try {
      const result = await getCareerRecommendations(profile);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
      throw error;
    }
  },

  optimizeSearch: async (preferences, marketData) => {
    set({ isLoading: true, error: null });
    try {
      const result = await optimizeJobSearch(preferences, marketData);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
      throw error;
    }
  }
}));