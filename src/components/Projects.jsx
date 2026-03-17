import React from 'react';
import ProjectCard from './ProjectCard'; // Import the card component
import './Projects.css';

const projectsData = [
  { 
        title: "Password sniffer", 
        description: "A responsive and active password sniffer script built using Python and Scapy library.",
        tech: ["Python", "Scapy"],
        liveLink: "#",
        repoLink: "#"
    },
    {
        title: "Airport Express Pay",
        subtitle: "Automated Toll Infrastructure(Still in development)",
        description: "A secure scan-to-pay API developed for automated toll gate systems. It generates encrypted QR codes for passenger clearance upon successful transaction verification.",
        tech: ["FastAPI", "Python", "QR Encryption", "FinTech"],
        liveLink: "#",
        repoLink: "#"
    },
    {
        title: "Payment Bridge",
        subtitle: "NQR Interoperability Middleware",
        description: "A FastAPI-based prototype designed to standardize merchant identity resolution. It utilizes the Flutterwave API to bridge banking systems and ensure seamless NQR interoperability.",
        tech: ["FastAPI", "Python", "Flutterwave API", "Middleware"],
        liveLink: "https://deen8185.github.io/QR-Playground/",
        repoLink: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">My Work.</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;