import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import './Education.css';

function Education() {
  return (
    <motion.section
      id="education"
      className="education"
      initial={{ opacity: 0 }}  // Initially, the section is transparent
      whileInView={{ opacity: 1 }}  // Once it's in view, opacity becomes 1 (fully visible)
      transition={{ duration: 1 }}  // Duration of the fade-in effect
    >
      <h3>My Education</h3>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }} // Add a delay for smooth animation
      >
        <motion.li
          initial={{ x: -100, opacity: 0 }}  // Start from left side, invisible
          whileInView={{ x: 0, opacity: 1 }}  // Animate to its position, becoming visible
          transition={{ type: 'spring', stiffness: 50, delay: 0.2 }} // Spring effect
        >
          <h4>Bachelor of Technology in Computer Science</h4>
          <p>Symbiosis Institute of Technology, Pune (2022 - Present)</p>
        </motion.li>
        <motion.li
          initial={{ x: 100, opacity: 0 }}  // Start from right side, invisible
          whileInView={{ x: 0, opacity: 1 }}  // Animate to its position, becoming visible
          transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
        >
          <h4>12th Standard - 2022</h4>
          <p>Lexicon International School, Wagholi </p>
          <p>90.6%</p>
        </motion.li>
        <motion.li
          initial={{ x: -100, opacity: 0 }}  // Start from left side, invisible
          whileInView={{ x: 0, opacity: 1 }}  // Animate to its position, becoming visible
          transition={{ type: 'spring', stiffness: 50, delay: 0.6 }}
        >
          <h4>10th Standard - 2020</h4>
          <p>Lexicon International School, Wagholi </p>
          <p>94.8%</p>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}

export default Education;
