import "../index.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export default function Particulas() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <div id="particles-js" className="z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },

            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 1 },
            },
          },
        }}
      />
    </div>
  );
}
