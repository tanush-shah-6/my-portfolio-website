// src/components/Skills.jsx
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaGithub, FaFigma, FaJava, FaCogs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiVisualstudiocode, SiMysql } from 'react-icons/si';
import './Skills.css';

const Skills = () => (
  <section className="skills-section" id="skills">
    <h2>Skills</h2>
    <p>Here are some of my skills on which I have been working on for the past 1 year.</p>
    <div className="skills-categories">
      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-icons">
          <div className="skill-icon"><FaReact /> React JS</div>
          <div className="skill-icon"><FaHtml5 /> HTML</div>
          <div className="skill-icon"><FaCss3Alt /> CSS</div>
          <div className="skill-icon"><FaJs /> JavaScript</div>
          <div className="skill-icon"><FaBootstrap /> Bootstrap</div>
        </div>
      </div>
      <div className="skills-category">
        <h3>Backend</h3>
        <div className="skills-icons">
          <div className="skill-icon"><FaNodeJs /> Node JS</div>
          <div className="skill-icon"><SiExpress /> Express JS</div>
          <div className="skill-icon"><SiMongodb /> MongoDB</div>
          <div className="skill-icon"><SiMysql /> MySQL</div>
        </div>
      </div>
      <div className="skills-category">
        <h3>Others</h3>
        <div className="skills-icons">
          <div className="skill-icon"><FaCogs /> C++</div>
          <div className="skill-icon"><FaGithub /> GitHub</div>
          <div className="skill-icon"><SiVisualstudiocode /> VS Code</div>
          <div className="skill-icon"><FaJava /> Java</div>
          <div className="skill-icon"><FaFigma /> Figma</div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
