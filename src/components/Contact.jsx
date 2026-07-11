import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="section contact-section container page-transition">
      <div className="contact-card glass-panel animate-fade-in">
        <h2 className="contact-title">Let's Build Something <span className="text-gradient">Amazing</span></h2>
        <p className="contact-desc">
          Currently looking for full-time roles in Software Engineering or QA Automation. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a href="mailto:ankitvashisth21@gmail.com" className="btn btn-primary contact-btn">
          Say Hello <Mail size={18} />
        </a>
        
        <div className="contact-socials">
          <a href="https://linkedin.com/in/ankit-vashisth-5a570824b/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Ankitji579" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ankit Vashisth. All rights reserved.</p>
        <p>Built with React & Vite.</p>
      </div>
    </footer>
  );
};

export default Contact;
