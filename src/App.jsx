import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { playWhoosh } from './utils/sounds';
import './App.css';
import Hero from './components/Hero';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import BackgroundSwitcher from './components/BackgroundSwitcher';
import NoiseOverlay from './components/NoiseOverlay';
import Magnetic from './components/Magnetic';

function RouteHandler() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Play whoosh sound on route change (except initial load)
    if (!isFirstRender.current) {
      playWhoosh();
    } else {
      isFirstRender.current = false;
    }

    // Set base theme based on route
    if (pathname === '/experience') document.body.className = 'theme-experience';
    else if (pathname === '/projects') document.body.className = 'theme-projects';
    else if (pathname === '/skills') document.body.className = 'theme-skills';
    else if (pathname === '/education') document.body.className = 'theme-education';
    else document.body.className = 'theme-hero';

    let observer;
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll('.section');
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              document.body.className = `theme-${id}`;
            }
          }
        });
      }, { threshold: 0.4 });
      sections.forEach(section => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [pathname]);
  return null;
}

function Nav() {
  const location = useLocation();
  return (
    <nav>
      <div className="container nav-content">
        <Magnetic>
          <Link to="/" className="nav-logo">AV.</Link>
        </Magnetic>
        <div className="nav-links">
          <Magnetic>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>About</Link>
          </Magnetic>
          <Magnetic>
            <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
          </Magnetic>
          <Magnetic>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          </Magnetic>
          <Magnetic>
            <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
          </Magnetic>
          <Magnetic>
            <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;
      
      // Progress bar
      document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent * 100}%`);
      
      // Parallax for ambient glows
      const glow1 = document.querySelector('.glow-1');
      const glow2 = document.querySelector('.glow-2');
      if (glow1) glow1.style.transform = `translateY(${scrollY * 0.4}px) scale(${1 + scrollPercent * 0.5})`;
      if (glow2) glow2.style.transform = `translateY(${scrollY * -0.3}px) scale(${1 + scrollPercent * 0.5})`;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <RouteHandler />
      <div className="app-container">
        <NoiseOverlay />
        <div className="grid-lines-overlay" aria-hidden="true">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
        <BackgroundSwitcher />
        <div className="scroll-progress-bar"></div>
        <CustomCursor />
        
        <Nav />

        <main>
          <AnimatedRoutes />
        </main>
        
        <Contact />
      </div>
    </Router>
  );
}

export default App;
