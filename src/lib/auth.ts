import { generateId } from './utils';

interface User {
  id: string;
  email: string;
  role: 'employer' | 'jobseeker';
  profile: {
    name: string;
    company?: string;
    title?: string;
    skills?: string[];
    experience?: number;
  };
  preferences: {
    notifications: boolean;
    privacy: {
      showProfile: boolean;
      showActivity: boolean;
    };
  };
}

class AuthService {
  private users: Map<string, User> = new Map();
  private sessions: Map<string, string> = new Map(); // sessionId -> userId
  private readonly SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  private validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private validatePassword(password: string): boolean {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /[0-9]/.test(password);
  }

  private generateSession(): string {
    return generateId();
  }

  async register(
    email: string,
    password: string,
    role: 'employer' | 'jobseeker',
    profile: Partial<User['profile']>
  ): Promise<{ user: User; sessionId: string }> {
    if (!this.validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (!this.validatePassword(password)) {
      throw new Error('Password does not meet requirements');
    }

    if (this.users.has(email)) {
      throw new Error('Email already registered');
    }

    const user: User = {
      id: generateId(),
      email,
      role,
      profile: {
        name: profile.name || '',
        ...profile
      },
      preferences: {
        notifications: true,
        privacy: {
          showProfile: true,
          showActivity: true
        }
      }
    };

    this.users.set(email, user);
    const sessionId = this.generateSession();
    this.sessions.set(sessionId, user.id);

    return { user, sessionId };
  }

  async login(
    email: string,
    password: string
  ): Promise<{ user: User; sessionId: string }> {
    const user = this.users.get(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // In a real app, we would verify the password hash here
    const sessionId = this.generateSession();
    this.sessions.set(sessionId, user.id);

    return { user, sessionId };
  }

  async logout(sessionId: string): Promise<void> {
    this.sessions.delete(sessionId);
  }

  async validateSession(sessionId: string): Promise<User | null> {
    const userId = this.sessions.get(sessionId);
    if (!userId) return null;

    const user = Array.from(this.users.values()).find(u => u.id === userId);
    return user || null;
  }

  async updateProfile(userId: string, profile: Partial<User['profile']>): Promise<User> {
    const user = Array.from(this.users.values()).find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.profile = {
      ...user.profile,
      ...profile
    };

    this.users.set(user.email, user);
    return user;
  }

  async updatePrivacy(
    userId: string,
    privacy: Partial<User['preferences']['privacy']>
  ): Promise<User> {
    const user = Array.from(this.users.values()).find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.preferences.privacy = {
      ...user.preferences.privacy,
      ...privacy
    };

    this.users.set(user.email, user);
    return user;
  }
}

export const authService = new AuthService();