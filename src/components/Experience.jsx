// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => (
  <section className="experience-section" id="experience">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Experience
    </motion.h2>
    <motion.div
      className="timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="timeline-content"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>AI Intern</h3>
        <h4>Academor</h4>
        <p className="date">Jan 2023 – Mar 2023</p>
        <p>
          Performed analysis on Coronary Heart Disease and implemented various Machine Learning models to
          predict the cause of the disease.
        </p>
        <div className="skills-list">
          <strong>Skills:</strong> Python • Jupyter Notebook • Pandas • NumPy
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Experience;
