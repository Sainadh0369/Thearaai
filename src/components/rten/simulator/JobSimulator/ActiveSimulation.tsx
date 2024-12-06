import React, { useState } from 'react';
import { SimulationProgress } from './SimulationProgress';
import { SimulationTask } from './SimulationTask';
import { AIAssistant } from './AIAssistant';
import type { JobSimulation } from '@/lib/types/rten';

interface ActiveSimulationProps {
  simulation: JobSimulation;
  onExit: () => void;
}

export const ActiveSimulation: React.FC<ActiveSimulationProps> = ({
  simulation,
  onExit
}) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(simulation.duration * 60);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  return (
    <div className="space-y-6">
      <SimulationProgress 
        simulation={simulation}
        timeRemaining={timeRemaining}
        currentTaskIndex={currentTaskIndex}
        onExit={onExit}
      />
      
      <SimulationTask 
        task={simulation.tasks[currentTaskIndex]}
        onComplete={() => setCurrentTaskIndex(prev => prev + 1)}
      />
      
      <AIAssistant />
    </div>
  );
};