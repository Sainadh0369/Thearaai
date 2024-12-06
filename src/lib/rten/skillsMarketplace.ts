import { io } from 'socket.io-client';
import { Skill, TalentProfile, SkillMarketMetrics } from '../types/rten';

// Mock data for development
const MOCK_MARKET_INSIGHTS: SkillMarketMetrics[] = [
  {
    skill: 'React',
    demand: 1500,
    supplyCount: 1200,
    averageSalary: 120000,
    growthRate: 25,
    regionDistribution: [
      { region: 'North America', count: 500 },
      { region: 'Europe', count: 400 },
      { region: 'Asia', count: 300 }
    ]
  },
  {
    skill: 'TypeScript',
    demand: 1200,
    supplyCount: 800,
    averageSalary: 125000,
    growthRate: 35,
    regionDistribution: [
      { region: 'North America', count: 400 },
      { region: 'Europe', count: 250 },
      { region: 'Asia', count: 150 }
    ]
  },
  {
    skill: 'Node.js',
    demand: 1000,
    supplyCount: 900,
    averageSalary: 115000,
    growthRate: 20,
    regionDistribution: [
      { region: 'North America', count: 350 },
      { region: 'Europe', count: 300 },
      { region: 'Asia', count: 250 }
    ]
  }
];

class SkillsMarketplace {
  private marketMetrics: Map<string, SkillMarketMetrics> = new Map();

  constructor() {
    // Initialize with mock data
    MOCK_MARKET_INSIGHTS.forEach(metric => {
      this.marketMetrics.set(metric.skill, metric);
    });
  }

  public async getMarketInsights(): Promise<SkillMarketMetrics[]> {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return MOCK_MARKET_INSIGHTS;
    } catch (error) {
      console.error('Error fetching market insights:', error);
      throw error;
    }
  }

  public getSkillMetrics(skill: string): SkillMarketMetrics | undefined {
    return this.marketMetrics.get(skill);
  }

  public getAllSkillMetrics(): SkillMarketMetrics[] {
    return Array.from(this.marketMetrics.values());
  }
}

export const skillsMarketplace = new SkillsMarketplace();