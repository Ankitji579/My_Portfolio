import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Nav() {
  const location = useLocation();
  return (
    <nav>
      <div className="container nav-content">
        <Link to="/" className="nav-logo">AV.</Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>About</Link>
          <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
          <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link>
        </div>
      </div>
    </nav>
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
    
    // Theme observer for sections
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            document.body.className = `theme-${id}`;
          }
        }
      });
    }, { threshold: 0.4 }); // Trigger when 40% visible

    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <BackgroundSwitcher />
        <div className="scroll-progress-bar"></div>
        <CustomCursor />
        
        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        
        <Contact />
      </div>
    </Router>
  );
}

export default App;
