import { aiEngine } from './aiEngine';
import { delay } from './utils';

class AIService {
  private static readonly MAX_RETRIES = 3;
  private static readonly RETRY_DELAY = 1000;

  private static async withRetry<T>(
    operation: () => Promise<T>,
    retries: number = this.MAX_RETRIES
  ): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      if (retries > 0) {
        await delay(this.RETRY_DELAY);
        return this.withRetry(operation, retries - 1);
      }
      throw error;
    }
  }

  static async processMessage(message: string): Promise<string> {
    return this.withRetry(async () => {
      try {
        if (!message || typeof message !== 'string') {
          throw new Error('Invalid message format');
        }
        return await aiEngine.processInput(message);
      } catch (error) {
        console.error('Error processing message:', error);
        throw new Error('Failed to process message');
      }
    });
  }

  static async analyzeSkills(skills: string[]): Promise<{
    score: number;
    recommendations: string[];
  }> {
    return this.withRetry(async () => {
      try {
        if (!Array.isArray(skills) || skills.length === 0) {
          throw new Error('Invalid skills format');
        }
        const requiredSkills = ['javascript', 'react', 'typescript', 'node.js'];
        return await aiEngine.matchSkills(requiredSkills, skills);
      } catch (error) {
        console.error('Error analyzing skills:', error);
        throw new Error('Failed to analyze skills');
      }
    });
  }

  static async matchJobWithCandidate(
    jobDescription: string,
    candidateProfile: any
  ): Promise<{
    score: number;
    strengths: string[];
    gaps: string[];
  }> {
    return this.withRetry(async () => {
      try {
        if (!jobDescription || !candidateProfile) {
          throw new Error('Invalid job matching parameters');
        }
        return await aiEngine.matchJob(jobDescription, candidateProfile);
      } catch (error) {
        console.error('Error matching job:', error);
        throw new Error('Failed to match job with candidate');
      }
    });
  }

  static async generateInterviewQuestions(role: string): Promise<string[]> {
    return this.withRetry(async () => {
      try {
        if (!role) {
          throw new Error('Invalid role parameter');
        }
        
        await delay(600);
        const questions = [
          'Describe a challenging project you worked on recently.',
          'How do you approach problem-solving in your development work?',
          'What are your thoughts on code quality and testing?',
          'How do you stay updated with new technologies?',
          'Describe your experience with team collaboration.'
        ];
        
        return questions;
      } catch (error) {
        console.error('Error generating questions:', error);
        throw new Error('Failed to generate interview questions');
      }
    });
  }

  static async analyzeResponse(response: string): Promise<{
    score: number;
    feedback: string;
  }> {
    return this.withRetry(async () => {
      try {
        if (!response) {
          throw new Error('Invalid response parameter');
        }
        
        await delay(500);
        const keywords = ['experience', 'collaboration', 'solution', 'success'];
        const score = response.toLowerCase().split(' ')
          .filter(word => keywords.includes(word)).length * 20;
        
        return {
          score: Math.min(score, 100),
          feedback: 'Good use of specific examples and clear communication.'
        };
      } catch (error) {
        console.error('Error analyzing response:', error);
        throw new Error('Failed to analyze response');
      }
    });
  }
}

export default AIService;