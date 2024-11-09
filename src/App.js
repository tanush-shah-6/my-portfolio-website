import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">

      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
export default App;
