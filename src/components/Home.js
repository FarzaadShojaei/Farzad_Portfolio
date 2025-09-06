import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);
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

  // Handle responsive state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <h1 className="main-title" style={{
              fontSize: isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '4rem',
              lineHeight: isSmallMobile ? '1.1' : '1.1',
              marginBottom: isSmallMobile ? '1rem' : '1.5rem'
            }}>Hi, I'm Farzad Shojaei</h1>
            
                      <div className="subtitle-container" style={{
            marginBottom: isSmallMobile ? '1.5rem' : '2rem'
          }}>
            <h2 className="static-subtitle" style={{
              fontSize: isSmallMobile ? '1.1rem' : isMobile ? '1.4rem' : '1.8rem',
              flexDirection: isSmallMobile ? 'column' : 'row',
              alignItems: isSmallMobile ? 'flex-start' : 'center',
              gap: isSmallMobile ? '0.3rem' : '1rem'
            }}>
              <span className="subtitle-text">Software QA/Test Engineer</span>
              <span className="subtitle-separator" style={{
                display: isSmallMobile ? 'none' : 'inline',
                margin: isSmallMobile ? '0' : '0 0.5rem'
              }}>|</span>
              <span className="subtitle-text">Blockchain & Security Enthusiast</span>
            </h2>
          </div>
          </div>
          
          <div className="description" style={{
            fontSize: isSmallMobile ? '1rem' : isMobile ? '1.1rem' : '1.2rem',
            lineHeight: isSmallMobile ? '1.6' : '1.8'
          }}>
            <div className="description-paragraph">
              <p>
                Welcome to my portfolio! I'm a passionate Software QA Engineer with 3+ years of Software Testing experience 
                with a Background in Software Development. I'm also a Blockchain & Security Enthusiast.
              </p>
            </div>
            
            {!showMore && (
              <button 
                className="more-button" 
                onClick={handleMoreClick}
                style={{
                  padding: isSmallMobile ? '0.6rem 1rem' : '0.8rem 1.5rem',
                  fontSize: isSmallMobile ? '0.9rem' : '1rem',
                  maxWidth: isSmallMobile ? '120px' : '150px'
                }}
              >
                <span>More</span>
                <svg className="more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{
                  width: isSmallMobile ? '14px' : '16px',
                  height: isSmallMobile ? '14px' : '16px'
                }}>
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
                
                <button 
                  className="more-button show-less" 
                  onClick={handleMoreClick}
                  style={{
                    padding: isSmallMobile ? '0.6rem 1rem' : '0.8rem 1.5rem',
                    fontSize: isSmallMobile ? '0.9rem' : '1rem',
                    maxWidth: isSmallMobile ? '120px' : '150px'
                  }}
                >
                  <span>Show Less</span>
                  <svg className="more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{
                    width: isSmallMobile ? '14px' : '16px',
                    height: isSmallMobile ? '14px' : '16px'
                  }}>
                    <polyline points="18,15 12,9 6,15"></polyline>
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
        
        <div className="home-sidebar-content">
          <div className="quick-stats" style={{
            display: isMobile ? 'grid' : 'block',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'none',
            gap: isMobile ? (isSmallMobile ? '0.8rem' : '1rem') : '0',
            padding: isSmallMobile ? '1rem' : isMobile ? '1.5rem' : '2rem'
          }}>
            <div className="stat-item" style={{
              marginBottom: isMobile ? '0' : '1.5rem'
            }}>
              <div className="stat-number" style={{
                fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem'
              }}>3+</div>
              <div className="stat-label" style={{
                fontSize: isSmallMobile ? '0.8rem' : '0.9rem'
              }}>Years Experience</div>
            </div>
            <div className="stat-item" style={{
              marginBottom: isMobile ? '0' : '1.5rem'
            }}>
              <div className="stat-number" style={{
                fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem'
              }}>15M+</div>
              <div className="stat-label" style={{
                fontSize: isSmallMobile ? '0.8rem' : '0.9rem'
              }}>Served Users</div>
            </div>
            <div className="stat-item" style={{
              marginBottom: isMobile ? '0' : '1.5rem'
            }}>
              <div className="stat-number" style={{
                fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem'
              }}>5+</div>
              <div className="stat-label" style={{
                fontSize: isSmallMobile ? '0.8rem' : '0.9rem'
              }}>Completed Projects</div>
            </div>
          </div>
          
          <div className="tech-highlights" style={{
            padding: isSmallMobile ? '1.5rem' : isMobile ? '1.5rem' : '2rem'
          }}>
            <h3 style={{
              fontSize: isSmallMobile ? '1.1rem' : '1.2rem'
            }}>Core Technologies</h3>
            <div className="tech-tags" style={{
              gap: isSmallMobile ? '0.4rem' : '0.5rem'
            }}>
              <span className="tech-tag" style={{
                padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                fontSize: isSmallMobile ? '0.75rem' : '0.8rem'
              }}>Software Testing</span>
              <span className="tech-tag" style={{
                padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                fontSize: isSmallMobile ? '0.75rem' : '0.8rem'
              }}>OWASP</span>
              <span className="tech-tag" style={{
                padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                fontSize: isSmallMobile ? '0.75rem' : '0.8rem'
              }}>Software Development</span>
              <span className="tech-tag" style={{
                padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                fontSize: isSmallMobile ? '0.75rem' : '0.8rem'
              }}>Solidity</span>
              <span className="tech-tag" style={{
                padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                fontSize: isSmallMobile ? '0.75rem' : '0.8rem'
              }}>Blockchain Development</span>
              <span className="tech-tag" style={{
                padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                fontSize: isSmallMobile ? '0.75rem' : '0.8rem'
              }}>Security Testing</span>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Current Interests Section - Full Width */}
      <div className="current-focus-section" style={{
        padding: isSmallMobile ? '2rem 0' : isMobile ? '3rem 0' : '4rem 0',
        marginTop: isSmallMobile ? '1rem' : '2rem'
      }}>
        <div className="current-focus-container" style={{
          padding: isSmallMobile ? '0 1rem' : isMobile ? '0 1.5rem' : '0 2rem'
        }}>
          <h3 className="current-focus-main-title" style={{
            fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem',
            marginBottom: isSmallMobile ? '2rem' : '3rem'
          }}>Current Interests</h3>
          <div className="current-focus-wide" ref={interestRef} tabIndex={0} style={{
            padding: isSmallMobile ? '1.5rem' : isMobile ? '2rem' : '3rem'
          }}>
            <div className="focus-carousel-wide" style={{
              minHeight: isSmallMobile ? '250px' : isMobile ? '280px' : '300px'
            }}>
              <div className="focus-item-container-wide" style={{
                flexDirection: isMobile ? 'column' : 'row',
                gap: isSmallMobile ? '1.5rem' : isMobile ? '2rem' : '3rem',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <div className="focus-image-wide" style={{
                  width: isSmallMobile ? '100px' : isMobile ? '120px' : '150px',
                  height: isSmallMobile ? '100px' : isMobile ? '120px' : '150px',
                  padding: isSmallMobile ? '15px' : '20px'
                }}>
                  <img 
                    src={currentInterestItems[currentInterestIndex].image} 
                    alt={currentInterestItems[currentInterestIndex].title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="focus-content-wide">
                  <h4 className="focus-title-wide" style={{
                    fontSize: isSmallMobile ? '1.3rem' : isMobile ? '1.5rem' : '2rem'
                  }}>{currentInterestItems[currentInterestIndex].title}</h4>
                  <p className="focus-description-wide" style={{
                    fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1rem' : '1.2rem',
                    marginBottom: isSmallMobile ? '1.5rem' : '2rem'
                  }}>{currentInterestItems[currentInterestIndex].description}</p>
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
              <div className="focus-navigation-wide" style={{
                left: isSmallMobile ? '-10px' : isMobile ? '-10px' : '-20px',
                right: isSmallMobile ? '-10px' : isMobile ? '-10px' : '-20px'
              }}>
                <button 
                  className="focus-nav-btn-wide prev" 
                  onClick={() => handleInterestClick(currentInterestIndex > 0 ? currentInterestIndex - 1 : currentInterestItems.length - 1)}
                  aria-label="Previous interest item"
                  style={{
                    width: isSmallMobile ? '40px' : isMobile ? '40px' : '50px',
                    height: isSmallMobile ? '40px' : isMobile ? '40px' : '50px',
                    fontSize: isSmallMobile ? '1.2rem' : '1.5rem'
                  }}
                >
                  ‹
                </button>
                <button 
                  className="focus-nav-btn-wide next" 
                  onClick={() => handleInterestClick(currentInterestIndex < currentInterestItems.length - 1 ? currentInterestIndex + 1 : 0)}
                  aria-label="Next interest item"
                  style={{
                    width: isSmallMobile ? '40px' : isMobile ? '40px' : '50px',
                    height: isSmallMobile ? '40px' : isMobile ? '40px' : '50px',
                    fontSize: isSmallMobile ? '1.2rem' : '1.5rem'
                  }}
                >
                  ›
                </button>
              </div>
              <div className="keyboard-hint-wide" style={{
                fontSize: isSmallMobile ? '0.8rem' : '0.9rem'
              }}>
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