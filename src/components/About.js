import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import './About.css';

const About = () => (
  <motion.section
    className="about"
    id="about"
    initial={{ opacity: 0 }}  // Section starts as invisible
    whileInView={{ opacity: 1 }}  // Section becomes visible when in view
    transition={{ duration: 1 }}  // Duration of the fade-in effect
  >
    <div className="intro-section">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}  // Starts from the left, invisible
        whileInView={{ x: 0, opacity: 1 }}  // Animates to its position and becomes visible
        transition={{ type: 'spring', stiffness: 50 }}
        className="visible" // Ensures the class for visibility is added
      >
        Hi, I am <span className="name-highlight">Tanush Abhinav Shah</span>
      </motion.h1>

      <motion.h2
        initial={{ x: 100, opacity: 0 }}  // Starts from the right, invisible
        whileInView={{ x: 0, opacity: 1 }}  // Animates to its position and becomes visible
        transition={{ type: 'spring', stiffness: 50 }}
      >
        I am a <span className="role-highlight">Front-end Developer</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}  // Starts as invisible
        whileInView={{ opacity: 1 }}  // Becomes visible when section is in view
        transition={{ duration: 1, delay: 0.2 }}  // Delayed transition for smoother effect
        className="intro-description visible" // Ensures the class for visibility is added
      >
        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for
        learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I
        am ready to make a meaningful contribution and achieve great things.
      </motion.p>
    </div>
  </motion.section>
);

export default About;
