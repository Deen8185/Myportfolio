import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull

const ParticlesBackground = () => {
    // This function initializes the particle engine
    const particlesInit = useCallback(async (engine) => {
        // You can load the full package or just the slim version for performance
        await loadSlim(engine);
    }, []);

    // Configuration options for the particles
    const options = {
        fullScreen: { 
            enable: false, // We will manage size via CSS in its parent container
            zIndex: 0,     // Ensures particles are behind all content (1 is content)
        },
        interactivity: {
            events: {
                // 1. Mouse Movement Interaction
                onHover: {
                    enable: true,
                    mode: "repulse", // 'grab', 'bubble', 'repulse' are common modes
                },
                // 2. Mouse Click Interaction (optional)
                onClick: {
                    enable: true,
                    mode: "push", // 'push' or 'bubble'
                },
                resize: true,
            },
            modes: {
                // Configuration for the 'repulse' mode when hovering
                repulse: {
                    distance: 100, // How far particles are pushed away
                    duration: 0.4,
                },
                // Configuration for the 'push' mode when clicking
                push: {
                    quantity: 4, // How many particles are generated on click
                }
            },
        },
        particles: {
            number: {
                value: 80, // Number of particles
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#000000", // Black particles to match your minimalist theme
            },
            shape: {
                type: "circle", // "circle", "edge", "triangle", "polygon", "star", "image"
            },
            size: {
                value: 3, // Size of particles
                random: true,
                anim: {
                    enable: false,
                },
            },
            line_linked: {
                enable: true, // Links particles with lines
                distance: 150,
                color: "#000000",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1, // Speed of movement
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );
};

export default ParticlesBackground;