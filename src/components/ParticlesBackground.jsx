import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
  const [particleColor, setParticleColor] = useState("#8b5cf6");

  // Update particle color based on the current body theme class
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const className = document.body.className;
      if (className.includes("theme-hero")) setParticleColor("#8b5cf6");
      else if (className.includes("theme-experience")) setParticleColor("#10b981");
      else if (className.includes("theme-projects")) setParticleColor("#ef4444");
      else if (className.includes("theme-skills")) setParticleColor("#ec4899");
      else if (className.includes("theme-education")) setParticleColor("#0ea5e9");
      else if (className.includes("theme-contact")) setParticleColor("#f59e0b");
      else setParticleColor("#8b5cf6");
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", particleColor, particleColor], // Mix of white and theme color stars
          },
          links: {
            enable: false, // No links in space!
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: { min: 0.1, max: 1 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200, // More stars
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 2.5 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
