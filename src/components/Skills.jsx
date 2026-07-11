import React from 'react';
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
  return (
    <PageTransition className="section container page-transition" id="skills">
      <h2 className="section-title">
        Technical <span className="text-gradient">Skills</span>
      </h2>
      
      <div className="skills-grid">
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
