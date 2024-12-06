import React, { useState } from 'react';
import { SimulationList } from './SimulationList';
import { ActiveSimulation } from './ActiveSimulation';
import type { JobSimulation } from '@/lib/types/rten';

export const JobSimulator = () => {
  const [activeSimulation, setActiveSimulation] = useState<JobSimulation | null>(null);

  return (
    <div className="space-y-8">
      {!activeSimulation ? (
        <SimulationList onSelect={setActiveSimulation} />
      ) : (
        <ActiveSimulation 
          simulation={activeSimulation}
          onExit={() => setActiveSimulation(null)}
        />
      )}
    </div>
  );
};