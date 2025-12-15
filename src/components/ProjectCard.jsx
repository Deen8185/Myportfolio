import React from 'react';
// Import icons for links (e.g., Lucide's Link and GitHub icons)
import { Link, Github } from 'lucide-react'; 

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-stack">
                {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                ))}
            </div>

            <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                    View Live {<Link />}
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
                    GitHub {<Github />}
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;