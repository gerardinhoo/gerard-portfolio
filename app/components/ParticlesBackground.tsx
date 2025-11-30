'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          color: { value: '#ffffff' },
          opacity: { value: 0.4 },
          move: { enable: true, speed: 0.7 },
          links: { enable: true, color: '#ffffff', opacity: 0.05 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 100 } },
        },
      }}
      className='absolute inset-0 z-0 opacity-60 pointer-events-none'
    />
  );
}
