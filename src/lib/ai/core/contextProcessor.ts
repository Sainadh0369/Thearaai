import { nlpProcessor } from '../nlp/nlpProcessor';

export class ContextProcessor {
  private readonly memorySize: number = 1000;
  private memory: Map<string, any> = new Map();

  public async analyze(input: any): Promise<any> {
    try {
      // Process text content if available
      let textAnalysis = null;
      if (typeof input === 'string' || input.text) {
        const text = typeof input === 'string' ? input : input.text;
        textAnalysis = await nlpProcessor.processText(text);
      }

      // Extract temporal context
      const temporalContext = this.extractTemporalContext();

      // Combine contexts
      const context = {
        ...textAnalysis,
        ...temporalContext,
        timestamp: Date.now()
      };

      // Store in memory
      this.remember(context);

      return context;
    } catch (error) {
      console.error('Error analyzing context:', error);
      throw error;
    }
  }

  private extractTemporalContext(): any {
    const now = new Date();
    return {
      hour: now.getHours(),
      day: now.getDay(),
      month: now.getMonth(),
      weekend: now.getDay() === 0 || now.getDay() === 6
    };
  }

  private remember(context: any): void {
    const key = `ctx_${Date.now()}`;
    this.memory.set(key, context);

    // Prune old memories if needed
    if (this.memory.size > this.memorySize) {
      const oldestKey = Array.from(this.memory.keys())[0];
      this.memory.delete(oldestKey);
    }
  }

  public getRecentContexts(count: number = 10): any[] {
    return Array.from(this.memory.values())
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, count);
  }
}