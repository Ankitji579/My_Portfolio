import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import PageTransition from './PageTransition';

const Experience = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const fadeStyle = {
    opacity: isHeaderHovered ? 0.06 : 1,
    filter: isHeaderHovered ? 'blur(4px)' : 'none',
    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
  };

  return (
    <PageTransition className="section container page-transition" id="experience">
      <div 
        className="section-title-wrapper" 
        style={{ position: 'relative', display: 'block', margin: '0 auto 3rem auto', textAlign: 'center', cursor: 'pointer', width: 'fit-content' }}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <h2 className="section-title" style={{ 
          marginBottom: 0, 
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)', 
          transform: isHeaderHovered ? 'scale(1.08)' : 'scale(1)' 
        }}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 10, x: '-50%' }}
          animate={{ 
            opacity: isHeaderHovered ? 1 : 0, 
            y: isHeaderHovered ? 0 : 10,
            x: '-50%'
          }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          style={{
            position: 'absolute',
            bottom: '-36px',
            left: '50%',
            whiteSpace: 'nowrap',
            color: 'var(--accent-secondary)',
            fontSize: '0.85rem',
            fontWeight: '600',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            pointerEvents: 'none'
          }}
        >
          ✦ Playwright QA Automation &bull; C++ & Java Systems
        </motion.div>
      </div>
      
      <div className="timeline" style={fadeStyle}>
        <div className="timeline-item glass-panel animate-fade-in">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div>
                <h3 className="role">Software Testing Intern</h3>
                <h4 className="company">TestingXperts</h4>
              </div>
              <span className="duration">Jan 2026 – Jun 2026</span>
            </div>
            
            <ul className="timeline-duties">
              <li>Designed and executed manual and automated test cases for web applications to validate functionality and identify defects.</li>
              <li>Worked with Selenium, Playwright, and Postman to automate UI and API testing workflows.</li>
              <li>Reported, tracked, and collaborated with developers to resolve software defects, improving overall product quality.</li>
              <li>Gained hands-on experience with software testing methodologies, regression testing, smoke testing, and test documentation.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;
