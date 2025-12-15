import './App.css'
import Nav from './components/Navbar.jsx'
import HeroSection from './components/Hero-section.jsx'
import React, { useState } from 'react';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import ParticlesBackground from './components/ParticlesBackground';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="particles-container">
          <ParticlesBackground />
      </div>

      < Nav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>

      <main className={`main-content ${isMenuOpen ? 'blur-active' : ''} `}>
        < HeroSection/>
        

        < Projects/>
        < About/>
        < Contact/>
        < Footer/>
      </main>
    </>
  )
}

export default App
