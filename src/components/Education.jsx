import React from 'react';
import './Education.css';
import PageTransition from './PageTransition';

const Education = () => {
  return (
    <PageTransition className="section container page-transition" id="education">
      <h2 className="section-title">
        <span className="text-gradient">Education</span> & Activities
      </h2>
      
      <div className="education-layout">
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
