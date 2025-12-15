import React from 'react';
import './Contact.css'; // We'll update the CSS in the next step
// Import Lucide Icons for a professional look
import { Mail, Linkedin, Github } from 'lucide-react';
import { FaWhatsapp, FaDiscord} from 'react-icons/fa'; 

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch.</h2>
            
            <div className="contact-content">
                
                <p className="contact-pitch">
                    I'm currently available for freelance projects and new opportunities. The best way to reach me is directly through email or by connecting on LinkedIn.
                </p>

                {/* --- Direct Links Container --- */}
                <div className="contact-links-container">
                    
                    <a 
                        href="mailto:kamaludeenabdulkadir123@gmail.com" 
                        className="contact-link email-link"
                    >
                        <Mail size={24} /> 
                        <span>Mail me</span>
                    </a>

                    <a 
                        href="https://discord.com/users/915693036871221319" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link linkedin-link"
                    >
                        <FaDiscord size={24} /> 
                        <span>Connect on Discord</span>
                    </a>

                    <a 
                        // Replace YOUR_COUNTRY_CODE and YOUR_NUMBER with your actual WhatsApp number
                        href="https://wa.me/+2349151212725" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link whatsapp-link"
                    >
                        <FaWhatsapp size={24} /> 
                        <span>Chat on WhatsApp</span>
                    </a>


                    <a 
                        href="https://github.com/Deen8185" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link github-link"
                    >
                        <Github size={24} /> 
                        <span>See My Code on GitHub</span>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Contact;