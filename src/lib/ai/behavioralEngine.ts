import { delay } from '../utils';
import { learningEngine } from './learningEngine';
import { nlpProcessor } from './nlpProcessor';

interface BehavioralInsight {
  type: string;
  insight: string;
  confidence: number;
  recommendation: string;
}

class BehavioralEngine {
  private insights: Map<string, BehavioralInsight[]> = new Map();

  public async analyzeBehavior(userId: string, action: any): Promise<void> {
    try {
      // Process action data
      const processedData = await nlpProcessor.processText(JSON.stringify(action));
      
      // Learn from behavior
      await learningEngine.learn(
        { type: 'behavior', data: processedData },
        action.outcome || {},
        true
      );
      
      // Update insights
      await this.updateInsights(userId, processedData);
    } catch (error) {
      console.error('Error analyzing behavior:', error);
      throw error;
    }
  }

  public async getInsights(userId: string): Promise<BehavioralInsight[]> {
    // Simulate API call
    await delay(800);

    // Return mock insights if none exist
    if (!this.insights.has(userId)) {
      const mockInsights: BehavioralInsight[] = [
        {
          type: 'timing',
          insight: 'Applications submitted between 9-11 AM have higher response rates',
          confidence: 0.92,
          recommendation: 'Schedule applications during morning hours'
        },
        {
          type: 'engagement',
          insight: 'Detailed cover letters increase response rate by 35%',
          confidence: 0.88,
          recommendation: 'Customize cover letters for each application'
        },
        {
          type: 'skills',
          insight: 'Technical skills match 85% of target job requirements',
          confidence: 0.95,
          recommendation: 'Focus on highlighting system design experience'
        }
      ];
      this.insights.set(userId, mockInsights);
    }

    return this.insights.get(userId) || [];
  }

  private async updateInsights(userId: string, data: any): Promise<void> {
    const currentInsights = this.insights.get(userId) || [];
    const newInsights = await this.generateInsights(data);
    
    this.insights.set(userId, [
      ...currentInsights,
      ...newInsights
    ].slice(-10)); // Keep only last 10 insights
  }

  private async generateInsights(data: any): Promise<BehavioralInsight[]> {
    // Generate new insights based on behavioral data
    return [];
  }
}

export const behavioralEngine = new BehavioralEngine();