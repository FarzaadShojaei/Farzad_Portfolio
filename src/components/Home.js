import React, { useState, useEffect } from 'react';

const Home = () => {
  const subtitles = [
    'a Software QA Engineer',
    'a Blockchain & Security Enthusiast',
    'an Automation Expert'
  ];

  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <section className="section home-section">
      <div>
        <h1 className="main-title">Hi, I'm Farzaad Shojaei</h1>
        
        <div className="subtitle-container">
          <h2 className="blinking-subtitle" key={currentSubtitle}>
            {subtitles[currentSubtitle]}
          </h2>
        </div>
        
        <div className="description">
          <p>
            Welcome to my portfolio! I am a passionate QA Engineer with 3+ years of experience in automation testing and 
            cross-functional collaboration. Skilled in building AI-enhanced test frameworks and optimizing QA processes for 
            high-scale systems serving more than 15 million users. I have a strong track record of aligning QA efforts with 
            agile development and am seeking Software QA Engineer, Test Engineer or SDET roles in fast-paced, tech-driven environments.
          </p>
          <br />
          <p>
            As a Software Development Engineer in Test (SDET) and Quality Assurance Engineer, I specialize in creating robust 
            testing frameworks and ensuring the highest quality standards for software applications. My expertise spans automated 
            testing, blockchain technology, and cybersecurity, with a comprehensive approach that covers web applications, mobile 
            apps, APIs, and blockchain platforms.
          </p>
          <br />
          <p>
            I'm constantly exploring new technologies and methodologies to enhance testing efficiency and software reliability. 
            When I'm not testing software, you can find me writing about technology trends, contributing to open-source projects, 
            or diving deep into the latest developments in blockchain and security. I believe in continuous learning and sharing 
            knowledge with the community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home; 