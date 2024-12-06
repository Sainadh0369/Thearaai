import { delay, extractKeywords, calculateMatch } from './utils';
import { sanitizeInput } from './utils';

class AIEngine {
  private context: Map<string, any> = new Map();
  private learningData: Array<{input: string, output: string}> = [];
  private readonly MAX_TOKENS = 1000;
  private readonly RATE_LIMIT = 10; // requests per minute
  private requestCount: number = 0;
  private lastRequestTime: number = Date.now();
  
  constructor() {
    this.initializeKnowledge();
    this.setupSafetyMeasures();
  }

  private initializeKnowledge() {
    this.context.set('skills', new Set([
      'react', 'javascript', 'typescript', 'node.js', 'python',
      'java', 'c++', 'aws', 'docker', 'kubernetes',
      'sql', 'mongodb', 'redis', 'graphql', 'rest'
    ]));

    this.context.set('roles', new Set([
      'frontend developer', 'backend developer', 'full stack developer',
      'devops engineer', 'data scientist', 'product manager',
      'ui/ux designer', 'software architect', 'tech lead'
    ]));

    this.context.set('blockedWords', new Set([
      'password', 'secret', 'token', 'key', 'credential',
      'social security', 'credit card', 'private'
    ]));
  }

  private setupSafetyMeasures() {
    this.context.set('maxResponseLength', 2000);
    this.context.set('maxInputLength', 1000);
    this.context.set('requestTimeout', 5000);
  }

  private async checkRateLimit(): Promise<boolean> {
    const now = Date.now();
    const timeWindow = 60 * 1000; // 1 minute
    
    if (now - this.lastRequestTime > timeWindow) {
      this.requestCount = 0;
      this.lastRequestTime = now;
    }
    
    if (this.requestCount >= this.RATE_LIMIT) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    
    this.requestCount++;
    return true;
  }

  private sanitizeContent(content: string): string {
    content = sanitizeInput(content);
    
    // Remove any blocked words
    const blockedWords = this.context.get('blockedWords');
    blockedWords.forEach((word: string) => {
      const regex = new RegExp(word, 'gi');
      content = content.replace(regex, '[REMOVED]');
    });
    
    return content.slice(0, this.context.get('maxInputLength'));
  }

  async processInput(input: string): Promise<string> {
    try {
      await this.checkRateLimit();
      
      const sanitizedInput = this.sanitizeContent(input);
      if (!sanitizedInput) {
        return 'Invalid input. Please try again.';
      }
      
      const keywords = extractKeywords(sanitizedInput.toLowerCase());
      const context = this.analyzeContext(keywords);
      
      const response = await Promise.race([
        this.generateResponse(context),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), 
          this.context.get('requestTimeout'))
        )
      ]) as string;
      
      return this.sanitizeContent(response);
      
    } catch (error) {
      console.error('Error processing input:', error);
      return 'An error occurred. Please try again later.';
    }
  }

  private analyzeContext(keywords: string[]): string {
    if (keywords.some(k => this.context.get('skills').has(k))) {
      return 'skills';
    }
    if (keywords.some(k => this.context.get('roles').has(k))) {
      return 'roles';
    }
    return 'general';
  }

  private async generateResponse(context: string): Promise<string> {
    await delay(Math.random() * 500 + 300); // Add randomness to response time
    
    switch (context) {
      case 'skills':
        return this.generateSkillsResponse();
      case 'roles':
        return this.generateRolesResponse();
      default:
        return this.generateGeneralResponse();
    }
  }

  private generateSkillsResponse(): string {
    const responses = [
      "Based on current market trends, I recommend focusing on modern JavaScript frameworks and cloud technologies.",
      "Consider strengthening your full-stack capabilities by learning both frontend and backend technologies.",
      "DevOps skills are increasingly important. Consider learning containerization and CI/CD practices."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private generateRolesResponse(): string {
    const responses = [
      "For senior roles, focus on system design and architecture skills.",
      "Technical leadership roles require both strong technical skills and soft skills.",
      "Consider gaining experience with cross-functional team collaboration."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private generateGeneralResponse(): string {
    const responses = [
      "I can help you with career guidance, skill assessment, and job matching.",
      "Let me know what specific area you'd like to focus on: skills, roles, or career planning.",
      "I can provide insights on current industry trends and requirements."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  async matchSkills(required: string[], provided: string[]): Promise<{
    score: number;
    recommendations: string[];
  }> {
    try {
      await this.checkRateLimit();
      
      const sanitizedRequired = required.map(skill => this.sanitizeContent(skill));
      const sanitizedProvided = provided.map(skill => this.sanitizeContent(skill));
      
      const score = calculateMatch(sanitizedRequired, sanitizedProvided);
      const recommendations = this.generateSkillRecommendations(
        sanitizedRequired, 
        sanitizedProvided
      );
      
      return { score, recommendations };
      
    } catch (error) {
      console.error('Error matching skills:', error);
      throw new Error('Failed to match skills');
    }
  }

  private generateSkillRecommendations(required: string[], provided: string[]): string[] {
    const missing = required.filter(skill => 
      !provided.some(p => p.toLowerCase().includes(skill.toLowerCase()))
    );
    
    return missing.map(skill => `Consider adding ${skill} to your skillset`);
  }

  async matchJob(jobDescription: string, candidateProfile: any): Promise<{
    score: number;
    strengths: string[];
    gaps: string[];
  }> {
    try {
      await this.checkRateLimit();
      
      const sanitizedDescription = this.sanitizeContent(jobDescription);
      const sanitizedProfile = JSON.parse(
        this.sanitizeContent(JSON.stringify(candidateProfile))
      );
      
      const jobKeywords = extractKeywords(sanitizedDescription);
      const profileKeywords = extractKeywords(JSON.stringify(sanitizedProfile));
      
      const score = calculateMatch(jobKeywords, profileKeywords);
      
      return {
        score,
        strengths: this.identifyStrengths(jobKeywords, profileKeywords),
        gaps: this.identifyGaps(jobKeywords, profileKeywords)
      };
      
    } catch (error) {
      console.error('Error matching job:', error);
      throw new Error('Failed to match job');
    }
  }

  private identifyStrengths(required: string[], provided: string[]): string[] {
    return provided
      .filter(skill => required.includes(skill))
      .map(skill => `Strong ${skill} background`);
  }

  private identifyGaps(required: string[], provided: string[]): string[] {
    return required
      .filter(skill => !provided.includes(skill))
      .map(skill => `Consider gaining experience in ${skill}`);
  }
}

export const aiEngine = new AIEngine();