import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);
  const interestRef = useRef(null);

  const currentInterestItems = [
    {
      title: 'AI-Enhanced Software Testing',
      image: '/images/skills/AITesting.png',
      description: 'Testing software with AI-enhanced frameworks'
    },
    {
      title: 'Blockchain Development & Smart Contract Testing',
      image: '/images/skills/BlockchainDevelopment.jpg',
      description: 'Smart contract development and testing'
    },
    {
      title: 'Penetration Testing & Bug Bounty Hunting',
      image: '/images/skills/PenetrationTesting.png',
      description: 'Penetration testing and bug bounty hunting in different platforms and targets'
    },
    {
      title: 'Software Development',
      image: '/images/skills/SoftwareDevelopment.jpg',
      description: 'Software development in different frameworks'
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    const autoRotateInterval = setInterval(() => {
      setCurrentInterestIndex(prev => 
        prev < currentInterestItems.length - 1 ? prev + 1 : 0
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(autoRotateInterval);
  }, [currentInterestItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (interestRef.current && interestRef.current.contains(document.activeElement)) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          setCurrentInterestIndex(prev => 
            prev > 0 ? prev - 1 : currentInterestItems.length - 1
          );
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          setCurrentInterestIndex(prev => 
            prev < currentInterestItems.length - 1 ? prev + 1 : 0
          );
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentInterestItems.length]);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleInterestClick = (index) => {
    setCurrentInterestIndex(index);
  };


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
                Welcome to my portfolio! I'm a passionate Software QA Engineer with 3+ years of Software Testing experience 
                with a Background in Software Development. I'm also a Blockchain & Security Enthusiast.
              </p>
            </div>
            
            {!showMore && (
              <button className="more-button" onClick={handleMoreClick}>
                <span>More</span>
                <svg className="more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
            )}
            
            {showMore && (
              <>
                <div className="description-paragraph">
                  <p>
                    I'm dedicated to ensuring software quality through innovative testing methodologies and cutting-edge tools. 
                    My goal is to bridge the gap between traditional QA practices and emerging technologies.
                  </p>
                </div>
                
                <div className="description-paragraph">
                  <p>
                    I specialize in creating robust testing frameworks for web applications, mobile apps, APIs, and blockchain platforms. 
                    My expertise includes automated testing, cybersecurity, and SDET practices for high-scale systems serving 15M+ users.
                  </p>
                </div>
                
                <div className="description-paragraph">
                  <p>
                    Beyond traditional testing, I'm passionate about blockchain security and smart contract auditing. I combine security research 
                    with practical QA methodologies to deliver comprehensive solutions that protect users and maintain system integrity.
                  </p>
                </div>
                
                <button className="more-button show-less" onClick={handleMoreClick}>
                  <span>Show Less</span>
                  <svg className="more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="18,15 12,9 6,15"></polyline>
                  </svg>
                </button>
              </>
            )}
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
              <div className="stat-label">Served Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
          </div>
          
          <div className="tech-highlights">
            <h3>Core Technologies</h3>
            <div className="tech-tags">
              <span className="tech-tag">Software Testing</span>
              <span className="tech-tag">OWASP</span>
              <span className="tech-tag">Software Development</span>
              <span className="tech-tag">Solidity</span>
              <span className="tech-tag">Blockchain Development</span>
              <span className="tech-tag">Security Testing</span>
              
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Current Interests Section - Full Width */}
      <div className="current-focus-section">
        <div className="current-focus-container">
          <h3 className="current-focus-main-title">Current Interests</h3>
          <div className="current-focus-wide" ref={interestRef} tabIndex={0}>
            <div className="focus-carousel-wide">
              <div className="focus-item-container-wide">
                <div className="focus-image-wide">
                  <img 
                    src={currentInterestItems[currentInterestIndex].image} 
                    alt={currentInterestItems[currentInterestIndex].title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="focus-content-wide">
                  <h4 className="focus-title-wide">{currentInterestItems[currentInterestIndex].title}</h4>
                  <p className="focus-description-wide">{currentInterestItems[currentInterestIndex].description}</p>
                </div>
              </div>
              <div className="focus-indicators-wide">
                {currentInterestItems.map((_, index) => (
                  <button
                    key={index}
                    className={`focus-dot-wide ${index === currentInterestIndex ? 'active' : ''}`}
                    onClick={() => handleInterestClick(index)}
                    aria-label={`View ${currentInterestItems[index].title}`}
                  />
                ))}
              </div>
              <div className="focus-navigation-wide">
                <button 
                  className="focus-nav-btn-wide prev" 
                  onClick={() => handleInterestClick(currentInterestIndex > 0 ? currentInterestIndex - 1 : currentInterestItems.length - 1)}
                  aria-label="Previous interest item"
                >
                  ‹
                </button>
                <button 
                  className="focus-nav-btn-wide next" 
                  onClick={() => handleInterestClick(currentInterestIndex < currentInterestItems.length - 1 ? currentInterestIndex + 1 : 0)}
                  aria-label="Next interest item"
                >
                  ›
                </button>
              </div>
              <div className="keyboard-hint-wide">
                <span>Use ← → keys to navigate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 