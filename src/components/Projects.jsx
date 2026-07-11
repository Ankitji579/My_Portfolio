import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import PageTransition from './PageTransition';
import './Projects.css';

const projectsData = [
  {
    title: 'PlayCart: E-Commerce Test Automation',
    description: 'Developed a scalable Playwright automation framework for an OpenCart e-commerce application using the Page Object Model (POM). Automated end-to-end workflows including login, product search, cart, checkout, and order validation with cross-browser testing, reusable fixtures, and Allure reporting.',
    tags: ['Playwright', 'TypeScript', 'POM', 'Allure'],
    github: 'https://github.com/Ankitji579',
    link: '#',
    videoPlaceholderUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' // Using Big Buck Bunny as placeholder
  },
  {
    title: 'Smart Inventory Management System',
    description: 'Developed a menu-driven inventory management system with stock tracking, item search, and CRUD operations. Integrated SQLite for persistent data storage and real-time inventory updates while applying Object-Oriented Programming principles.',
    tags: ['C++', 'SQLite', 'OOP'],
    github: 'https://github.com/Ankitji579',
    link: '#',
    videoPlaceholderUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-10 to 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 }); // Reset on leave
  };

  return (
    <div 
      className="project-card-wrapper"
      style={{ perspective: '1000px' }}
    >
      <div 
        ref={cardRef}
        className="project-card glass-panel" 
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovering ? 'none' : 'transform 0.5s ease'
        }}
      >
        <div className="project-video-container">
          {/* Placeholder for real video */}
          <video 
            className="project-video"
            src={project.videoPlaceholderUrl} 
            muted 
            loop 
            playsInline
            autoPlay={isHovering} // Only play when hovering
            style={{ opacity: isHovering ? 0.8 : 0.1 }}
          />
          <div className="project-video-overlay"></div>
        </div>

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
    </div>
  );
};

const Projects = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const fadeStyle = {
    opacity: isHeaderHovered ? 0.06 : 1,
    filter: isHeaderHovered ? 'blur(4px)' : 'none',
    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
  };

  return (
    <PageTransition className="section container page-transition" id="projects">
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
          Featured <span className="text-gradient">Projects</span>
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
          ✦ E-Commerce Testing &bull; Smart Inventory Dev
        </motion.div>
      </div>
      
      <div className="projects-grid" style={fadeStyle}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </PageTransition>
  );
};

export default Projects;
