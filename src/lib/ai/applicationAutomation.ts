import { autonomousAgent } from './autonomousAgent';
import { platformIntegration } from './platformIntegration';
import { resumeTailor } from './resumeTailor';
import { contentExtractor } from './contentExtractor';
import { delay } from '../utils';

interface AutomationConfig {
  keywords: string[];
  locations: string[];
  platforms: string[];
  maxApplications: number;
  autoApply: boolean;
  blacklistedCompanies: string[];
  salary: {
    min: number;
    max: number;
  };
  experienceLevel: string;
  workType: string[];
}

class ApplicationAutomation {
  private isRunning: boolean = false;
  private config: AutomationConfig | null = null;
  private applications: any[] = [];
  private readonly MAX_CONCURRENT_TASKS = 3;

  public async start(config: AutomationConfig): Promise<void> {
    this.isRunning = true;
    this.config = config;

    try {
      // Initialize autonomous agent
      await autonomousAgent.startJobSearch({
        preferences: config,
        platforms: config.platforms
      });

      // Start automation loop
      while (this.isRunning) {
        await this.runAutomationCycle();
        await delay(60000); // Wait 1 minute between cycles
      }
    } catch (error) {
      console.error('Error in application automation:', error);
      this.stop();
    }
  }

  public stop(): void {
    this.isRunning = false;
    autonomousAgent.stopJobSearch();
  }

  private async runAutomationCycle(): Promise<void> {
    if (!this.config) return;

    try {
      // Search for jobs across platforms
      const jobs = await this.searchJobs();
      
      // Process jobs in parallel with rate limiting
      const chunks = this.chunkArray(jobs, this.MAX_CONCURRENT_TASKS);
      
      for (const chunk of chunks) {
        await Promise.all(
          chunk.map(job => this.processJob(job))
        );
      }

      // Update stats
      this.updateStats();
    } catch (error) {
      console.error('Error in automation cycle:', error);
    }
  }

  private async searchJobs(): Promise<any[]> {
    if (!this.config) return [];

    const allJobs = [];
    
    for (const platform of this.config.platforms) {
      for (const keyword of this.config.keywords) {
        for (const location of this.config.locations) {
          const jobs = await platformIntegration.searchJobs(
            platform,
            keyword,
            location
          );
          allJobs.push(...jobs);
        }
      }
    }

    return this.filterJobs(allJobs);
  }

  private async processJob(job: any): Promise<void> {
    try {
      // Extract detailed job information
      const jobDetails = await contentExtractor.extractJobContent(job.description);

      // Check if job meets criteria
      if (!this.meetsCriteria(jobDetails)) return;

      // Tailor resume
      const tailoredResume = await resumeTailor.tailorResume(
        this.getResumeTemplate(),
        jobDetails
      );

      // Submit application if score is high enough
      if (tailoredResume.score >= 85) {
        await this.submitApplication(job, tailoredResume);
      }
    } catch (error) {
      console.error('Error processing job:', error);
    }
  }

  private meetsCriteria(jobDetails: any): boolean {
    if (!this.config) return false;

    // Check salary range
    const salary = this.extractSalary(jobDetails);
    if (salary && (
      salary.min < this.config.salary.min ||
      salary.max > this.config.salary.max
    )) {
      return false;
    }

    // Check experience level
    if (!jobDetails.description.toLowerCase().includes(this.config.experienceLevel)) {
      return false;
    }

    // Check work type
    const matchesWorkType = this.config.workType.some(type =>
      jobDetails.description.toLowerCase().includes(type.toLowerCase())
    );
    if (!matchesWorkType) return false;

    // Check blacklisted companies
    if (this.config.blacklistedCompanies.some(company =>
      jobDetails.company.toLowerCase().includes(company.toLowerCase())
    )) {
      return false;
    }

    return true;
  }

  private extractSalary(jobDetails: any): { min: number; max: number } | null {
    const salaryMatch = jobDetails.description.match(
      /\$(\d{2,3})(,\d{3})?k?\s*-\s*\$(\d{2,3})(,\d{3})?k?/i
    );

    if (!salaryMatch) return null;

    return {
      min: parseInt(salaryMatch[1].replace(',', '')) * 1000,
      max: parseInt(salaryMatch[3].replace(',', '')) * 1000
    };
  }

  private async submitApplication(job: any, tailoredResume: any): Promise<void> {
    try {
      const success = await platformIntegration.submitApplication(
        job.platform,
        job.id,
        {
          resume: tailoredResume.content,
          coverLetter: await this.generateCoverLetter(job)
        }
      );

      if (success) {
        this.applications.push({
          jobId: job.id,
          platform: job.platform,
          timestamp: new Date().toISOString(),
          status: 'submitted'
        });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  }

  private async generateCoverLetter(job: any): Promise<string> {
    // Implement cover letter generation
    await delay(500);
    return `Dear Hiring Manager,\n\nI am excited to apply for the ${job.title} position...`;
  }

  private getResumeTemplate(): any {
    // Return resume template
    return {
      sections: [
        {
          title: 'Experience',
          content: 'Senior Frontend Developer...',
          keywords: ['React', 'TypeScript', 'Node.js']
        }
      ]
    };
  }

  private filterJobs(jobs: any[]): any[] {
    if (!this.config) return [];

    return jobs.filter(job => {
      // Remove duplicates
      const isDuplicate = this.applications.some(app => app.jobId === job.id);
      if (isDuplicate) return false;

      // Apply other filters
      return true;
    });
  }

  private updateStats(): void {
    const recentApplications = this.applications.filter(app => {
      const timestamp = new Date(app.timestamp);
      const today = new Date();
      return timestamp.toDateString() === today.toDateString();
    });

    const stats = {
      applicationsToday: recentApplications.length,
      successRate: this.calculateSuccessRate(),
      timeSaved: this.calculateTimeSaved()
    };

    // Emit stats update event
    this.emitStatsUpdate(stats);
  }

  private calculateSuccessRate(): number {
    const total = this.applications.length;
    if (total === 0) return 0;

    const successful = this.applications.filter(app => app.status === 'submitted').length;
    return (successful / total) * 100;
  }

  private calculateTimeSaved(): number {
    // Assume 30 minutes saved per application
    return this.applications.length * 30;
  }

  private emitStatsUpdate(stats: any): void {
    // Emit event for UI updates
    const event = new CustomEvent('automation-stats-update', { detail: stats });
    window.dispatchEvent(event);
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  public getApplications() {
    return this.applications;
  }

  public getStats() {
    return {
      totalApplications: this.applications.length,
      todayApplications: this.applications.filter(app => {
        const timestamp = new Date(app.timestamp);
        const today = new Date();
        return timestamp.toDateString() === today.toDateString();
      }).length,
      successRate: this.calculateSuccessRate(),
      timeSaved: this.calculateTimeSaved()
    };
  }
}

export const applicationAutomation = new ApplicationAutomation();