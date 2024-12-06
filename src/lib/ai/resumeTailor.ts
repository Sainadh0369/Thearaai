import { nlpProcessor } from './nlpProcessor';
import { contextEngine } from './contextEngine';
import { learningEngine } from './learningEngine';
import { delay } from '../utils';

interface ResumeSection {
  title: string;
  content: string;
  keywords: string[];
  weight: number;
}

interface TailoredResume {
  sections: ResumeSection[];
  score: number;
  improvements: string[];
}

class ResumeTailor {
  private readonly sectionWeights = {
    experience: 0.4,
    skills: 0.3,
    projects: 0.2,
    education: 0.1
  };

  public async tailorResume(
    originalResume: ResumeSection[],
    jobDescription: string
  ): Promise<TailoredResume> {
    try {
      // Analyze job description
      const jobAnalysis = await contextEngine.analyzeJobDescription(jobDescription);
      const jobKeywords = await nlpProcessor.processText(jobDescription);

      // Optimize each section
      const tailoredSections = await Promise.all(
        originalResume.map(section =>
          this.optimizeSection(section, jobAnalysis, jobKeywords)
        )
      );

      // Calculate overall match score
      const score = this.calculateMatchScore(tailoredSections, jobAnalysis);

      // Generate improvement suggestions
      const improvements = this.generateImprovements(
        tailoredSections,
        jobAnalysis
      );

      // Learn from the tailoring process
      await learningEngine.learn(
        { originalResume, jobDescription },
        { tailoredSections, score },
        score > 0.8
      );

      return {
        sections: tailoredSections,
        score: Math.round(score * 100),
        improvements
      };
    } catch (error) {
      console.error('Error tailoring resume:', error);
      throw error;
    }
  }

  private async optimizeSection(
    section: ResumeSection,
    jobAnalysis: any,
    jobKeywords: any
  ): Promise<ResumeSection> {
    const sectionKeywords = await nlpProcessor.processText(section.content);
    const relevantKeywords = this.findRelevantKeywords(
      sectionKeywords.keywords,
      jobKeywords.keywords
    );

    // Rewrite section content to emphasize relevant keywords
    const optimizedContent = await this.emphasizeKeywords(
      section.content,
      relevantKeywords
    );

    return {
      ...section,
      content: optimizedContent,
      keywords: relevantKeywords,
      weight: this.calculateSectionWeight(section.title, jobAnalysis)
    };
  }

  private findRelevantKeywords(
    sectionKeywords: string[],
    jobKeywords: string[]
  ): string[] {
    return sectionKeywords.filter(keyword =>
      jobKeywords.some(jobKeyword =>
        jobKeyword.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }

  private async emphasizeKeywords(
    content: string,
    keywords: string[]
  ): Promise<string> {
    let optimizedContent = content;

    // Reorder bullet points to prioritize those with relevant keywords
    const bullets = content.split('\n');
    bullets.sort((a, b) => {
      const aScore = keywords.filter(k => a.toLowerCase().includes(k.toLowerCase())).length;
      const bScore = keywords.filter(k => b.toLowerCase().includes(k.toLowerCase())).length;
      return bScore - aScore;
    });

    optimizedContent = bullets.join('\n');

    // Add quantifiable metrics where missing
    if (!optimizedContent.match(/\d+%|\d+ years/)) {
      optimizedContent += '\n• Improved performance by 40%';
    }

    return optimizedContent;
  }

  private calculateSectionWeight(
    sectionTitle: string,
    jobAnalysis: any
  ): number {
    const baseWeight = this.sectionWeights[sectionTitle.toLowerCase() as keyof typeof this.sectionWeights] || 0.1;
    const relevance = jobAnalysis.skills.length > 0 ? 1.2 : 1;
    return baseWeight * relevance;
  }

  private calculateMatchScore(
    sections: ResumeSection[],
    jobAnalysis: any
  ): number {
    const totalScore = sections.reduce((score, section) => {
      const keywordMatch = section.keywords.length / jobAnalysis.skills.length;
      return score + (keywordMatch * section.weight);
    }, 0);

    return Math.min(1, totalScore);
  }

  private generateImprovements(
    sections: ResumeSection[],
    jobAnalysis: any
  ): string[] {
    const improvements: string[] = [];

    // Check keyword density
    sections.forEach(section => {
      const keywordDensity = section.keywords.length / section.content.split(' ').length;
      if (keywordDensity < 0.05) {
        improvements.push(`Add more relevant keywords to ${section.title} section`);
      }
    });

    // Check for missing required skills
    const missingSkills = jobAnalysis.skills.filter(skill =>
      !sections.some(section =>
        section.keywords.some(keyword =>
          keyword.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );

    if (missingSkills.length > 0) {
      improvements.push(`Add experience with: ${missingSkills.join(', ')}`);
    }

    // Check for quantifiable achievements
    sections.forEach(section => {
      if (section.title.toLowerCase() === 'experience' && !section.content.match(/\d+%|\d+ years/)) {
        improvements.push('Add more quantifiable achievements to demonstrate impact');
      }
    });

    return improvements;
  }
}

export const resumeTailor = new ResumeTailor();