class NLPProcessor {
  private readonly stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for'
  ]);

  public async processText(text: string): Promise<{
    entities: string[];
    keywords: string[];
    sentiment: number;
  }> {
    try {
      const tokens = this.tokenize(text);
      const filteredTokens = this.removeStopWords(tokens);
      
      return {
        entities: this.extractEntities(filteredTokens),
        keywords: this.extractKeywords(filteredTokens),
        sentiment: this.analyzeSentiment(text)
      };
    } catch (error) {
      console.error('Error processing text:', error);
      throw error;
    }
  }

  private tokenize(text: string): string[] {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/);
  }

  private removeStopWords(tokens: string[]): string[] {
    return tokens.filter(token => !this.stopWords.has(token));
  }

  private extractEntities(tokens: string[]): string[] {
    // Simple entity extraction based on capitalization
    return tokens.filter(token => 
      token.charAt(0) === token.charAt(0).toUpperCase()
    );
  }

  private extractKeywords(tokens: string[]): string[] {
    // Extract important keywords based on frequency
    const frequency: Record<string, number> = {};
    tokens.forEach(token => {
      frequency[token] = (frequency[token] || 0) + 1;
    });

    return Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([token]) => token);
  }

  private analyzeSentiment(text: string): number {
    const positiveWords = new Set(['excellent', 'great', 'good', 'best', 'outstanding']);
    const negativeWords = new Set(['poor', 'bad', 'worst', 'terrible', 'awful']);

    const tokens = this.tokenize(text);
    let score = 0;

    tokens.forEach(token => {
      if (positiveWords.has(token)) score += 1;
      if (negativeWords.has(token)) score -= 1;
    });

    return Math.max(-1, Math.min(1, score / tokens.length));
  }
}

export const nlpProcessor = new NLPProcessor();