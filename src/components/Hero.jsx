import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const wrapperRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const { left, top, width, height } = wrapperRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;
    setTransformStyle(`perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  const allSkills = ['C++', 'Java', 'Playwright', 'React', 'JavaScript', 'Node.js', 'SQL', 'Git', 'Linux', 'Python', 'Docker', 'AWS'];
  const [skillIndex, setSkillIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [orbitRPM, setOrbitRPM] = useState(15); // 15 RPM = 4s orbit

  useEffect(() => {
    if (orbitRPM == 0) return; // Pause completely if 0 RPM
    
    const orbitDurationMs = (60 / orbitRPM) * 1000;
    const intervalTime = Math.max(orbitDurationMs, 500); // Cap swap interval to prevent seizure/crash
    
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSkillIndex((prev) => (prev + 4) % allSkills.length);
        setFade(true);
      }, 200); // Faster fade for fast RPMs
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [orbitRPM, allSkills.length]);

  const currentSkills = [
    allSkills[skillIndex],
    allSkills[(skillIndex + 1) % allSkills.length],
    allSkills[(skillIndex + 2) % allSkills.length],
    allSkills[(skillIndex + 3) % allSkills.length],
  ];

  return (
    <section id="hero" className="section hero-section container page-transition">
      <div className="hero-content animate-fade-in">
        <div className="hero-badge">Available for full-time roles</div>
        
        <h1 className="hero-title">
          Hi, I'm{' '}
          <span className="name-wrapper">
            <span className="text-gradient">Ankit Vashisth</span>
            <span className="name-underline name-underline-medium"></span>
            <span className="name-underline name-underline-small"></span>
          </span>
        </h1>
        
        <h2 className="hero-subtitle">
          Software Engineer & QA Automation
        </h2>
        
        <p className="hero-description">
          Computer Science Engineering undergraduate with a strong foundation in programming, software testing, and web development. I build reliable software and robust automation frameworks.
        </p>
        
        <div className="hero-actions">
          <a href="mailto:ankitvashisth21@gmail.com" className="btn btn-primary">
            Let's Talk <ArrowRight size={18} />
          </a>
          <a href="https://drive.google.com/file/d/1JIdr-Q9N_BGGyu1aaH1yXf5RkfZd2Bop/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Resume <Download size={18} />
          </a>
        </div>
        
        <div className="hero-socials">
          <a href="https://linkedin.com/in/ankit-vashisth-5a570824b/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Ankitji579" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={24} />
          </a>
          <a href="mailto:ankitvashisth21@gmail.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="hero-visual animate-fade-in" style={{
        animationDelay: '0.2s', 
        '--orbit-duration': orbitRPM == 0 ? '99999s' : `${60 / orbitRPM}s`,
        '--orbit-play-state': orbitRPM == 0 ? 'paused' : 'running',
        flexDirection: 'column',
        gap: '4rem'
      }}>
        <div 
          className="profile-wrapper"
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ 
            transform: transformStyle,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
          }}
        >
          <img src="/profile-pic.jpg" alt="Ankit Vashisth" className="profile-img" />
          <div className="profile-decoration"></div>
          <div className="tech-bubble bubble-1" style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.2s ease' }}>{currentSkills[0]}</div>
          <div className="tech-bubble bubble-2" style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.2s ease' }}>{currentSkills[1]}</div>
          <div className="tech-bubble bubble-3" style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.2s ease' }}>{currentSkills[2]}</div>
          <div className="tech-bubble bubble-4" style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.2s ease' }}>{currentSkills[3]}</div>
        </div>
        
        {/* Breathtaking Speed Slider */}
        <div className="speed-control-container">
          <div className="speed-label">
            <span>Orbit Speed</span>
            <span className="speed-value">{orbitRPM} RPM</span>
          </div>
          <input 
            type="range" 
            min="0" max="100" step="1" 
            value={orbitRPM} 
            onChange={(e) => setOrbitRPM(e.target.value)} 
            className="speed-slider"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
