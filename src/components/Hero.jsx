import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Magnetic from './Magnetic';
import MaskText from './MaskText';
import './Hero.css';

const Hero = () => {
  const wrapperRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [isHovered, setIsHovered] = useState(false);
  const [isNameHovered, setIsNameHovered] = useState(false);

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

  const fadeStyle = {
    opacity: isNameHovered ? 0.06 : 1,
    filter: isNameHovered ? 'blur(4px)' : 'none',
    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
  };

  return (
    <section id="hero" className="section hero-section container page-transition">
      <div className="hero-content">
        <div className="hero-badge-wrapper" style={{ overflow: 'hidden', ...fadeStyle }}>
          <motion.div 
            className="hero-badge"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Available for full-time roles
          </motion.div>
        </div>
        
        <h1 className="hero-title">
          <span style={{ 
            overflow: 'hidden', 
            display: 'inline-block', 
            verticalAlign: 'bottom',
            ...fadeStyle
          }}>
            <motion.span
              display="inline-block"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Hi, I'm&nbsp;
            </motion.span>
          </span>
          <span 
            className="name-wrapper"
            onMouseEnter={() => setIsNameHovered(true)}
            onMouseLeave={() => setIsNameHovered(false)}
            style={{ 
              display: 'inline-block',
              transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
              transform: isNameHovered ? 'scale(1.08)' : 'scale(1)',
              transformOrigin: 'left center',
              cursor: 'pointer'
            }}
          >
            <span style={{ overflow: 'hidden', display: 'inline-block', verticalAlign: 'bottom' }}>
              <motion.span
                className="text-gradient"
                style={{ display: 'inline-block' }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.15 }}
              >
                Ankit Vashisth
              </motion.span>
            </span>
            <span className="name-underline name-underline-medium"></span>
            <span className="name-underline name-underline-small"></span>

            {/* Premium details slide-in underneath the underlines */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isNameHovered ? 1 : 0, y: isNameHovered ? 0 : 10 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              style={{
                position: 'absolute',
                bottom: '-34px',
                left: 0,
                whiteSpace: 'nowrap',
                color: 'var(--accent-secondary)',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              ✦ QA Automation Specialist &bull; CS undergraduate
            </motion.span>
          </span>
        </h1>
        
        <div style={fadeStyle}>
          <MaskText 
            phrase="Software Engineer & QA Automation" 
            className="hero-subtitle" 
            delay={0.3} 
          />
        </div>
        
        <motion.p 
          className="hero-description"
          style={fadeStyle}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Computer Science Engineering undergraduate with a strong foundation in programming, software testing, and web development. I build reliable software and robust automation frameworks.
        </motion.p>
        
        <div className="hero-actions" style={fadeStyle}>
          <Magnetic>
            <a href="mailto:ankitvashisth21@gmail.com" className="btn btn-primary">
              Let's Talk <ArrowRight size={18} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://drive.google.com/file/d/1JIdr-Q9N_BGGyu1aaH1yXf5RkfZd2Bop/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Resume <Download size={18} />
            </a>
          </Magnetic>
        </div>
        
        <div className="hero-socials" style={fadeStyle}>
          <Magnetic>
            <a href="https://linkedin.com/in/ankit-vashisth-5a570824b/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://github.com/Ankitji579" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="mailto:ankitvashisth21@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </Magnetic>
        </div>
      </div>
      
      <div className="hero-visual" style={{
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
          onMouseEnter={() => {
            setIsHovered(true);
            setIsNameHovered(true);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setIsNameHovered(false);
          }}
          style={{ 
            transform: transformStyle,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            filter: isNameHovered ? 'drop-shadow(0 0 35px var(--accent-primary-glow))' : 'none',
            cursor: 'pointer'
          }}
        >
          <img 
            src="/profile-pic.jpg" 
            alt="Ankit Vashisth" 
            className="profile-img" 
            style={{
              borderColor: isNameHovered ? 'var(--accent-secondary)' : 'var(--accent-primary)',
              transform: isNameHovered ? 'translateZ(40px) scale(1.05)' : 'translateZ(20px) scale(1)',
              boxShadow: isNameHovered ? '0 20px 40px rgba(6, 182, 212, 0.4)' : '0 0 30px rgba(139, 92, 246, 0.3)',
              transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          />
          <div 
            className="profile-decoration" 
            style={{
              borderColor: isNameHovered ? 'var(--accent-secondary)' : 'var(--accent-primary)',
              opacity: isNameHovered ? 0.8 : 0.3,
              transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          />
          <div className="tech-bubble bubble-1" style={{ opacity: fade && !isNameHovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>{currentSkills[0]}</div>
          <div className="tech-bubble bubble-2" style={{ opacity: fade && !isNameHovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>{currentSkills[1]}</div>
          <div className="tech-bubble bubble-3" style={{ opacity: fade && !isNameHovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>{currentSkills[2]}</div>
          <div className="tech-bubble bubble-4" style={{ opacity: fade && !isNameHovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>{currentSkills[3]}</div>
        </div>
        
        {/* Breathtaking Speed Slider */}
        <div className="speed-control-container" style={{
          opacity: isNameHovered ? 0.06 : 1,
          filter: isNameHovered ? 'blur(4px)' : 'none',
          transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
          pointerEvents: isNameHovered ? 'none' : 'auto'
        }}>
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
