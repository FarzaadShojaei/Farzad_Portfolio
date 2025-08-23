import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <Home />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App; 