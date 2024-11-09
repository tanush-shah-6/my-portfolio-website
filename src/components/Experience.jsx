// src/components/Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => (
  <section className="experience-section" id="experience">
    <h2>Experience</h2>
    <div className="timeline">
        <div className="timeline-content">
          <h3>AI Intern</h3>
          <h4>Academor</h4>
          <p className="date">Jan 2023 – Mar 2023</p>
          <p>
            Performed analysis on Coronary Heart Disease and implemented various Machine Learning models to 
            predict the cause of the disease. Learnt 
          </p>
          <div className="skills-list">
            <strong>Skills:</strong> Python • Jupyter Notebook • Pandas • NumPy
          </div>
        </div>
      </div>
  </section>
);

export default Experience;
