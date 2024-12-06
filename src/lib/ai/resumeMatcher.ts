import { nlpProcessor } from './nlpProcessor';
import { contextEngine } from './contextEngine';
import { learningEngine } from './learningEngine';
import { delay } from '../utils';

interface MatchResult {
  score: number;
  strengths: string[];
  gaps: string[];
  recommendations: string[];
  insights: string[];
}

class ResumeMatcher {
  private readonly MATCH_THRESHOLD = 0.7;
  private readonly SKILL_WEIGHT = 0.4;
  private readonly EXPERIENCE_WEIGHT = 0.3;
  private readonly EDUCATION_WEIGHT = 0.2;
  private readonly ADDITIONAL_WEIGHT = 0.1;

  public async matchResumeToJob(
    resume: string,
    jobDescription: string
  ): Promise<MatchResult> {
    try {
      // Process resume and job description with NLP
      const [resumeAnalysis, jobAnalysis] = await Promise.all([
        nlpProcessor.processText(resume),
        nlpProcessor.processText(jobDescription)
      ]);

      // Extract context and requirements
      const context = await contextEngine.analyzeJobDescription(jobDescription);

      // Calculate match scores for different sections
      const skillScore = this.calculateSkillMatch(
        resumeAnalysis.keywords,
        context.skills
      );

      const experienceScore = this.calculateExperienceMatch(
        resumeAnalysis,
        context
      );

      const educationScore = this.calculateEducationMatch(
        resumeAnalysis,
        context
      );

      // Calculate overall score
      const overallScore = this.calculateOverallScore({
        skillScore,
        experienceScore,
        educationScore
      });

      // Identify strengths and gaps
      const { strengths, gaps } = this.identifyStrengthsAndGaps(
        resumeAnalysis,
        context
      );

      // Generate recommendations
      const recommendations = await this.generateRecommendations(
        resumeAnalysis,
        context,
        gaps
      );

      // Generate AI insights
      const insights = await this.generateInsights(
        resumeAnalysis,
        jobAnalysis,
        overallScore
      );

      // Learn from this matching
      await this.learnFromMatch({
        resumeAnalysis,
        jobAnalysis,
        score: overallScore,
        strengths,
        gaps
      });

      return {
        score: Math.round(overallScore * 100),
        strengths,
        gaps,
        recommendations,
        insights
      };
    } catch (error) {
      console.error('Error matching resume to job:', error);
      throw error;
    }
  }

  private calculateSkillMatch(
    resumeSkills: string[],
    requiredSkills: string[]
  ): number {
    const normalizedResumeSkills = resumeSkills.map(s => s.toLowerCase());
    const normalizedRequiredSkills = requiredSkills.map(s => s.toLowerCase());

    const matches = normalizedRequiredSkills.filter(skill =>
      normalizedResumeSkills.some(resumeSkill => resumeSkill.includes(skill))
    );

    return matches.length / normalizedRequiredSkills.length;
  }

  private calculateExperienceMatch(
    resumeAnalysis: any,
    context: any
  ): number {
    // Implement experience matching logic
    return 0.85; // Placeholder
  }

  private calculateEducationMatch(
    resumeAnalysis: any,
    context: any
  ): number {
    // Implement education matching logic
    return 0.9; // Placeholder
  }

  private calculateOverallScore(scores: {
    skillScore: number;
    experienceScore: number;
    educationScore: number;
  }): number {
    return (
      scores.skillScore * this.SKILL_WEIGHT +
      scores.experienceScore * this.EXPERIENCE_WEIGHT +
      scores.educationScore * this.EDUCATION_WEIGHT
    );
  }

  private identifyStrengthsAndGaps(
    resumeAnalysis: any,
    context: any
  ): { strengths: string[]; gaps: string[] } {
    const strengths: string[] = [];
    const gaps: string[] = [];

    // Analyze skills
    context.skills.forEach((skill: string) => {
      if (resumeAnalysis.keywords.some((k: string) => 
        k.toLowerCase().includes(skill.toLowerCase())
      )) {
        strengths.push(`Strong ${skill} background`);
      } else {
        gaps.push(`Missing ${skill} experience`);
      }
    });

    return { strengths, gaps };
  }

  private async generateRecommendations(
    resumeAnalysis: any,
    context: any,
    gaps: string[]
  ): Promise<string[]> {
    const recommendations: string[] = [];

    // Add skill-based recommendations
    gaps.forEach(gap => {
      recommendations.push(`Consider adding experience with ${gap.replace('Missing ', '')}`);
    });

    // Add format recommendations
    if (resumeAnalysis.keywords.length < 10) {
      recommendations.push('Add more relevant keywords to increase visibility');
    }

    return recommendations;
  }

  private async generateInsights(
    resumeAnalysis: any,
    jobAnalysis: any,
    score: number
  ): Promise<string[]> {
    const insights: string[] = [];

    if (score > 0.8) {
      insights.push('Strong overall match with the position requirements');
    } else if (score > 0.6) {
      insights.push('Good match with room for improvement in specific areas');
    } else {
      insights.push('Consider focusing on core requirements to improve match');
    }

    // Add market insights
    insights.push('Market demand for these skills is trending upward');

    return insights;
  }

  private async learnFromMatch(data: any): Promise<void> {
    try {
      await learningEngine.learn(
        {
          resumeKeywords: data.resumeAnalysis.keywords,
          jobKeywords: data.jobAnalysis.keywords,
          score: data.score
        },
        {
          strengths: data.strengths,
          gaps: data.gaps
        },
        data.score > this.MATCH_THRESHOLD
      );
    } catch (error) {
      console.error('Error learning from match:', error);
    }
  }
}

export const resumeMatcher = new ResumeMatcher();