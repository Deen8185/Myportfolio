import React from 'react';
import './Footer.css';
import { Github, Linkedin, Mail } from 'lucide-react'; 
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <p className="footer-text">
                    Designed and Developed by DEEN &copy; {new Date().getFullYear()}
                </p>
                <div className="footer-links">
                    <a href="mailto:kamaludeenabdulkadir123@gmail.com" title="Email"><Mail size={20} /></a>
                    <a href="https://discord.com/users/915693036871221319" target="_blank" rel="noopener noreferrer" title="discord"><FaDiscord size={20} /></a>
                    <a href="https://github.com/Deen8185" target="_blank" rel="noopener noreferrer" title="GitHub"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/kamaludeen-abdulkadir-b4b9962ba" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;