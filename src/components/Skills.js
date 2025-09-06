import React, { useState } from 'react';
import LazyImage from './LazyImage';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
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
  const skillCategories = [
    {
      title: 'Languages',
      icon: '/images/skills/code-icon.png',
      fallbackIcon: '💻',
      skills: [
        { name: 'JavaScript', icon: '/images/skills/javascript.png' },
        { name: 'Java', icon: '/images/skills/Java.png' },
        { name: 'TypeScript', icon: '/images/skills/Typescript.png' },
        { name: 'SQL', icon: '/images/skills/SQL.png' },
        { name: 'Bash/Shell', icon: '/images/skills/bash.png' },
        { name: 'Rust', icon: '/images/skills/Rust.png' },
        { name: 'Solidity', icon: '/images/skills/Solidity.png' }
      ]
    },
    {
      title: 'Web Automation',
      icon: '/images/skills/web-icon.png',
      fallbackIcon: '🌐',
      skills: [
        { name: 'Selenium', icon: '/images/skills/Selenium.png' },
        { name: 'Cypress', icon: '/images/skills/cypress.png' },
        { name: 'Playwright', icon: '/images/skills/playwright.png' },
        { name: 'Puppeteer', icon: '/images/skills/puppeteer.png' },
        { name: 'Cucumber', icon: '/images/skills/cucumber.png' }
      ]
    },
    {
      title: 'Mobile Automation',
      icon: '/images/skills/mobile-icon.png',
      fallbackIcon: '📱',
      skills: [
        { name: 'Appium', icon: '/images/skills/appium.png' },
        { name: 'Android Emulator', icon: '/images/skills/android.png' }
      ]
    },
    {
      title: 'API Automation',
      icon: '/images/skills/api-icon.png',
      fallbackIcon: '🔗',
      skills: [
        { name: 'Postman', icon: '/images/skills/postman.png' },
        { name: 'REST Assured', icon: '/images/skills/rest-assured.png' },
        { name: 'Swagger', icon: '/images/skills/swagger.png' },
        { name: 'GraphQL', icon: '/images/skills/graphql.png' },
        { name: 'SOAP UI', icon: '/images/skills/soapui.png' }
      ]
    },
    {
      title: 'Frameworks',
      icon: '/images/skills/framework-icon.png',
      fallbackIcon: '⚡',
      skills: [
        { name: 'TestNG', icon: '/images/skills/testng.png' },
        { name: 'Mocha', icon: '/images/skills/mocha.png' },
        { name: 'Robot Framework', icon: '/images/skills/robot.png' },
        { name: 'Anchor', icon: '/images/skills/anchor.png' },
        { name: 'Foundry', icon: '/images/skills/foundry.png' },
        { name: 'Hardhat', icon: '/images/skills/hardhat.png' }
      ]
    },
    {
      title: 'Unit | Integration Tests',
      icon: '/images/skills/test-icon.png',
      fallbackIcon: '🧪',
      skills: [
        { name: 'Jest', icon: '/images/skills/jest.png' },
        { name: 'JUnit', icon: '/images/skills/junit.png' },
        { name: 'Pytest', icon: '/images/skills/pytest.png' },
        { name: 'Mockito', icon: '/images/skills/mockito.png' }
      ]
    },
    {
      title: 'Performance Tests',
      icon: '/images/skills/performance-icon.png',
      fallbackIcon: '⚡',
      skills: [
        { name: 'JMeter', icon: '/images/skills/jmeter.png' },
        { name: 'K6', icon: '/images/skills/K6.png' }
      ]
    },
    {
      title: 'VCS | CI/CD | Environments',
      icon: '/images/skills/devops-icon.png',
      fallbackIcon: '⚙️',
      skills: [
        { name: 'Git', icon: '/images/skills/git.png' },
        { name: 'GitHub Actions', icon: '/images/skills/github-actions.png' },
        { name: 'Jenkins', icon: '/images/skills/jenkins.png' },
        { name: 'GitLab CI', icon: '/images/skills/gitlab.png' },
        { name: 'Docker', icon: '/images/skills/docker.png' },
        { name: 'Kubernetes', icon: '/images/skills/kubernetes.png' }
      ]
    },
    {
      title: 'Test Management',
      icon: '/images/skills/management-icon.png',
      fallbackIcon: '📋',
      skills: [
        { name: 'Jira', icon: '/images/skills/jira.jpg' },
        { name: 'TestRail', icon: '/images/skills/testrail.png' },
        { name: 'Zephyr', icon: '/images/skills/zephyr.png' },
        { name: 'ClickUp', icon: '/images/skills/clickup.jpg' },
        { name: 'TestLink', icon: '/images/skills/testlink.png' },
        { name: 'Confluence', icon: '/images/skills/confluence.jpg' },
        { name: 'Trello', icon: '/images/skills/trello.jpg' }
      ]
    },
    {
      title: 'Reporting',
      icon: '/images/skills/reporting-icon.png',
      fallbackIcon: '📊',
      skills: [
        { name: 'Allure', icon: '/images/skills/allure.png' },
      ]
    },
    {
      title: 'HTTP Monitor | Debugging Proxy | Security Analysis',
      icon: '/images/skills/security-icon.png',
      fallbackIcon: '🔒',
      skills: [
        { name: 'Charles Proxy', icon: '/images/skills/charles.jpg' },
        { name: 'Fiddler', icon: '/images/skills/fiddler.png' },
        { name: 'Burp Suite', icon: '/images/skills/burp.png' },
        { name: 'OWASP ZAP', icon: '/images/skills/zap.png' },
        { name: 'Wireshark', icon: '/images/skills/wireshark.png' }
      ]
    },
    {
      title: 'Other',
      icon: '/images/skills/other-icon.png',
      fallbackIcon: '🛠️',
      skills: [
        { name: 'Blockchain Testing', icon: '/images/skills/blockchain.png' },
        { name: 'Smart Contracts', icon: '/images/skills/smart-contract.png' },
        { name: 'Security Testing', icon: '/images/skills/security.jpg' },
        { name: 'Accessibility Testing', icon: '/images/skills/accessibility.png' },
        { name: 'Cross-browser Testing', icon: '/images/skills/cross-browser.png' },
        { name: 'Database Testing', icon: '/images/skills/database.png' }
      ]
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
        }}>Technical Skills</h2>
        <p className="section-subtitle" style={{
          fontSize: isSmallMobile ? '0.95rem' : '1.1rem',
          lineHeight: isSmallMobile ? '1.5' : '1.6'
        }}>
          A comprehensive overview of my technical expertise across various testing domains and technologies
        </p>
      </div>
      
      <div className="skills-grid" style={{
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: isSmallMobile ? '1.2rem' : '1.5rem'
      }}>
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="skill-category"
            onMouseEnter={() => !isMobile && setHoveredCategory(index)}
            onMouseLeave={() => !isMobile && setHoveredCategory(null)}
            onClick={() => isMobile && setHoveredCategory(hoveredCategory === index ? null : index)}
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minHeight: hoveredCategory === index ? 'auto' : (isSmallMobile ? '100px' : '120px'),
              padding: isSmallMobile ? '1.2rem' : '1.5rem'
            }}
          >
            <div className="skill-header" style={{
              marginBottom: isSmallMobile ? '0.8rem' : '1rem'
            }}>
              <div className="skill-icon" style={{
                width: isSmallMobile ? '40px' : '50px',
                height: isSmallMobile ? '40px' : '50px',
                marginRight: isSmallMobile ? '0.8rem' : '1rem'
              }}>
                <LazyImage
                  src={category.icon}
                  alt={`${category.title} icon`}
                  className="category-icon"
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
                      <span style={{ fontSize: isSmallMobile ? '1.2rem' : '1.5rem' }}>{category.fallbackIcon}</span>
                    </div>
                  }
                  fallback={
                    <div className="category-fallback" style={{ display: 'flex' }}>
                      <span className="fallback-emoji">{category.fallbackIcon}</span>
                    </div>
                  }
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '8px',
                    background: 'white',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="skill-title" style={{
                  fontSize: isSmallMobile ? '1rem' : '1.1rem'
                }}>{category.title}</h3>
                {hoveredCategory !== index && (
                  <p style={{
                    fontSize: isSmallMobile ? '0.8rem' : '0.85rem',
                    color: '#0ea5e9',
                    marginTop: '0.3rem',
                    fontStyle: 'italic',
                    opacity: 0.8
                  }}>
                    {isMobile ? 'tap to see skills →' : 'see skills →'}
                  </p>
                )}
              </div>
            </div>
            {hoveredCategory === index && (
              <div 
                className="skill-list"
                style={{
                  opacity: hoveredCategory === index ? 1 : 0,
                  maxHeight: hoveredCategory === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  marginTop: '1rem',
                  gap: isSmallMobile ? '0.4rem' : '0.5rem'
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{
                      animation: hoveredCategory === index ? `fadeInUp 0.3s ease forwards ${skillIndex * 0.05}s` : 'none',
                      opacity: 0,
                      padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                      fontSize: isSmallMobile ? '0.85rem' : '0.9rem'
                    }}
                  >
                    <LazyImage
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="skill-icon-img"
                      placeholder={
                        <div style={{
                          width: isSmallMobile ? '14px' : '16px',
                          height: isSmallMobile ? '14px' : '16px',
                          backgroundColor: '#e2e8f0',
                          borderRadius: '2px',
                          animation: 'pulse 1.5s ease-in-out infinite'
                        }} />
                      }
                      fallback={
                        <div style={{
                          width: isSmallMobile ? '14px' : '16px',
                          height: isSmallMobile ? '14px' : '16px',
                          backgroundColor: '#0ea5e9',
                          borderRadius: '2px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: isSmallMobile ? '7px' : '8px',
                          color: 'white',
                          fontWeight: 'bold'
                        }}>
                          {skill.name.charAt(0)}
                        </div>
                      }
                      style={{
                        width: isSmallMobile ? '14px' : '16px',
                        height: isSmallMobile ? '14px' : '16px',
                        objectFit: 'contain'
                      }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;