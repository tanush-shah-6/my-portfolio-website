// src/components/Projects.jsx
import React from 'react';
import { FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h3>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4>Wander Wisdom</h4>
          <p>Interactive website that suggests travel destinations to users by performing sentiment analysis on customer reviews</p>
          <div className="tech-stack">
            <span>Tech Stack: 
              <div className="skills-icons">
                <div className="skill-icon"><FaHtml5 /> HTML</div>
                <div className="skill-icon"><FaCss3Alt /> CSS</div>
                <div className="skill-icon"><FaJs /> JavaScript</div>
                <div className="skill-icon"><FaBootstrap /> Bootstrap</div>
                <div className="skill-icon"><SiMongodb /> MongoDB</div>
                <div className="skill-icon"><FaNodeJs /> Node JS</div>
              </div>
            </span>
          </div>
        </motion.li>
        
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4>Job Portal</h4>
          <p>Job Portal made in Java for students and companies finding a job or employee</p>
          <div className="tech-stack">
            <span>Tech Stack: 
              <div className="skills-icons">
                <div className="skill-icon"><FaJava /> Java</div>
                <div className="skill-icon"><SiMysql /> MySQL</div>
              </div>
            </span>
          </div>
        </motion.li>
      </motion.ul>
    </section>
  );
}

export default Projects;
