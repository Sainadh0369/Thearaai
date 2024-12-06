import { JobSimulation, SimulationTask } from '../types/rten';

class JobSimulationEngine {
  private activeSimulations: Map<string, JobSimulation> = new Map();

  public async createSimulation(jobId: string, requirements: any): Promise<JobSimulation> {
    try {
      const simulation: JobSimulation = {
        id: generateSimulationId(),
        title: requirements.title,
        description: requirements.description,
        skills: requirements.skills,
        duration: calculateDuration(requirements),
        difficulty: determineDifficulty(requirements),
        tasks: await this.generateTasks(requirements)
      };

      this.activeSimulations.set(simulation.id, simulation);
      return simulation;
    } catch (error) {
      console.error('Error creating simulation:', error);
      throw error;
    }
  }

  private async generateTasks(requirements: any): Promise<SimulationTask[]> {
    // Generate appropriate tasks based on job requirements
    const tasks: SimulationTask[] = [];
    
    if (requirements.technical) {
      tasks.push({
        id: generateTaskId(),
        title: 'Technical Assessment',
        description: 'Solve a real-world technical problem',
        type: 'coding',
        criteria: requirements.technical.criteria,
        timeLimit: 60 // minutes
      });
    }

    if (requirements.design) {
      tasks.push({
        id: generateTaskId(),
        title: 'Design Challenge',
        description: 'Create a solution for a design problem',
        type: 'design',
        criteria: requirements.design.criteria,
        timeLimit: 90
      });
    }

    return tasks;
  }

  public async startSimulation(simulationId: string, candidateId: string) {
    const simulation = this.activeSimulations.get(simulationId);
    if (!simulation) {
      throw new Error('Simulation not found');
    }

    // Initialize simulation session
    return {
      sessionId: generateSessionId(),
      simulation,
      startTime: new Date().toISOString()
    };
  }

  public async evaluateSubmission(
    sessionId: string,
    taskId: string,
    submission: any
  ) {
    try {
      // Evaluate submission using AI
      const evaluation = await this.performAIEvaluation(submission);
      
      return {
        score: evaluation.score,
        feedback: evaluation.feedback,
        strengths: evaluation.strengths,
        improvements: evaluation.improvements
      };
    } catch (error) {
      console.error('Error evaluating submission:', error);
      throw error;
    }
  }

  private async performAIEvaluation(submission: any) {
    // Implement AI evaluation logic
    return {
      score: 85,
      feedback: 'Strong technical implementation with good attention to detail',
      strengths: ['Problem-solving', 'Code quality', 'Performance'],
      improvements: ['Add more documentation', 'Consider edge cases']
    };
  }
}

// Helper functions
function generateSimulationId(): string {
  return `sim_${Math.random().toString(36).substr(2, 9)}`;
}

function generateTaskId(): string {
  return `task_${Math.random().toString(36).substr(2, 9)}`;
}

function generateSessionId(): string {
  return `session_${Math.random().toString(36).substr(2, 9)}`;
}

function calculateDuration(requirements: any): number {
  // Calculate total duration based on tasks and complexity
  return requirements.tasks.reduce((acc: number, task: any) => acc + task.estimatedDuration, 0);
}

function determineDifficulty(requirements: any): 'beginner' | 'intermediate' | 'advanced' {
  const complexityScore = requirements.skills.reduce((acc: number, skill: any) => 
    acc + (skill.level === 'expert' ? 3 : skill.level === 'intermediate' ? 2 : 1), 0
  );
  
  if (complexityScore > 10) return 'advanced';
  if (complexityScore > 5) return 'intermediate';
  return 'beginner';
}

export const jobSimulationEngine = new JobSimulationEngine();