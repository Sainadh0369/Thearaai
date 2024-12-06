import { create } from 'zustand';
import { skillsMarketplace } from '@/lib/rten/skillsMarketplace';
import type { SkillMarketMetrics } from '@/lib/types/rten';

interface RTENState {
  marketMetrics: SkillMarketMetrics[];
  isLoading: boolean;
  error: string | null;
  fetchMarketInsights: () => Promise<void>;
  clearError: () => void;
}

export const useRTEN = create<RTENState>((set) => ({
  marketMetrics: [],
  isLoading: false,
  error: null,

  fetchMarketInsights: async () => {
    try {
      set({ isLoading: true, error: null });
      const insights = await skillsMarketplace.getMarketInsights();
      set({ marketMetrics: insights, isLoading: false });
    } catch (error) {
      console.error('Error fetching market insights:', error);
      set({ 
        error: 'Failed to load market insights. Please try again.',
        isLoading: false 
      });
    }
  },

  clearError: () => set({ error: null })
}));