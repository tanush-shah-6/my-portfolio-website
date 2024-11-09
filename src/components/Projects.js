import React from 'react';
import './Projects.css';
import { FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <h3>Wander Wisdom</h3>
          <p>Interactive website that suggests travel destinations to users by performing sentiment analysis on customer reviews</p>
          <div className="tech-stack">
            <span>Tech Stack: 
              <div className='skills-icons'>
              <div className="skill-icon"><FaHtml5 /> HTML</div>
              <div className="skill-icon"><FaCss3Alt /> CSS</div>
              <div className="skill-icon"><FaJs /> JavaScript</div>
              <div className="skill-icon"><FaBootstrap /> Bootstrap</div>
              <div className="skill-icon"><SiMongodb /> MongoDB</div>
              <div className="skill-icon"><FaNodeJs /> Node JS</div>
            </div>
            </span>
          </div>
          
        </li>
        <li>
          <h3>Job Portal</h3>
          <p>Job Portal made in Java for students and companies finding a job or employee</p>
          <div className="tech-stack">
            <span>Tech Stack: 
              <div className='skills-icons'>
              <div className="skill-icon"><FaJava /> Java</div>
              <div className="skill-icon"><SiMysql /> MySQL</div>
            </div>
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
