import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticleBG() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#111216" },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#915EFF" },
          links: { enable: true, color: "#915EFF", opacity: 0.2 },
          move: { enable: true, speed: 0.6 },
          opacity: { value: 0.15 },
          size: { value: 2 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { quantity: 2 }
          }
        },
        detectRetina: true
      }}
    />
  );
}