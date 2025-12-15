import React from 'react';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';


function Nav({ isOpen, setIsOpen,}) {

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="outternavbar_container">
      <div className="navbar-container " align="center">
        {/* Left side: Name/Logo */}
        <div className="navbar-logo">
            <a href="#home">DEEN</a>
        </div>

        {/* Right side: Links and Button */}
       <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={isOpen && toggleMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={isOpen && toggleMenu}>About</a>
          <a href="#projects" className="nav-link" onClick={isOpen && toggleMenu}>Projects</a>
          <a href="#contact" className="contact-button" onClick={isOpen && toggleMenu}>Contact</a>
       </nav>
      
        {/* Hamburger Menu Icon for Mobile */}
          <div className="menu-icon" onClick={toggleMenu}>
            {/* Show X icon when menu is open, otherwise show the bars icon */}
            {isOpen ? <FaTimes /> : <FaBars />}
         </div>
      </div>
    </header>
  );
};

export default Nav;