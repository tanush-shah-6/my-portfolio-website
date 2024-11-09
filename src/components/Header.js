// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
    </nav>
    <a href="https://github.com/your-profile" className="github-button">GitHub Profile</a>
  </header>
);

export default Header;
