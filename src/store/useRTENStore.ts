import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { SkillMarketMetrics } from '@/lib/types/rten';

interface RTENState {
  marketMetrics: SkillMarketMetrics[];
  activeTab: string;
  isLoading: boolean;
  error: string | null;
  selectedSkill: string | null;
  selectedTalent: string | null;
}

interface RTENActions {
  setActiveTab: (tab: string) => void;
  setSelectedSkill: (skill: string | null) => void;
  setSelectedTalent: (talentId: string | null) => void;
  fetchMarketInsights: () => Promise<void>;
  clearError: () => void;
}

// Mock data for development
const MOCK_MARKET_INSIGHTS: SkillMarketMetrics[] = [
  {
    skill: 'React',
    demand: 1500,
    supplyCount: 1200,
    averageSalary: 120000,
    growthRate: 25,
    regionDistribution: [
      { region: 'North America', count: 500 },
      { region: 'Europe', count: 400 },
      { region: 'Asia', count: 300 }
    ]
  },
  {
    skill: 'TypeScript',
    demand: 1200,
    supplyCount: 800,
    averageSalary: 125000,
    growthRate: 35,
    regionDistribution: [
      { region: 'North America', count: 400 },
      { region: 'Europe', count: 250 },
      { region: 'Asia', count: 150 }
    ]
  },
  {
    skill: 'Node.js',
    demand: 1000,
    supplyCount: 900,
    averageSalary: 115000,
    growthRate: 20,
    regionDistribution: [
      { region: 'North America', count: 350 },
      { region: 'Europe', count: 300 },
      { region: 'Asia', count: 250 }
    ]
  }
];

export const useRTENStore = create<RTENState & RTENActions>()(
  immer((set) => ({
    marketMetrics: MOCK_MARKET_INSIGHTS,
    activeTab: 'marketplace',
    isLoading: false,
    error: null,
    selectedSkill: null,
    selectedTalent: null,

    setActiveTab: (tab) => set((state) => {
      state.activeTab = tab;
    }),

    setSelectedSkill: (skill) => set((state) => {
      state.selectedSkill = skill;
    }),

    setSelectedTalent: (talentId) => set((state) => {
      state.selectedTalent = talentId;
    }),

    fetchMarketInsights: async () => {
      try {
        set((state) => {
          state.isLoading = true;
          state.error = null;
        });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        set((state) => {
          state.marketMetrics = MOCK_MARKET_INSIGHTS;
          state.isLoading = false;
        });
      } catch (error) {
        console.error('Error fetching market insights:', error);
        set((state) => {
          state.error = 'Failed to load market insights. Please try again.';
          state.isLoading = false;
        });
      }
    },

    clearError: () => set((state) => {
      state.error = null;
    })
  }))
);