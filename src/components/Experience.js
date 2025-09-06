import React, { useState } from 'react';
import LazyImage from './LazyImage';

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);

  // Handle responsive state
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      company: 'Smartech',
      role: 'Software QA Engineer',
      logo: '/images/companies/smartech.png',
      url: 'https://smartech.ir',
      description: 'Iran’s largest Mar-tech and Ad-tech solution providing startup that brings serves companies with more than 15 million active Users and customers.',
      detailedPoints: [
        'Developed an AI-powered Playwright test automation framework integrated with LLM and MCP for self-healing and adaptive locator detection, significantly boosting automated test execution speed and reliability by 30%',
        'Orchestrated a comprehensive Software Testing Life Cycle (STLC), aligning QA deliverables with sprint milestones for increased transparency and predictability',
        'Automated QA workflows for bug fixes and pre-release cycles using n8n, cutting test execution time by 50% and accelerating QA cycles for faster releases',
        
      ],
      duration: 'August 2024 - Present'
    },
    {
      company: 'Mofid Securities',
      role: 'Software Test Engineer',
      logo: '/images/companies/mofid.png',
      url: 'https://www.emofid.com/',
      description: 'Iran’s largest full-service stock brokerage firm with leading private investment advisory with more than 10 million active users',
      detailedPoints: [
        'Designed and maintained 400+ test cases in Jira, optimizing test coverage and refining product validation, as reflected in Scrum reports',
        'Expanded automated API tests in Postman, contributing to a 30% improvement in response times as verified by K6',
        'Built robust end-to-end test flows for mobile & Web clients using Appium and Cypress, reducing manual acceptance efforts by 50% based on test cases',
        'Collaborated with DevOps to improve GitLab CI workflows for smoother web and mobile versioning, resulting in faster 50% production releases.',
        
      ],
      duration: 'January 2023 - August 2024'
    },
    {
      company: 'Panco.app',
      role: 'Software Tester Intern',
      logo: '/images/companies/panco.png',
      url: 'https://panco.me',
      description: 'The First Social Networking Platform in Iran with more than 1 Million active users per day, Focused on playing multiple mobile games and Communicating with each other',
      detailedPoints: [
        'Detected and addressed over 80 software vulnerabilities, improving system resilience by 40% and reducing end-user complaints',
        'Authored and executed 100+ manual test cases, exposing multiple critical crash scenarios in game-play environments'

      ],
      duration: 'June 2022 - November 2022'
    }
  ];

  return (
    <section className="section">
      <div className="section-header" style={{
        marginBottom: isSmallMobile ? '2rem' : '3rem'
      }}>
        <h2 className="section-title" style={{
          fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem',
          marginBottom: isSmallMobile ? '0.8rem' : '1rem'
        }}>Professional Experience</h2>
        <p className="section-subtitle" style={{
          fontSize: isSmallMobile ? '0.95rem' : '1.1rem',
          lineHeight: isSmallMobile ? '1.5' : '1.6'
        }}>
          My journey in software testing and quality assurance, working with diverse technologies and teams
        </p>
      </div>
      
      <div className="experience-grid" style={{
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: isSmallMobile ? '1.2rem' : '2rem'
      }}>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card" style={{
            padding: isSmallMobile ? '1.2rem' : isMobile ? '1.5rem' : '2rem',
            borderRadius: isSmallMobile ? '12px' : '15px'
          }}>
            <div className="company-header" style={{
              flexDirection: isMobile ? 'column' : 'row',
              textAlign: isMobile ? 'center' : 'left',
              gap: isMobile ? '0.8rem' : '0',
              marginBottom: isSmallMobile ? '1.2rem' : '1.5rem'
            }}>
              <div className="company-icon" style={{
                width: isSmallMobile ? '50px' : '60px',
                height: isSmallMobile ? '50px' : '60px',
                marginRight: isMobile ? '0' : '1rem',
                marginBottom: isMobile ? '0' : '0'
              }}>
                <LazyImage
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="company-logo"
                  placeholder={
                    <div style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#e2e8f0',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'pulse 1.5s ease-in-out infinite'
                    }}>
                      <span style={{ 
                        fontSize: isSmallMobile ? '1.2rem' : '1.5rem',
                        color: '#0ea5e9',
                        fontWeight: '600'
                      }}>
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                  }
                  fallback={
                    <div className="company-initials" style={{ display: 'flex' }}>
                      {exp.company.charAt(0)}
                    </div>
                  }
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '5px',
                    background: 'white',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div className="company-info">
                <h3 style={{
                  fontSize: isSmallMobile ? '1.2rem' : '1.3rem',
                  marginBottom: isSmallMobile ? '0.3rem' : '0.5rem'
                }}>
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#0ea5e9';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = 'inherit';
                    }}
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="role" style={{
                  fontSize: isSmallMobile ? '0.95rem' : '1rem'
                }}>{exp.role}</p>
                <p className="duration" style={{ 
                  fontSize: isSmallMobile ? '0.85rem' : '0.9rem', 
                  color: '#888', 
                  marginTop: '0.5rem' 
                }}>
                  {exp.duration}
                </p>
              </div>
            </div>
            <div className="experience-description" style={{
              fontSize: isSmallMobile ? '0.95rem' : '1rem',
              lineHeight: isSmallMobile ? '1.5' : '1.6'
            }}>
              <p>{exp.description}</p>
              {expandedCards[index] && (
                <div className="detailed-points" style={{ marginTop: '1rem' }}>
                  <h4 style={{ 
                    color: '#0ea5e9', 
                    fontSize: isSmallMobile ? '1rem' : '1.1rem', 
                    marginBottom: '1rem', 
                    fontWeight: '600' 
                  }}>
                    Key Achievements & Responsibilities:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: '0',
                    color: '#333',
                    lineHeight: isSmallMobile ? '1.5' : '1.6',
                    fontSize: isSmallMobile ? '0.9rem' : '1rem'
                  }}>
                    {exp.detailedPoints.map((point, pointIndex) => (
                      <li key={pointIndex} style={{ 
                        marginBottom: isSmallMobile ? '0.6rem' : '0.8rem', 
                        paddingLeft: isSmallMobile ? '1.2rem' : '1.5rem',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#0ea5e9',
                          fontWeight: 'bold'
                        }}>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={() => toggleExpanded(index)}
                style={{
                  marginTop: '1rem',
                  background: expandedCards[index] 
                    ? 'linear-gradient(135deg, #64748b 0%, #475569 100%)'
                    : 'linear-gradient(135deg, #0ea5e9 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: isSmallMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: isSmallMobile ? '0.85rem' : '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 10px rgba(14, 165, 233, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 10px rgba(14, 165, 233, 0.3)';
                }}
              >
                {expandedCards[index] ? 'Show Less' : 'See More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 