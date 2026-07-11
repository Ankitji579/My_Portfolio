import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Education.css';
import PageTransition from './PageTransition';

const Education = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const fadeStyle = {
    opacity: isHeaderHovered ? 0.06 : 1,
    filter: isHeaderHovered ? 'blur(4px)' : 'none',
    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
  };

  return (
    <PageTransition className="section container page-transition" id="education">
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
          <span className="text-gradient">Education</span> & Activities
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
          ✦ Computer Science Major &bull; Academic Excellence
        </motion.div>
      </div>
      
      <div className="education-layout" style={fadeStyle}>
        <div className="education-list">
          <div className="edu-card glass-panel animate-fade-in">
            <h3 className="degree">Bachelor of Engineering in Computer Science</h3>
            <h4 className="institution">Chandigarh University</h4>
            <div className="edu-meta">
              <span className="year">2022 - 2026</span>
              <span className="score">CGPA: 7.7</span>
            </div>
          </div>
          
          <div className="edu-card glass-panel animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h3 className="degree">Intermediate (CBSE)</h3>
            <h4 className="institution">Adarsh Vidya Mandir, Bhiwani</h4>
            <div className="edu-meta">
              <span className="year">2021</span>
              <span className="score">91%</span>
            </div>
          </div>
          
          <div className="edu-card glass-panel animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="degree">Matriculation (CBSE)</h3>
            <h4 className="institution">Gr. Sr. Sec School, Bhiwani</h4>
            <div className="edu-meta">
              <span className="year">2019</span>
              <span className="score">95%</span>
            </div>
          </div>
        </div>
        
        <div className="activities-panel glass-panel animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h3 className="activities-title">Extra-Curricular Activities</h3>
          <ul className="activities-list">
            <li>Solved 500+ programming problems across Codeforces, LeetCode, CodeChef, and GeeksforGeeks.</li>
            <li>Participated in online coding contests to strengthen problem-solving and algorithmic thinking.</li>
            <li>Continuously build personal projects in software development and QA automation using Playwright, Selenium, and modern web technologies.</li>
          </ul>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;
