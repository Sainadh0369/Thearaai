import { autonomousEngine } from './autonomousEngine';
import type { Skill } from '../types/rten';

class SkillsAnalyzer {
  private readonly contextSize = 10;
  private skillCache: Map<string, number> = new Map();

  public async analyzeSkillSet(skills: Skill[]): Promise<{
    score: number;
    insights: string[];
    recommendations: string[];
  }> {
    try {
      // Convert skills to numerical vectors for analysis
      const skillVectors = skills.map(skill => this.vectorizeSkill(skill));
      
      // Get market context
      const marketContext = await this.getMarketContext(skills);
      
      // Generate insights using autonomous engine
      const insights = await autonomousEngine.generateInsights({
        skills: skillVectors,
        market: marketContext
      });

      // Calculate overall score
      const score = this.calculateSkillScore(skills, marketContext);

      // Generate recommendations
      const recommendations = this.generateRecommendations(skills, marketContext);

      return {
        score,
        insights,
        recommendations
      };
    } catch (error) {
      console.error('Error analyzing skills:', error);
      throw error;
    }
  }

  private vectorizeSkill(skill: Skill): number[] {
    const vector = [];
    
    // Convert skill level to number
    const levelMap = { beginner: 0.33, intermediate: 0.66, expert: 1 };
    vector.push(levelMap[skill.level]);
    
    // Add endorsement weight
    vector.push(Math.min(skill.endorsements / 100, 1));
    
    // Add verification status
    vector.push(skill.verified ? 1 : 0);
    
    return vector;
  }

  private async getMarketContext(skills: Skill[]): Promise<any> {
    const context = {
      demandScores: new Map<string, number>(),
      trends: new Map<string, number>(),
      relatedSkills: new Map<string, string[]>()
    };

    for (const skill of skills) {
      if (!this.skillCache.has(skill.name)) {
        // Simulate market analysis
        const demandScore = Math.random() * 0.5 + 0.5; // 0.5 to 1.0
        this.skillCache.set(skill.name, demandScore);
      }
      
      context.demandScores.set(skill.name, this.skillCache.get(skill.name)!);
      context.trends.set(skill.name, Math.random() * 0.4 - 0.2); // -0.2 to 0.2
      context.relatedSkills.set(skill.name, this.getRelatedSkills(skill.name));
    }

    return context;
  }

  private calculateSkillScore(skills: Skill[], marketContext: any): number {
    let totalScore = 0;
    let weightSum = 0;

    skills.forEach(skill => {
      const demandWeight = marketContext.demandScores.get(skill.name) || 0.5;
      const levelWeight = this.getLevelWeight(skill.level);
      const verificationBonus = skill.verified ? 1.2 : 1.0;
      
      const skillScore = (demandWeight * levelWeight * verificationBonus);
      const weight = demandWeight;
      
      totalScore += skillScore * weight;
      weightSum += weight;
    });

    return Math.round((totalScore / weightSum) * 100);
  }

  private getLevelWeight(level: string): number {
    switch (level) {
      case 'expert': return 1.0;
      case 'intermediate': return 0.7;
      case 'beginner': return 0.4;
      default: return 0.5;
    }
  }

  private getRelatedSkills(skillName: string): string[] {
    const skillMap: { [key: string]: string[] } = {
      'react': ['typescript', 'javascript', 'redux'],
      'typescript': ['javascript', 'angular', 'react'],
      'python': ['django', 'flask', 'machine learning'],
      'java': ['spring', 'hibernate', 'microservices']
    };

    return skillMap[skillName.toLowerCase()] || [];
  }

  private generateRecommendations(skills: Skill[], marketContext: any): string[] {
    const recommendations: string[] = [];
    
    // Identify skill gaps
    const currentSkills = new Set(skills.map(s => s.name.toLowerCase()));
    const allRelatedSkills = new Set<string>();
    
    skills.forEach(skill => {
      const related = this.getRelatedSkills(skill.name);
      related.forEach(r => allRelatedSkills.add(r.toLowerCase()));
    });

    // Recommend missing related skills
    allRelatedSkills.forEach(skill => {
      if (!currentSkills.has(skill)) {
        recommendations.push(`Consider adding ${skill} to complement your existing skills`);
      }
    });

    // Recommend skill level improvements
    skills
      .filter(skill => skill.level !== 'expert')
      .forEach(skill => {
        const demand = marketContext.demandScores.get(skill.name) || 0;
        if (demand > 0.8) {
          recommendations.push(`Focus on advancing your ${skill.name} skills to expert level`);
        }
      });

    // Recommend verification
    skills
      .filter(skill => !skill.verified)
      .forEach(skill => {
        recommendations.push(`Get your ${skill.name} skills verified to increase credibility`);
      });

    return recommendations;
  }
}

export const skillsAnalyzer = new SkillsAnalyzer();