import React from 'react';
import './About.css';
import { 
    FaJs, 
    FaPhp, 
    FaReact, 
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaShieldAlt 
} from 'react-icons/fa';
import { SiFastapi} from 'react-icons/si';
import ProfileImage from '../assets/portfoliopics.jpg'; 

// Updated skills to reflect Cybersecurity and AI Architecture focus
const SKILLS = [
    { name: "Python & Security", icon: FaPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Cybersecurity", icon: FaShieldAlt },
    { name: "React", icon: FaReact },
    { name: "HTML5", icon: FaHtml5 },        // FaHtml5
    { name: "CSS3", icon: FaCss3Alt },      // FaCss3Alt
    { name: "JavaScript", icon: FaJs },
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">The Architect.</h2>
            
            <div className="about-content">
                <div className="about-image-container">
                    <img 
                        src={ProfileImage} 
                        alt="Deen Da Bug" 
                        className="profile-image" 
                    />
                </div>

                <div className="about-text-content">
                    <h3>I'm Deen Da Bug.</h3>
                    
                    <p className="lead-paragraph">
                        A <strong>Cybersecurity Analyst and AI Architect</strong> dedicated to orchestrating secure, high-level technical ecosystems.
                    </p>
                    
                    <p>
                        Currently in my final year at <strong>Bayero University Kano</strong>, I am undergoing industrial training at the <strong>FCTA ICT Lab in Abuja</strong>. My work there focuses on infrastructure security and technical innovation, bridging the gap between theoretical defense and practical implementation.
                    </p>
                    
                    <p>
                        I identify as a <strong>Conceptual Idealist</strong>. I prioritize the <strong>Supervisor Pattern</strong> in AI orchestration—designing master systems that manage specialized agents to ensure efficiency and precision. As a co-founder of <strong>K²Nexus</strong>, I specialize in transforming complex requirements into scalable full-stack and AI-driven solutions.
                    </p>

                    <div className="skills-container">
                        <h3>Core Intelligence & Stack</h3>
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