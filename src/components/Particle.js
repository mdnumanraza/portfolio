import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 5,
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.05,
            },
          },
        },


        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode:"push",
            },
          },
          modes: {
          push: {
              delay: 0,
              quantity: 5,
              pauseOnStop: false
             }
            }
          },
      

      

        retina_detect: true,
      }}
    />
  );
}

export default Particle;
