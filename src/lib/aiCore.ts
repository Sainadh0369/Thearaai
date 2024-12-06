import { delay, generateId } from './utils';
import { AI_CONFIG, SKILLS, ROLES } from './constants';

class AICore {
  private context: Map<string, any>;
  private learningData: Array<{input: string; output: string}>;
  private requestCount: number;
  private lastRequestTime: number;

  constructor() {
    this.context = new Map();
    this.learningData = [];
    this.requestCount = 0;
    this.lastRequestTime = Date.now();
    this.initializeContext();
  }

  private initializeContext() {
    this.context.set('skills', new Set(SKILLS));
    this.context.set('roles', new Set(ROLES));
    this.context.set('maxTokens', AI_CONFIG.MAX_TOKENS);
    this.context.set('rateLimit', AI_CONFIG.RATE_LIMIT);
  }

  private async checkRateLimit(): Promise<void> {
    const now = Date.now();
    if (now - this.lastRequestTime > 60000) {
      this.requestCount = 0;
      this.lastRequestTime = now;
    }
    if (this.requestCount >= this.context.get('rateLimit')) {
      throw new Error('Rate limit exceeded');
    }
    this.requestCount++;
  }

  async processMessage(message: string): Promise<string> {
    try {
      await this.checkRateLimit();
      await delay(300); // Simulate processing time

      const words = message.toLowerCase().split(/\s+/);
      const skills = words.filter(w => this.context.get('skills').has(w));
      const roles = words.filter(w => this.context.get('roles').has(w));

      let response: string;
      if (skills.length > 0) {
        response = this.generateSkillsResponse(skills);
      } else if (roles.length > 0) {
        response = this.generateRoleResponse(roles);
      } else {
        response = this.generateGeneralResponse();
      }

      this.learningData.push({ input: message, output: response });
      return response;
    } catch (error) {
      console.error('Error processing message:', error);
      throw new Error('Failed to process message');
    }
  }

  private generateSkillsResponse(skills: string[]): string {
    const responses = [
      `Your ${skills.join(', ')} skills are in high demand. Consider adding cloud technologies to complement them.`,
      `With your background in ${skills.join(', ')}, you might want to explore related technologies like TypeScript or Node.js.`,
      `${skills.join(', ')} are valuable skills. Consider getting certifications to validate your expertise.`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private generateRoleResponse(roles: string[]): string {
    const responses = [
      `For ${roles.join(', ')} positions, focus on system design and architecture skills.`,
      `${roles.join(', ')} roles often require both technical expertise and soft skills.`,
      `To advance as a ${roles.join(', ')}, consider gaining experience with team leadership.`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private generateGeneralResponse(): string {
    const responses = [
      "I can help you with career guidance and skill assessment.",
      "Let me know what specific skills or roles you're interested in.",
      "I can provide insights on current industry trends and requirements."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  async analyzeSkills(skills: string[]): Promise<{
    score: number;
    recommendations: string[];
  }> {
    try {
      await this.checkRateLimit();
      await delay(200);

      const knownSkills = skills.filter(s => 
        this.context.get('skills').has(s.toLowerCase())
      );
      const score = (knownSkills.length / skills.length) * 100;

      const recommendations = [
        'Consider adding cloud technologies to your skillset',
        'Deepen your knowledge of modern frameworks',
        'Focus on practical project experience'
      ];

      return { score, recommendations };
    } catch (error) {
      console.error('Error analyzing skills:', error);
      throw new Error('Failed to analyze skills');
    }
  }

  async matchJob(description: string, profile: any): Promise<{
    score: number;
    strengths: string[];
    gaps: string[];
  }> {
    try {
      await this.checkRateLimit();
      await delay(200);

      const descWords = description.toLowerCase().split(/\s+/);
      const profileWords = JSON.stringify(profile).toLowerCase().split(/\s+/);

      const matchingWords = descWords.filter(w => profileWords.includes(w));
      const score = (matchingWords.length / descWords.length) * 100;

      return {
        score,
        strengths: ['Technical expertise', 'Relevant experience'],
        gaps: ['Consider gaining more specific domain knowledge']
      };
    } catch (error) {
      console.error('Error matching job:', error);
      throw new Error('Failed to match job');
    }
  }
}

export const aiCore = new AICore();