import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: 'PlayCart: E-Commerce Test Automation',
    description: 'Developed a scalable Playwright automation framework for an OpenCart e-commerce application using the Page Object Model (POM). Automated end-to-end workflows including login, product search, cart, checkout, and order validation with cross-browser testing, reusable fixtures, and Allure reporting.',
    tags: ['Playwright', 'TypeScript', 'POM', 'Allure'],
    github: 'https://github.com/Ankitji579',
    link: '#'
  },
  {
    title: 'Smart Inventory Management System',
    description: 'Developed a menu-driven inventory management system with stock tracking, item search, and CRUD operations. Integrated SQLite for persistent data storage and real-time inventory updates while applying Object-Oriented Programming principles.',
    tags: ['C++', 'SQLite', 'OOP'],
    github: 'https://github.com/Ankitji579',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="section container page-transition">
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card glass-panel animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="project-footer">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
