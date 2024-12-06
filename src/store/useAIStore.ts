import { create } from 'zustand';
import { aiCore } from '@/lib/aiCore';
import { generateId } from '@/lib/utils';
import type { Message } from '@/lib/types';

interface AIState {
  messages: Message[];
  isProcessing: boolean;
  error: string | null;
}

interface AIActions {
  sendMessage: (content: string) => Promise<void>;
  analyzeSkills: (skills: string[]) => Promise<void>;
  matchJob: (description: string, profile: any) => Promise<void>;
  clearMessages: () => void;
}

export const useAIStore = create<AIState & AIActions>((set) => ({
  messages: [],
  isProcessing: false,
  error: null,

  sendMessage: async (content: string) => {
    try {
      set({ isProcessing: true, error: null });

      const userMessage: Message = {
        id: generateId(),
        content,
        sender: 'user',
        timestamp: new Date()
      };

      set(state => ({
        messages: [...state.messages, userMessage]
      }));

      const response = await aiCore.processMessage(content);

      const aiMessage: Message = {
        id: generateId(),
        content: response,
        sender: 'ai',
        timestamp: new Date()
      };

      set(state => ({
        messages: [...state.messages, aiMessage]
      }));
    } catch (error) {
      set({ error: 'Failed to process message' });
    } finally {
      set({ isProcessing: false });
    }
  },

  analyzeSkills: async (skills: string[]) => {
    try {
      set({ isProcessing: true, error: null });
      await aiCore.analyzeSkills(skills);
    } catch (error) {
      set({ error: 'Failed to analyze skills' });
    } finally {
      set({ isProcessing: false });
    }
  },

  matchJob: async (description: string, profile: any) => {
    try {
      set({ isProcessing: true, error: null });
      await aiCore.matchJob(description, profile);
    } catch (error) {
      set({ error: 'Failed to match job' });
    } finally {
      set({ isProcessing: false });
    }
  },

  clearMessages: () => set({ messages: [] })
}));