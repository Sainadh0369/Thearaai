import { delay } from '../utils';
import { behavioralEngine } from './behavioralEngine';
import { learningEngine } from './learningEngine';

interface UserProfile {
  id: string;
  preferences: {
    jobTypes: string[];
    locations: string[];
    salary: {
      min: number;
      max: number;
    };
    remote: boolean;
    industries: string[];
  };
  behavior: {
    applicationTimes: number[];
    successfulPlatforms: string[];
    effectiveKeywords: string[];
    responseRates: Record<string, number>;
  };
  learningStyle: {
    adaptationRate: number;
    riskTolerance: number;
    preferredApproach: string;
  };
}

class UserProfiler {
  private profiles: Map<string, UserProfile> = new Map();
  private readonly ADAPTATION_THRESHOLD = 0.7;

  public async updateProfile(userId: string, action: any): Promise<void> {
    try {
      let profile = this.profiles.get(userId);
      if (!profile) {
        profile = await this.initializeProfile(userId);
        this.profiles.set(userId, profile);
      }

      await this.processAction(profile, action);
      await this.adaptProfile(profile);
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }

  private async initializeProfile(userId: string): Promise<UserProfile> {
    return {
      id: userId,
      preferences: {
        jobTypes: [],
        locations: [],
        salary: { min: 0, max: 0 },
        remote: false,
        industries: []
      },
      behavior: {
        applicationTimes: [],
        successfulPlatforms: [],
        effectiveKeywords: [],
        responseRates: {}
      },
      learningStyle: {
        adaptationRate: 0.5,
        riskTolerance: 0.5,
        preferredApproach: 'balanced'
      }
    };
  }

  private async processAction(profile: UserProfile, action: any): Promise<void> {
    switch (action.type) {
      case 'application':
        await this.processApplicationAction(profile, action);
        break;
      case 'response':
        await this.processResponseAction(profile, action);
        break;
      case 'preference':
        await this.processPreferenceAction(profile, action);
        break;
    }

    // Update behavioral patterns
    await behavioralEngine.analyzeBehavior(profile.id, action);
  }

  private async processApplicationAction(profile: UserProfile, action: any): Promise<void> {
    profile.behavior.applicationTimes.push(Date.now());

    if (action.platform) {
      if (action.success) {
        profile.behavior.successfulPlatforms.push(action.platform);
      }

      // Update response rates
      const currentRate = profile.behavior.responseRates[action.platform] || 0;
      const newRate = (currentRate + (action.success ? 1 : 0)) / 2;
      profile.behavior.responseRates[action.platform] = newRate;
    }

    if (action.keywords) {
      profile.behavior.effectiveKeywords = [
        ...new Set([...profile.behavior.effectiveKeywords, ...action.keywords])
      ];
    }
  }

  private async processResponseAction(profile: UserProfile, action: any): Promise<void> {
    // Update learning style based on response outcomes
    if (action.success) {
      profile.learningStyle.adaptationRate = Math.min(
        1,
        profile.learningStyle.adaptationRate + 0.1
      );
    } else {
      profile.learningStyle.adaptationRate = Math.max(
        0,
        profile.learningStyle.adaptationRate - 0.05
      );
    }
  }

  private async processPreferenceAction(profile: UserProfile, action: any): Promise<void> {
    if (action.preferences) {
      profile.preferences = {
        ...profile.preferences,
        ...action.preferences
      };
    }
  }

  private async adaptProfile(profile: UserProfile): Promise<void> {
    const insights = await behavioralEngine.getInsights(profile.id);
    
    if (insights.some(i => i.confidence > this.ADAPTATION_THRESHOLD)) {
      // Adapt preferences based on successful patterns
      await this.adaptPreferences(profile, insights);
      
      // Update learning approach
      await this.updateLearningStyle(profile, insights);
      
      // Learn from adaptations
      await learningEngine.learn(
        { type: 'profile_adaptation', insights },
        { profile },
        true
      );
    }
  }

  private async adaptPreferences(
    profile: UserProfile,
    insights: any[]
  ): Promise<void> {
    insights.forEach(insight => {
      switch (insight.type) {
        case 'timing':
          // Adapt application timing preferences
          break;
        case 'platform':
          // Adjust platform preferences
          break;
        case 'keywords':
          // Update keyword strategy
          break;
      }
    });
  }

  private async updateLearningStyle(
    profile: UserProfile,
    insights: any[]
  ): Promise<void> {
    const successRate = insights.filter(i => i.confidence > 0.8).length / insights.length;

    if (successRate > 0.7) {
      // Increase adaptation rate for successful strategies
      profile.learningStyle.adaptationRate = Math.min(
        1,
        profile.learningStyle.adaptationRate + 0.1
      );
    } else {
      // Become more conservative with adaptations
      profile.learningStyle.adaptationRate = Math.max(
        0,
        profile.learningStyle.adaptationRate - 0.05
      );
    }

    // Update preferred approach based on success patterns
    profile.learningStyle.preferredApproach = successRate > 0.8
      ? 'aggressive'
      : successRate > 0.5
      ? 'balanced'
      : 'conservative';
  }

  public async getRecommendations(userId: string): Promise<string[]> {
    const profile = this.profiles.get(userId);
    if (!profile) return [];

    const insights = await behavioralEngine.getInsights(userId);
    const recommendations: string[] = [];

    insights.forEach(insight => {
      if (insight.confidence > this.ADAPTATION_THRESHOLD) {
        recommendations.push(insight.recommendation);
      }
    });

    return recommendations;
  }

  public getProfile(userId: string): UserProfile | undefined {
    return this.profiles.get(userId);
  }
}

export const userProfiler = new UserProfiler();