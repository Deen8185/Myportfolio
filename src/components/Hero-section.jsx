import React from 'react';
import './HeroSection.css'; 
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; 
import { ChevronsDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        
        <p className="greeting">Hey, I'm</p>
        
        {/* The largest and most prominent text */}
        <h1 className="name-headline">DEEN</h1>
        
        {/* The professional title, slightly smaller */}
        <h2 className="title-subheadline">Web Developer & Cyber Security expert</h2>

        {/* Social Icons and "Find out more" text block */}
        <div className="info-block">
          
          {/* Placeholder for icons */}
          <div className="social-icons">
            { <><FaGithub /><FaLinkedin />
                <FaDiscord /><FaWhatsapp />
            </> }
          </div>

          <p className="cta-text">
            Find out more about us.
          </p>
        </div>
      </div>
      
      {/* The decorative shape on the right (will be handled with CSS) */}
      <div className="decorative-shape"></div>

      {/* Scroll indicator (optional) */}
      <div className="scroll-indicator">
          <ChevronsDown size={30} />
      </div>
    </section>
  );
};

export default HeroSection;