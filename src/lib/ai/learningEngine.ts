interface LearningData {
  input: any;
  output: any;
  success: boolean;
  timestamp: number;
}

interface PerformanceMetrics {
  successRate: number;
  averageScore: number;
  confidenceLevel: number;
}

class LearningEngine {
  private learningData: LearningData[] = [];
  private weights: Map<string, number> = new Map();
  private readonly learningRate = 0.01;
  private readonly memoryLimit = 1000;

  public async learn(input: any, output: any, success: boolean): Promise<void> {
    try {
      // Add new data point
      this.learningData.push({
        input,
        output,
        success,
        timestamp: Date.now()
      });

      // Maintain memory limit
      if (this.learningData.length > this.memoryLimit) {
        this.pruneOldData();
      }

      // Update weights based on success/failure
      await this.updateWeights(input, success);

      // Analyze patterns
      await this.analyzePatterns();
    } catch (error) {
      console.error('Error in learning process:', error);
      throw error;
    }
  }

  private async updateWeights(input: any, success: boolean): Promise<void> {
    const features = this.extractFeatures(input);
    const adjustment = success ? this.learningRate : -this.learningRate;

    features.forEach(feature => {
      const currentWeight = this.weights.get(feature) || 0.5;
      const newWeight = Math.max(0, Math.min(1, currentWeight + adjustment));
      this.weights.set(feature, newWeight);
    });
  }

  private extractFeatures(input: any): string[] {
    const features: string[] = [];
    
    // Extract features from skills
    if (input.skills) {
      features.push(...input.skills.map((s: string) => `skill_${s.toLowerCase()}`));
    }

    // Extract features from experience
    if (input.experience) {
      features.push(`exp_${input.experience}`);
    }

    // Extract features from requirements
    if (input.requirements) {
      features.push(...input.requirements.map((r: string) => `req_${r.toLowerCase()}`));
    }

    return features;
  }

  private async analyzePatterns(): Promise<void> {
    const recentData = this.learningData.slice(-100);
    const patterns = new Map<string, number>();

    recentData.forEach(data => {
      const features = this.extractFeatures(data.input);
      features.forEach(feature => {
        const successCount = patterns.get(feature) || 0;
        patterns.set(feature, successCount + (data.success ? 1 : 0));
      });
    });

    // Update weights based on pattern analysis
    patterns.forEach((successCount, feature) => {
      const successRate = successCount / recentData.length;
      const currentWeight = this.weights.get(feature) || 0.5;
      const newWeight = (currentWeight + successRate) / 2;
      this.weights.set(feature, newWeight);
    });
  }

  public async predict(input: any): Promise<{
    score: number;
    confidence: number;
    insights: string[];
  }> {
    const features = this.extractFeatures(input);
    const weights = features.map(f => this.weights.get(f) || 0.5);
    
    const score = weights.reduce((sum, w) => sum + w, 0) / weights.length;
    const confidence = this.calculateConfidence(weights);
    const insights = this.generateInsights(features, weights);

    return { score, confidence, insights };
  }

  private calculateConfidence(weights: number[]): number {
    const variance = weights.reduce((sum, w) => sum + Math.pow(w - 0.5, 2), 0) / weights.length;
    return Math.min(1, Math.sqrt(variance) * 2);
  }

  private generateInsights(features: string[], weights: number[]): string[] {
    const insights: string[] = [];
    const weightedFeatures = features.map((f, i) => ({ feature: f, weight: weights[i] }));
    
    // Sort by weight to identify strengths and weaknesses
    weightedFeatures.sort((a, b) => b.weight - a.weight);

    // Generate insights based on weights
    const strengths = weightedFeatures.filter(f => f.weight > 0.7);
    const weaknesses = weightedFeatures.filter(f => f.weight < 0.3);

    if (strengths.length > 0) {
      insights.push(`Strong match in: ${strengths.map(s => s.feature.split('_')[1]).join(', ')}`);
    }

    if (weaknesses.length > 0) {
      insights.push(`Consider improving: ${weaknesses.map(w => w.feature.split('_')[1]).join(', ')}`);
    }

    return insights;
  }

  public getPerformanceMetrics(): PerformanceMetrics {
    const recentData = this.learningData.slice(-100);
    
    const successRate = recentData.filter(d => d.success).length / recentData.length;
    const averageScore = Array.from(this.weights.values()).reduce((sum, w) => sum + w, 0) / this.weights.size;
    const confidenceLevel = Math.min(1, this.learningData.length / this.memoryLimit);

    return {
      successRate,
      averageScore,
      confidenceLevel
    };
  }

  private pruneOldData(): void {
    // Sort by timestamp and keep only the most recent entries
    this.learningData.sort((a, b) => b.timestamp - a.timestamp);
    this.learningData = this.learningData.slice(0, this.memoryLimit);
  }
}

export const learningEngine = new LearningEngine();