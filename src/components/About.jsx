import React from 'react';
import './About.css';
import { 
    FaJs, 
    FaPhp, 
    FaHtml5, 
    FaCss3Alt, 
    FaReact, 
    FaFigma, 
    FaGitAlt 
} from 'react-icons/fa';
import ProfileImage from '../assets/react.svg'; 

// Data array for skills with corresponding icons
const SKILLS = [
    { name: "JavaScript", icon: FaJs },      // FaJs
    { name: "PHP", icon: FaPhp },            // FaPhp
    { name: "HTML5", icon: FaHtml5 },        // FaHtml5
    { name: "CSS3", icon: FaCss3Alt },      // FaCss3Alt (common name in Fa)
    { name: "React", icon: FaReact },        // FaReact
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About us.</h2>
            
            <div className="about-content">
                {/* Left Column: Image/Avatar */}
                <div className="about-image-container">
                    <img 
                        src={ProfileImage} 
                        alt="Deen Profile" 
                        className="profile-image" 
                    />
                </div>

                {/* Right Column: Text Content */}
                <div className="about-text-content">
                    <h3>Hello! I'm Deen.</h3>
                    
                    <p className="lead-paragraph">
                        A <strong>Web Developer and Cyber security analyst</strong> specializing in building elegant, performant, and user-centric web applications.
                    </p>
                    
                    <p>
                        With years of experience focused primarily on web dev & cyber security, I excel at turning complex business requirements into clean, maintainable code.
                    </p>
                    
                    <p>
                        When I'm not coding, you can find me exploring new UI/UX trends, contributing to open-source projects and going bug hunting.
                    </p>

                    {/* Skills Section */}
                    <div className="skills-container">
                        <h3>My Core Stack</h3>
                        <div className="skills-grid">
                            {SKILLS.map((skill) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div key={skill.name} className="skill-item">
                                        <IconComponent size={30} className="skill-icon" /> 
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;