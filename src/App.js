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
<div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>

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
