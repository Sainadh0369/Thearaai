import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'jobseeker' | 'employer';
  profileComplete: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, role: 'jobseeker' | 'employer', profile: any) => Promise<void>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
  clearError: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        try {
          set({ isLoading: true, error: null });
          // Mock API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Determine role based on email for demo purposes
          const role = email.includes('employer') ? 'employer' : 'jobseeker';
          
          const user: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name: email.split('@')[0],
            role,
            profileComplete: true
          };

          set({
            user,
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

      register: async (email, password, role, profile) => {
        try {
          set({ isLoading: true, error: null });
          // Mock API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const user: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name: profile.name || email.split('@')[0],
            role,
            profileComplete: false
          };

          set({
            user,
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

      logout: () => {
        set({
          user: null,
          isAuthenticated: false
        });
      },

      updateUser: (data) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null
        }));
      },

      clearError: () => set({ error: null })
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);