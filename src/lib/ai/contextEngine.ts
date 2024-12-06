interface ContextData {
  skills: string[];
  experience: string[];
  requirements: string[];
  preferences: Record<string, any>;
}

class ContextEngine {
  private context: Map<string, ContextData> = new Map();
  private readonly learningRate = 0.1;

  public async analyzeJobDescription(description: string): Promise<{
    skills: string[];
    requirements: string[];
    score: number;
  }> {
    try {
      // Simulate NLP processing
      await delay(300);
      
      const skills = this.extractSkills(description);
      const requirements = this.extractRequirements(description);
      const score = this.calculateRelevanceScore(skills, requirements);

      return { skills, requirements, score };
    } catch (error) {
      console.error('Error analyzing job description:', error);
      throw error;
    }
  }

  private extractSkills(text: string): string[] {
    const skillKeywords = [
      'react', 'javascript', 'typescript', 'node.js',
      'python', 'java', 'aws', 'docker', 'kubernetes'
    ];

    return text
      .toLowerCase()
      .split(/\W+/)
      .filter(word => skillKeywords.includes(word));
  }

  private extractRequirements(text: string): string[] {
    const requirements = [];
    const lines = text.split('\n');

    for (const line of lines) {
      if (line.match(/require|must have|essential/i)) {
        requirements.push(line.trim());
      }
    }

    return requirements;
  }

  private calculateRelevanceScore(skills: string[], requirements: string[]): number {
    const totalPoints = skills.length + requirements.length;
    const matchedPoints = skills.length * 2 + requirements.length;
    return Math.min(100, (matchedPoints / totalPoints) * 100);
  }

  public async learn(data: any): Promise<void> {
    const contextId = this.generateContextId(data);
    const existingContext = this.context.get(contextId);

    if (existingContext) {
      this.updateContext(existingContext, data);
    } else {
      this.createNewContext(contextId, data);
    }
  }

  private generateContextId(data: any): string {
    return `ctx_${Math.random().toString(36).substr(2, 9)}`;
  }

  private updateContext(context: ContextData, newData: any): void {
    context.skills = [...new Set([...context.skills, ...newData.skills])];
    context.experience = [...new Set([...context.experience, ...newData.experience])];
    context.requirements = [...new Set([...context.requirements, ...newData.requirements])];
    context.preferences = { ...context.preferences, ...newData.preferences };
  }

  private createNewContext(contextId: string, data: any): void {
    this.context.set(contextId, {
      skills: data.skills || [],
      experience: data.experience || [],
      requirements: data.requirements || [],
      preferences: data.preferences || {}
    });
  }
}

export const contextEngine = new ContextEngine();