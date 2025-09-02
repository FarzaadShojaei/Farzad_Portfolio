import React from 'react';

const Home = () => {

  return (
    <section className="section home-section">
      <div className="home-layout">
        <div className="home-main-content">
          <div className="home-header">
            <h1 className="main-title">Hi, I'm Farzad Shojaei</h1>
            
                      <div className="subtitle-container">
            <h2 className="static-subtitle">
              <span className="subtitle-text">Software QA/Test Engineer</span>
              <span className="subtitle-separator">|</span>
              <span className="subtitle-text">Blockchain & Security Enthusiast</span>
            </h2>
          </div>
          </div>
          
          <div className="description">
            <div className="description-paragraph">
              <p>
                Welcome to my portfolio! I am a passionate QA Engineer with 3+ years of experience in automation testing and 
                cross-functional collaboration. Skilled in building AI-enhanced test frameworks and optimizing QA processes for 
                high-scale systems serving more than 15 million users. I have a strong track record of aligning QA efforts with 
                agile development and am seeking Software QA Engineer, Test Engineer or SDET roles in fast-paced, tech-driven environments.
              </p>
            </div>
            
            <div className="description-paragraph">
              <p>
                As a Software Development Engineer in Test (SDET) and Quality Assurance Engineer, I specialize in creating robust 
                testing frameworks and ensuring the highest quality standards for software applications. My expertise spans automated 
                testing, blockchain technology, and cybersecurity, with a comprehensive approach that covers web applications, mobile 
                apps, APIs, and blockchain platforms.
              </p>
            </div>
            
            <div className="description-paragraph">
              <p>
                I'm constantly exploring new technologies and methodologies to enhance testing efficiency and software reliability. 
                When I'm not testing software, you can find me writing about technology trends, contributing to open-source projects, 
                or diving deep into the latest developments in blockchain and security. I believe in continuous learning and sharing 
                knowledge with the community.
              </p>
            </div>
          </div>
        </div>
        
        <div className="home-sidebar-content">
          <div className="quick-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15M+</div>
              <div className="stat-label">Users Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
          
          <div className="tech-highlights">
            <h3>Core Technologies</h3>
            <div className="tech-tags">
              <span className="tech-tag">Software Testing</span>
              <span className="tech-tag">OWASP</span>
              <span className="tech-tag">Playwright</span>
              <span className="tech-tag">Solidity</span>
              <span className="tech-tag">Blockchain Development</span>
              <span className="tech-tag">Smart Contracts</span>
              
            </div>
          </div>
          
          <div className="current-focus">
            <h3>Current Focus</h3>
            <ul>
              <li>AI-Enhanced Testing Frameworks</li>
              <li>Blockchain Security Testing</li>
              <li>Zero-Knowledge Proofs</li>
              <li>Web3 Applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 