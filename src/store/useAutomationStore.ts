import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AutomationState {
  isRunning: boolean;
  jobSearchSettings: {
    keywords: string[];
    locations: string[];
    platforms: string[];
    autoApply: boolean;
    maxApplications: number;
    blacklistedCompanies: string[];
    salary: {
      min: number;
      max: number;
    };
    experienceLevel: string;
    workType: string[];
  };
  applications: {
    company: string;
    position: string;
    platform: string;
    status: 'applied' | 'processing';
    timestamp: string;
    match: number;
  }[];
  stats: {
    applicationsToday: number;
    successRate: number;
    timeSaved: number;
  };
}

interface AutomationActions {
  startAutomation: () => void;
  stopAutomation: () => void;
  updateSettings: (settings: Partial<AutomationState['jobSearchSettings']>) => void;
  addApplication: (application: AutomationState['applications'][0]) => void;
  updateStats: (stats: Partial<AutomationState['stats']>) => void;
}

export const useAutomationStore = create<AutomationState & AutomationActions>()(
  immer((set) => ({
    isRunning: false,
    jobSearchSettings: {
      keywords: ['frontend developer', 'react developer'],
      locations: ['remote', 'san francisco'],
      platforms: ['indeed', 'linkedin', 'monster', 'company career pages'],
      autoApply: true,
      maxApplications: 50,
      blacklistedCompanies: [],
      salary: {
        min: 100000,
        max: 180000
      },
      experienceLevel: 'senior',
      workType: ['full-time', 'remote']
    },
    applications: [],
    stats: {
      applicationsToday: 0,
      successRate: 0,
      timeSaved: 0
    },

    startAutomation: () => set(state => {
      state.isRunning = true;
    }),

    stopAutomation: () => set(state => {
      state.isRunning = false;
    }),

    updateSettings: (settings) => set(state => {
      state.jobSearchSettings = {
        ...state.jobSearchSettings,
        ...settings
      };
    }),

    addApplication: (application) => set(state => {
      state.applications.unshift(application);
      state.stats.applicationsToday++;
    }),

    updateStats: (stats) => set(state => {
      state.stats = {
        ...state.stats,
        ...stats
      };
    })
  }))
);