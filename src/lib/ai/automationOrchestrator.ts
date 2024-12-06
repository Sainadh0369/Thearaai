import { resumeTailor } from './resumeTailor';
import { platformAdapter } from './platformAdapter';
import { learningEngine } from './learningEngine';
import { delay } from '../utils';

interface AutomationConfig {
  platforms: string[];
  keywords: string[];
  locations: string[];
  maxApplications: number;
  autoApply: boolean;
}

class AutomationOrchestrator {
  private isRunning: boolean = false;
  private config: AutomationConfig | null = null;
  private applications: any[] = [];

  public async start(config: AutomationConfig) {
    this.isRunning = true;
    this.config = config;
    await this.runAutomation();
  }

  public stop() {
    this.isRunning = false;
  }

  private async runAutomation() {
    if (!this.config) return;

    while (this.isRunning) {
      try {
        // Search for jobs across platforms
        for (const platform of this.config.platforms) {
          if (!this.isRunning) break;

          const jobs = await this.searchPlatform(platform);
          
          for (const job of jobs) {
            if (!this.isRunning) break;
            
            const shouldApply = await this.evaluateJob(job);
            
            if (shouldApply && this.config.autoApply) {
              await this.applyToJob(platform, job);
            }

            if (this.applications.length >= this.config.maxApplications) {
              this.stop();
              break;
            }
          }
        }

        await delay(60000); // Wait 1 minute between cycles
      } catch (error) {
        console.error('Automation error:', error);
        await delay(300000); // Wait 5 minutes on error
      }
    }
  }

  private async searchPlatform(platform: string): Promise<any[]> {
    if (!this.config) return [];

    const jobs = [];
    for (const keyword of this.config.keywords) {
      const results = await platformAdapter.searchJobs(platform, keyword);
      jobs.push(...results);
    }

    return jobs;
  }

  private async evaluateJob(job: any): Promise<boolean> {
    try {
      // Analyze job with learning engine
      const prediction = await learningEngine.predict({
        title: job.title,
        description: job.description,
        company: job.company
      });

      // Only proceed if confidence is high enough
      if (prediction.score >= 0.8 && prediction.confidence >= 0.7) {
        // Tailor resume for the job
        const tailoredResume = await resumeTailor.tailorResume(
          this.getResumeTemplate(),
          job.description
        );

        // Consider application if resume match is good
        return tailoredResume.score >= 85;
      }

      return false;
    } catch (error) {
      console.error('Error evaluating job:', error);
      return false;
    }
  }

  private async applyToJob(platform: string, job: any): Promise<void> {
    try {
      const success = await platformAdapter.applyToJob(platform, job.id, {
        resume: await this.getResumeTemplate(),
        coverLetter: await this.generateCoverLetter(job)
      });

      if (success) {
        this.applications.push({
          jobId: job.id,
          platform,
          timestamp: new Date().toISOString(),
          status: 'submitted'
        });

        // Learn from successful application
        await learningEngine.learn(
          { job, platform },
          { success: true },
          true
        );
      }
    } catch (error) {
      console.error('Error applying to job:', error);
      throw error;
    }
  }

  private getResumeTemplate(): any[] {
    // Return resume sections
    return [
      {
        title: 'experience',
        content: 'Senior Frontend Developer...',
        keywords: ['react', 'typescript', 'node.js'],
        weight: 0.4
      },
      {
        title: 'skills',
        content: 'React, TypeScript, Node.js...',
        keywords: ['react', 'typescript', 'node.js'],
        weight: 0.3
      }
    ];
  }

  private async generateCoverLetter(job: any): Promise<string> {
    // Simulate cover letter generation
    await delay(500);
    return `Dear Hiring Manager,\n\nI am excited to apply for the ${job.title} position...`;
  }

  public getApplications() {
    return this.applications;
  }

  public getStats() {
    return {
      totalApplications: this.applications.length,
      successRate: this.calculateSuccessRate(),
      averageResponseTime: this.calculateAverageResponseTime()
    };
  }

  private calculateSuccessRate(): number {
    const submitted = this.applications.filter(app => app.status === 'submitted').length;
    return (submitted / this.applications.length) * 100;
  }

  private calculateAverageResponseTime(): number {
    const responseTimes = this.applications
      .filter(app => app.responseTime)
      .map(app => app.responseTime);
    
    if (responseTimes.length === 0) return 0;
    
    return responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
  }
}

export const automationOrchestrator = new AutomationOrchestrator();