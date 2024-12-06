import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService } from '@/lib/auth';

interface AuthState {
  user: any | null;
  sessionId: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  register: (email: string, password: string, role: 'employer' | 'jobseeker', profile: any) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (profile: any) => Promise<void>;
  updatePrivacy: (privacy: any) => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      user: null,
      sessionId: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      register: async (email, password, role, profile) => {
        try {
          set({ isLoading: true, error: null });
          const { user, sessionId } = await authService.register(email, password, role, profile);
          set({
            user,
            sessionId,
            isAuthenticated: true,
            isLoading: false
          });
        } catch (error) {
          set({
            error: (error as Error).message,
            isLoading: false
          });
          throw error;
        }
      },

      login: async (email, password) => {
        try {
          set({ isLoading: true, error: null });
          const { user, sessionId } = await authService.login(email, password);
          set({
            user,
            sessionId,
            isAuthenticated: true,
            isLoading: false
          });
        } catch (error) {
          set({
            error: (error as Error).message,
            isLoading: false
          });
          throw error;
        }
      },

      logout: async () => {
        try {
          const { sessionId } = get();
          if (sessionId) {
            await authService.logout(sessionId);
          }
          set({
            user: null,
            sessionId: null,
            isAuthenticated: false
          });
        } catch (error) {
          set({ error: (error as Error).message });
          throw error;
        }
      },

      updateProfile: async (profile) => {
        try {
          set({ isLoading: true, error: null });
          const { user } = get();
          if (!user) throw new Error('Not authenticated');
          
          const updatedUser = await authService.updateProfile(user.id, profile);
          set({
            user: updatedUser,
            isLoading: false
          });
        } catch (error) {
          set({
            error: (error as Error).message,
            isLoading: false
          });
          throw error;
        }
      },

      updatePrivacy: async (privacy) => {
        try {
          set({ isLoading: true, error: null });
          const { user } = get();
          if (!user) throw new Error('Not authenticated');
          
          const updatedUser = await authService.updatePrivacy(user.id, privacy);
          set({
            user: updatedUser,
            isLoading: false
          });
        } catch (error) {
          set({
            error: (error as Error).message,
            isLoading: false
          });
          throw error;
        }
      },

      clearError: () => set({ error: null })
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        sessionId: state.sessionId,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);