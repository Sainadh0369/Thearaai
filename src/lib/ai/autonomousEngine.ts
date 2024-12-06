import { delay } from '../utils';

interface NeuralNode {
  id: string;
  weights: number[];
  bias: number;
  activation: (x: number) => number;
}

interface Memory {
  pattern: number[];
  outcome: number[];
  timestamp: number;
}

class AutonomousEngine {
  private nodes: NeuralNode[] = [];
  private memories: Memory[] = [];
  private learningRate = 0.01;
  private readonly inputSize: number;
  private readonly outputSize: number;

  constructor(inputSize: number, outputSize: number) {
    this.inputSize = inputSize;
    this.outputSize = outputSize;
    this.initializeNetwork();
  }

  private initializeNetwork() {
    // Create input layer
    for (let i = 0; i < this.inputSize; i++) {
      this.nodes.push(this.createNode(this.inputSize));
    }

    // Create hidden layer
    const hiddenSize = Math.floor((this.inputSize + this.outputSize) * 1.5);
    for (let i = 0; i < hiddenSize; i++) {
      this.nodes.push(this.createNode(this.inputSize));
    }

    // Create output layer
    for (let i = 0; i < this.outputSize; i++) {
      this.nodes.push(this.createNode(hiddenSize));
    }
  }

  private createNode(inputConnections: number): NeuralNode {
    return {
      id: Math.random().toString(36).substr(2, 9),
      weights: Array.from({ length: inputConnections }, () => Math.random() * 2 - 1),
      bias: Math.random() * 2 - 1,
      activation: (x: number) => 1 / (1 + Math.exp(-x)) // Sigmoid activation
    };
  }

  private async processInput(input: number[]): Promise<number[]> {
    let currentLayer = input;
    const layers = [
      this.nodes.slice(0, this.inputSize),
      this.nodes.slice(this.inputSize, -this.outputSize),
      this.nodes.slice(-this.outputSize)
    ];

    for (const layer of layers) {
      currentLayer = await Promise.all(
        layer.map(async (node) => {
          const sum = node.weights.reduce(
            (acc, weight, i) => acc + weight * currentLayer[i],
            node.bias
          );
          return node.activation(sum);
        })
      );
    }

    return currentLayer;
  }

  public async learn(pattern: number[], expectedOutcome: number[]) {
    const output = await this.processInput(pattern);
    const error = expectedOutcome.map((expected, i) => expected - output[i]);

    // Backpropagation
    this.nodes.forEach((node) => {
      node.weights = node.weights.map(
        (weight) => weight + this.learningRate * error[0] * weight
      );
      node.bias += this.learningRate * error[0];
    });

    // Store in memory
    this.memories.push({
      pattern,
      outcome: output,
      timestamp: Date.now()
    });

    // Prune old memories
    this.pruneMemories();
  }

  private pruneMemories() {
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    this.memories = this.memories.filter(
      (memory) => memory.timestamp > oneWeekAgo
    );
  }

  public async generateInsights(context: any): Promise<string[]> {
    const relevantMemories = this.findRelevantMemories(context);
    const patterns = this.analyzePatterns(relevantMemories);
    return this.synthesizeInsights(patterns);
  }

  private findRelevantMemories(context: any): Memory[] {
    // Find memories relevant to the current context
    return this.memories.filter(memory => {
      const contextVector = this.vectorize(context);
      const memoryVector = memory.pattern;
      return this.calculateSimilarity(contextVector, memoryVector) > 0.8;
    });
  }

  private vectorize(data: any): number[] {
    // Convert context data into numerical vector
    return Object.values(data).map(value => {
      if (typeof value === 'number') return value;
      if (typeof value === 'string') return this.hashString(value);
      return 0;
    });
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash) / 2147483647; // Normalize to 0-1
  }

  private calculateSimilarity(vec1: number[], vec2: number[]): number {
    const dotProduct = vec1.reduce((acc, val, i) => acc + val * vec2[i], 0);
    const mag1 = Math.sqrt(vec1.reduce((acc, val) => acc + val * val, 0));
    const mag2 = Math.sqrt(vec2.reduce((acc, val) => acc + val * val, 0));
    return dotProduct / (mag1 * mag2);
  }

  private analyzePatterns(memories: Memory[]): any[] {
    const patterns = [];
    for (let i = 0; i < memories.length - 1; i++) {
      const current = memories[i];
      const next = memories[i + 1];
      
      if (this.calculateSimilarity(current.outcome, next.pattern) > 0.7) {
        patterns.push({
          trigger: current.pattern,
          response: next.outcome,
          confidence: this.calculateSimilarity(current.outcome, next.pattern)
        });
      }
    }
    return patterns;
  }

  private synthesizeInsights(patterns: any[]): string[] {
    return patterns
      .filter(pattern => pattern.confidence > 0.8)
      .map(pattern => {
        const trend = this.interpretPattern(pattern);
        return this.formatInsight(trend);
      });
  }

  private interpretPattern(pattern: any): string {
    // Convert numerical pattern into human-readable insight
    const trigger = pattern.trigger.reduce((acc: number, val: number) => acc + val, 0);
    const response = pattern.response.reduce((acc: number, val: number) => acc + val, 0);
    
    if (response > trigger) return 'increasing';
    if (response < trigger) return 'decreasing';
    return 'stable';
  }

  private formatInsight(trend: string): string {
    const insights = {
      increasing: [
        'Growing demand detected in this area',
        'Positive trend emerging',
        'Opportunities expanding'
      ],
      decreasing: [
        'Declining interest observed',
        'Market saturation detected',
        'Consider diversifying focus'
      ],
      stable: [
        'Consistent demand maintained',
        'Stable market conditions',
        'Reliable opportunity area'
      ]
    };

    const options = insights[trend as keyof typeof insights];
    return options[Math.floor(Math.random() * options.length)];
  }
}

// Create singleton instance
export const autonomousEngine = new AutonomousEngine(10, 5);