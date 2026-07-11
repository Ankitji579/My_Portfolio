import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section container page-transition">
      <h2 className="section-title">
        Work <span className="text-gradient">Experience</span>
      </h2>
      
      <div className="timeline">
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
    </section>
  );
};

export default Experience;
