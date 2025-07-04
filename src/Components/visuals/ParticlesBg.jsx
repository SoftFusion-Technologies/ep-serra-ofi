import Particles from 'react-tsparticles';

export default function ParticlesBg() {
  return (
    <Particles
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        particles: {
          color: { value: '#fc4b08' },
          move: { enable: true, speed: 0.4 },
          number: { value: 18, density: { enable: true, area: 800 } },
          opacity: { value: 0.15 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 4 } },
          links: { enable: false }
        }
      }}
    />
  );
}
