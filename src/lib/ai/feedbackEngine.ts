import { delay } from '../utils';
import { learningEngine } from './learningEngine';
import { nlpProcessor } from './nlpProcessor';

interface ApplicationOutcome {
  jobId: string;
  status: 'success' | 'rejected' | 'no_response';
  feedback?: string;
  timestamp: number;
}

interface FeedbackMetrics {
  successRate: number;
  averageResponseTime: number;
  commonRejectionReasons: string[];
  improvementSuggestions: string[];
}

class FeedbackEngine {
  private outcomes: Map<string, ApplicationOutcome> = new Map();
  private readonly ANALYSIS_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours
  private lastAnalysis: number = 0;

  public async processFeedback(
    jobId: string,
    status: ApplicationOutcome['status'],
    feedback?: string
  ): Promise<void> {
    try {
      // Store outcome
      this.outcomes.set(jobId, {
        jobId,
        status,
        feedback,
        timestamp: Date.now()
      });

      // Analyze feedback if provided
      if (feedback) {
        const analysis = await nlpProcessor.processText(feedback);
        await this.learnFromFeedback(analysis);
      }

      // Periodic analysis
      await this.runPeriodicAnalysis();
    } catch (error) {
      console.error('Error processing feedback:', error);
      throw error;
    }
  }

  private async learnFromFeedback(analysis: any): Promise<void> {
    try {
      // Extract insights from feedback
      const keywords = analysis.keywords;
      const sentiment = analysis.sentiment;

      // Update learning model
      await learningEngine.learn(
        { keywords, sentiment },
        { success: sentiment > 0 },
        true
      );
    } catch (error) {
      console.error('Error learning from feedback:', error);
    }
  }

  private async runPeriodicAnalysis(): Promise<void> {
    const now = Date.now();
    if (now - this.lastAnalysis < this.ANALYSIS_INTERVAL) return;

    try {
      const metrics = await this.calculateMetrics();
      await this.updateStrategies(metrics);
      this.lastAnalysis = now;
    } catch (error) {
      console.error('Error running periodic analysis:', error);
    }
  }

  private async calculateMetrics(): Promise<FeedbackMetrics> {
    const recentOutcomes = Array.from(this.outcomes.values())
      .filter(outcome => Date.now() - outcome.timestamp < this.ANALYSIS_INTERVAL);

    const successCount = recentOutcomes.filter(o => o.status === 'success').length;
    const totalCount = recentOutcomes.length;

    const responseTimes = recentOutcomes
      .map(o => o.timestamp)
      .sort((a, b) => a - b);

    const rejectionReasons = await this.analyzeRejectionReasons(
      recentOutcomes.filter(o => o.status === 'rejected' && o.feedback)
    );

    return {
      successRate: totalCount > 0 ? (successCount / totalCount) * 100 : 0,
      averageResponseTime: this.calculateAverageResponseTime(responseTimes),
      commonRejectionReasons: rejectionReasons,
      improvementSuggestions: await this.generateSuggestions(rejectionReasons)
    };
  }

  private async analyzeRejectionReasons(
    rejections: ApplicationOutcome[]
  ): Promise<string[]> {
    const reasons = new Map<string, number>();

    for (const rejection of rejections) {
      if (!rejection.feedback) continue;

      const analysis = await nlpProcessor.processText(rejection.feedback);
      analysis.keywords.forEach(keyword => {
        reasons.set(keyword, (reasons.get(keyword) || 0) + 1);
      });
    }

    return Array.from(reasons.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([reason]) => reason);
  }

  private calculateAverageResponseTime(timestamps: number[]): number {
    if (timestamps.length < 2) return 0;

    const differences = [];
    for (let i = 1; i < timestamps.length; i++) {
      differences.push(timestamps[i] - timestamps[i - 1]);
    }

    return differences.reduce((sum, diff) => sum + diff, 0) / differences.length;
  }

  private async generateSuggestions(
    rejectionReasons: string[]
  ): Promise<string[]> {
    const suggestions: string[] = [];

    if (rejectionReasons.includes('experience')) {
      suggestions.push('Focus on highlighting relevant experience more prominently');
    }

    if (rejectionReasons.includes('skills')) {
      suggestions.push('Consider obtaining certifications for key skills');
    }

    if (rejectionReasons.includes('culture')) {
      suggestions.push('Emphasize alignment with company values in applications');
    }

    return suggestions;
  }

  private async updateStrategies(metrics: FeedbackMetrics): Promise<void> {
    try {
      // Adjust application strategy based on metrics
      if (metrics.successRate < 20) {
        // Increase selectivity
        await learningEngine.learn(
          { type: 'strategy_adjustment', metrics },
          { action: 'increase_threshold' },
          true
        );
      }

      // Optimize timing based on response times
      if (metrics.averageResponseTime > 7 * 24 * 60 * 60 * 1000) { // 7 days
        await learningEngine.learn(
          { type: 'timing_optimization', metrics },
          { action: 'adjust_timing' },
          true
        );
      }

      // Update application content based on rejection reasons
      if (metrics.commonRejectionReasons.length > 0) {
        await learningEngine.learn(
          { type: 'content_optimization', reasons: metrics.commonRejectionReasons },
          { action: 'update_content' },
          true
        );
      }
    } catch (error) {
      console.error('Error updating strategies:', error);
    }
  }

  public getMetrics(): FeedbackMetrics {
    return {
      successRate: 0,
      averageResponseTime: 0,
      commonRejectionReasons: [],
      improvementSuggestions: []
    };
  }

  public async getInsights(): Promise<string[]> {
    const metrics = await this.calculateMetrics();
    const insights: string[] = [];

    if (metrics.successRate > 50) {
      insights.push('Current application strategy is performing well');
    } else {
      insights.push('Consider adjusting application criteria for better results');
    }

    if (metrics.commonRejectionReasons.length > 0) {
      insights.push(`Common rejection factors: ${metrics.commonRejectionReasons.join(', ')}`);
    }

    return insights;
  }
}

export const feedbackEngine = new FeedbackEngine();