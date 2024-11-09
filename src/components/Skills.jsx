// src/components/Skills.jsx
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaGithub, FaFigma, FaJava, FaCogs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiVisualstudiocode, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => (
  <section className="skills-section" id="skills">
    <motion.h2
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      Skills
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Here are some of my skills on which I have been working on for the past 1 year.
    </motion.p>
    
    <div className="skills-categories">
      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-icons">
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FaReact /> React JS
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <FaHtml5 /> HTML
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaCss3Alt /> CSS
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FaJs /> JavaScript
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaBootstrap /> Bootstrap
          </motion.div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend</h3>
        <div className="skills-icons">
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <FaNodeJs /> Node JS
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <SiExpress /> Express JS
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <SiMongodb /> MongoDB
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <SiMysql /> MySQL
          </motion.div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Others</h3>
        <div className="skills-icons">
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <FaCogs /> C++
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <FaGithub /> GitHub
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <SiVisualstudiocode /> VS Code
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <FaJava /> Java
          </motion.div>
          <motion.div
            className="skill-icon"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FaFigma /> Figma
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
