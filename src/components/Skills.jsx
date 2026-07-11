import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import PageTransition from './PageTransition';

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript", "React"]
  },
  {
    title: "Testing & QA",
    skills: ["Playwright", "Selenium WebDriver", "Postman", "UIPath"]
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "SQLite", "Git", "GitHub", "VS Code", "Vim", "Neovim", "Chrome DevTools"]
  },
  {
    title: "Core CS",
    skills: ["OOP", "DSA", "DBMS", "Software Testing", "Operating Systems", "Computer Networks"]
  }
];

const Skills = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const fadeStyle = {
    opacity: isHeaderHovered ? 0.06 : 1,
    filter: isHeaderHovered ? 'blur(4px)' : 'none',
    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
  };

  return (
    <PageTransition className="section container page-transition" id="skills">
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
          Technical <span className="text-gradient">Skills</span>
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
          ✦ Automated Testing &bull; Full-Stack Tech Stack
        </motion.div>
      </div>
      
      <div className="skills-grid" style={fadeStyle}>
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category glass-panel animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map(skill => (
                <span key={skill} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Skills;
