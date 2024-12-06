export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'expert';
  endorsements: number;
  verified: boolean;
}

export interface TalentProfile {
  id: string;
  userId: string;
  skills: Skill[];
  availability: {
    status: 'available' | 'open' | 'unavailable';
    startDate?: string;
    notice?: string;
  };
  preferences: {
    remoteOnly: boolean;
    locations: string[];
    industries: string[];
    roles: string[];
  };
}

export interface SkillMarketMetrics {
  skill: string;
  demand: number;
  supplyCount: number;
  averageSalary: number;
  growthRate: number;
  regionDistribution: {
    region: string;
    count: number;
  }[];
}

export interface JobSimulation {
  id: string;
  title: string;
  description: string;
  skills: string[];
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tasks: SimulationTask[];
}

export interface SimulationTask {
  id: string;
  title: string;
  description: string;
  type: 'coding' | 'design' | 'analysis';
  criteria: string[];
  timeLimit?: number;
}