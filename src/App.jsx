import './App.css'
import Nav from './components/Navbar.jsx'
import HeroSection from './components/Hero-section.jsx'
import React, { useState, useEffect } from 'react';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import ParticlesBackground from './components/ParticlesBackground';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';



const PARTICLE_RESET_INTERVAL = 20000;

function App() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [particleKey, setParticleKey] = useState(0); 

  // useEffect hook to manage the timer
  useEffect(() => {
    // Function to update the key, which forces remount
    const resetParticles = () => {
      setParticleKey(prevKey => prevKey + 1);
      console.log('Particles background reset triggered.');
    };

    // Set up the interval timer
    const intervalId = setInterval(resetParticles, PARTICLE_RESET_INTERVAL);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <div className="particles-container">
          <ParticlesBackground key={particleKey} />
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
