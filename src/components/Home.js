import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Home = () => {
  const { t, lang } = useLanguage();
  const [showMore, setShowMore] = useState(false);
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);
  const interestRef = useRef(null);

  const currentInterestItems = [
    {
      title: { en: 'AI-Enhanced Software Testing', it: 'Test del Software Potenziato dall\'IA' },
      image: '/images/skills/AITesting.png',
      emoji: '🤖',
      description: {
        en: 'Testing software with AI-enhanced frameworks',
        it: 'Testing del software con framework potenziati dall\'IA',
      },
    },
    {
      title: {
        en: 'Blockchain Development & Smart Contract Testing',
        it: 'Sviluppo Blockchain e Test di Smart Contract',
      },
      image: '/images/skills/BlockchainDevelopment.jpg',
      emoji: '⛓️',
      description: {
        en: 'Smart contract development and testing',
        it: 'Sviluppo e test di smart contract',
      },
    },
    {
      title: {
        en: 'Penetration Testing & Bug Bounty Hunting',
        it: 'Penetration Testing e Bug Bounty Hunting',
      },
      image: '/images/skills/PenetrationTesting.png',
      emoji: '🛡️',
      description: {
        en: 'Penetration testing and bug bounty hunting in different platforms and targets',
        it: 'Penetration testing e bug bounty hunting su diverse piattaforme e obiettivi',
      },
    },
    {
      title: { en: 'Software Development', it: 'Sviluppo Software' },
      image: '/images/skills/SoftwareDevelopment.jpg',
      emoji: '💻',
      description: {
        en: 'Software development in different frameworks',
        it: 'Sviluppo software con diversi framework',
      },
    },
    {
      title: { en: 'Data Engineering Projects', it: 'Progetti di Data Engineering' },
      image: '/images/skills/DataEngineering.png',
      emoji: '📊',
      description: {
        en: 'Building data pipelines, ETL workflows, and scalable data infrastructure',
        it: 'Creazione di pipeline di dati, flussi ETL e infrastrutture dati scalabili',
      },
    },
    {
      title: { en: 'ML Engineering Projects', it: 'Progetti di ML Engineering' },
      image: '/images/skills/MLEngineering.png',
      emoji: '🧠',
      description: {
        en: 'Developing and deploying machine learning models and ML pipelines',
        it: 'Sviluppo e deployment di modelli di machine learning e pipeline ML',
      },
    },
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

  const activeInterest = currentInterestItems[currentInterestIndex];

  return (
    <section className="section home-section">
      <div className="home-layout">
        <div className="home-main-content">
          <div className="home-header">
            <h1 className="main-title" style={{
              fontSize: isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '4rem',
              lineHeight: isSmallMobile ? '1.1' : '1.1',
              marginBottom: isSmallMobile ? '1rem' : '1.5rem'
            }}>{t.home.greeting}</h1>

                      <div className="subtitle-container" style={{
            marginBottom: isSmallMobile ? '1rem' : '1.25rem'
          }}>
            <h2 className="static-subtitle" style={{
              fontSize: isSmallMobile ? '1.1rem' : isMobile ? '1.4rem' : '1.8rem',
              flexDirection: isSmallMobile ? 'column' : 'row',
              alignItems: isSmallMobile ? 'flex-start' : 'center',
              gap: isSmallMobile ? '0.3rem' : '1rem'
            }}>
              <span className="subtitle-text">{t.home.subtitleA}</span>
              <span className="subtitle-separator" style={{
                display: isSmallMobile ? 'none' : 'inline',
                margin: isSmallMobile ? '0' : '0 0.5rem'
              }}>|</span>
              <span className="subtitle-text">{t.home.subtitleB}</span>
            </h2>
          </div>

          {/* Location */}
          <div className="home-location" style={{
            fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1.05rem' : '1.2rem',
            marginBottom: isSmallMobile ? '1.5rem' : '2rem'
          }}>
            <span className="location-pin" role="img" aria-label="location">📍</span>
            <span>{t.home.location}</span>
          </div>
          </div>

          <div className="description" style={{
            fontSize: isSmallMobile ? '1rem' : isMobile ? '1.1rem' : '1.2rem',
            lineHeight: isSmallMobile ? '1.6' : '1.8'
          }}>
            <div className="description-paragraph">
              <p>{t.home.lead}</p>
            </div>

            {!showMore && (
              <button
                className="more-button"
                onClick={handleMoreClick}
                style={{
                  padding: isSmallMobile ? '0.6rem 1rem' : '0.8rem 1.5rem',
                  fontSize: isSmallMobile ? '0.9rem' : '1rem',
                  maxWidth: isSmallMobile ? '160px' : '200px'
                }}
              >
                <span>{t.home.more}</span>
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
                  <p>{t.home.p2}</p>
                </div>

                <div className="description-paragraph">
                  <p>{t.home.p3}</p>
                </div>

                <div className="description-paragraph">
                  <p>{t.home.p4}</p>
                </div>

                <button
                  className="more-button show-less"
                  onClick={handleMoreClick}
                  style={{
                    padding: isSmallMobile ? '0.6rem 1rem' : '0.8rem 1.5rem',
                    fontSize: isSmallMobile ? '0.9rem' : '1rem',
                    maxWidth: isSmallMobile ? '160px' : '200px'
                  }}
                >
                  <span>{t.home.less}</span>
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
              }}>{t.home.statYears}</div>
            </div>
            <div className="stat-item" style={{
              marginBottom: isMobile ? '0' : '1.5rem'
            }}>
              <div className="stat-number" style={{
                fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem'
              }}>15M+</div>
              <div className="stat-label" style={{
                fontSize: isSmallMobile ? '0.8rem' : '0.9rem'
              }}>{t.home.statUsers}</div>
            </div>
            <div className="stat-item" style={{
              marginBottom: isMobile ? '0' : '1.5rem'
            }}>
              <div className="stat-number" style={{
                fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem'
              }}>5+</div>
              <div className="stat-label" style={{
                fontSize: isSmallMobile ? '0.8rem' : '0.9rem'
              }}>{t.home.statProjects}</div>
            </div>
          </div>

          <div className="tech-highlights" style={{
            padding: isSmallMobile ? '1.5rem' : isMobile ? '1.5rem' : '2rem'
          }}>
            <h3 style={{
              fontSize: isSmallMobile ? '1.1rem' : '1.2rem'
            }}>{t.home.coreTech}</h3>
            <div className="tech-tags" style={{
              gap: isSmallMobile ? '0.4rem' : '0.5rem'
            }}>
              {t.home.techTags.map((tag, i) => (
                <span key={i} className="tech-tag" style={{
                  padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                  fontSize: isSmallMobile ? '0.75rem' : '0.8rem'
                }}>{tag}</span>
              ))}
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
          }}>{t.home.currentInterests}</h3>
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
                  {failedImages[currentInterestIndex] ? (
                    <div className="interest-fallback">
                      <span role="img" aria-label={activeInterest.title[lang]} style={{
                        fontSize: isSmallMobile ? '2.5rem' : '3rem'
                      }}>{activeInterest.emoji}</span>
                    </div>
                  ) : (
                    <img
                      src={activeInterest.image}
                      alt={activeInterest.title[lang]}
                      onError={() => setFailedImages(prev => ({ ...prev, [currentInterestIndex]: true }))}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  )}
                </div>
                <div className="focus-content-wide">
                  <h4 className="focus-title-wide" style={{
                    fontSize: isSmallMobile ? '1.3rem' : isMobile ? '1.5rem' : '2rem'
                  }}>{activeInterest.title[lang]}</h4>
                  <p className="focus-description-wide" style={{
                    fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1rem' : '1.2rem',
                    marginBottom: isSmallMobile ? '1.5rem' : '2rem'
                  }}>{activeInterest.description[lang]}</p>
                </div>
              </div>
              <div className="focus-indicators-wide">
                {currentInterestItems.map((_, index) => (
                  <button
                    key={index}
                    className={`focus-dot-wide ${index === currentInterestIndex ? 'active' : ''}`}
                    onClick={() => handleInterestClick(index)}
                    aria-label={`View ${currentInterestItems[index].title[lang]}`}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
