import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import './Header.css';

const Header = () => {
  const handleClick = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }} // Header starts invisible
      whileInView={{ opacity: 1 }} // Fade-in effect when header comes into view
      transition={{ duration: 1 }} // Duration of the fade-in
    >
      <motion.nav
        className="navbar"
        initial={{ y: -50, opacity: 0 }} // Navbar starts above the screen and invisible
        whileInView={{ y: 0, opacity: 1 }} // Slide into position and fade-in when in view
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a>
        <a href="#education" onClick={(e) => handleClick(e, 'education')}>Education</a>
        <a href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</a>
        <a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a>
        <a href="#experience" onClick={(e) => handleClick(e, 'experience')}>Experience</a>
      </motion.nav>

      <motion.a
        href="https://github.com/your-profile"
        className="github-button"
        initial={{ opacity: 0 }} // Initially invisible
        whileInView={{ opacity: 1 }} // Fade-in effect when in view
        transition={{ duration: 1, delay: 0.5 }} // Delay the fade-in slightly
      >
        GitHub Profile
      </motion.a>
    </motion.header>
  );
}

export default Header;
