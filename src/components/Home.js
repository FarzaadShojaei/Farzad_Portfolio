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
            Welcome to my portfolio! I am a passionate Software Development Engineer in Test (SDET) and Quality Assurance Engineer 
            with expertise in automated testing, blockchain technology, and cybersecurity. I specialize in creating robust 
            testing frameworks and ensuring the highest quality standards for software applications.
          </p>
          <br />
          <p>
            With a strong background in both manual and automated testing, I bring a comprehensive approach to quality assurance. 
            My experience spans across web applications, mobile apps, APIs, and blockchain platforms. I'm constantly exploring 
            new technologies and methodologies to enhance testing efficiency and software reliability.
          </p>
          <br />
          <p>
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