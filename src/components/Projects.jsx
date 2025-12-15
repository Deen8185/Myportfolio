import React from 'react';
import ProjectCard from './ProjectCard'; // Import the card component
import './Projects.css';

const projectsData = [
    { 
        title: "E-Commerce Rebuild", 
        description: "Modern full-stack application built with React, Node.js, and MongoDB. Features secure payment processing and user authentication.",
        tech: ["React", "Express", "MongoDB", "Redux"],
        liveLink: "#",
        repoLink: "#"
    },
    // Add 2-3 more real projects here...
    { 
        title: "Portfolio V2", 
        description: "A responsive, minimalist web portfolio built using React and modern CSS techniques.",
        tech: ["React", "CSS Grid", "Lucide Icons"],
        liveLink: "#",
        repoLink: "#"
    },

    { 
        title: "Password sniffer", 
        description: "A responsive and active password sniffer script built using Python and Scapy library.",
        tech: ["Python", "Scapy"],
        liveLink: "#",
        repoLink: "#"
    },
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