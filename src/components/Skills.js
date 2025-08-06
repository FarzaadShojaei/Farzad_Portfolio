import React, { useState } from 'react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const skillCategories = [
    {
      title: 'Languages',
      icon: '/images/skills/code-icon.png',
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
      skills: [
        { name: 'Appium', icon: '/images/skills/appium.png' },
        { name: 'Android Emulator', icon: '/images/skills/android.png' }
      ]
    },
    {
      title: 'API Automation',
      icon: '/images/skills/api-icon.png',
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
      skills: [
        { name: 'JMeter', icon: '/images/skills/jmeter.png' },
        { name: 'K6', icon: '/images/skills/k6.png' }
      ]
    },
    {
      title: 'VCS | CI/CD | Environments',
      icon: '/images/skills/devops-icon.png',
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
      skills: [
        { name: 'Jira', icon: '/images/skills/jira.png' },
        { name: 'TestRail', icon: '/images/skills/testrail.png' },
        { name: 'Zephyr', icon: '/images/skills/zephyr.png' },
        { name: 'ClickUp', icon: '/images/skills/clickup.png' },
        { name: 'TestLink', icon: '/images/skills/testlink.png' },
        { name: 'Confluence', icon: '/images/skills/confluence.png' },
        { name: 'Trello', icon: '/images/skills/trello.png' }
      ]
    },
    {
      title: 'Reporting',
      icon: '/images/skills/reporting-icon.png',
      skills: [
        { name: 'Allure', icon: '/images/skills/allure.png' },
      ]
    },
    {
      title: 'HTTP Monitor | Debugging Proxy | Security Analysis',
      icon: '/images/skills/security-icon.png',
      skills: [
        { name: 'Charles Proxy', icon: '/images/skills/charles.png' },
        { name: 'Fiddler', icon: '/images/skills/fiddler.png' },
        { name: 'Burp Suite', icon: '/images/skills/burp.png' },
        { name: 'OWASP ZAP', icon: '/images/skills/zap.png' },
        { name: 'Wireshark', icon: '/images/skills/wireshark.png' }
      ]
    },
    {
      title: 'Other',
      icon: '/images/skills/other-icon.png',
      skills: [
        { name: 'Blockchain Testing', icon: '/images/skills/blockchain.png' },
        { name: 'Smart Contracts', icon: '/images/skills/smart-contract.png' },
        { name: 'Security Testing', icon: '/images/skills/security.png' },
        { name: 'Accessibility Testing', icon: '/images/skills/accessibility.png' },
        { name: 'Cross-browser Testing', icon: '/images/skills/cross-browser.png' },
        { name: 'Database Testing', icon: '/images/skills/database.png' }
      ]
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical expertise across various testing domains and technologies
        </p>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="skill-category"
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minHeight: hoveredCategory === index ? 'auto' : '120px'
            }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <img 
                  src={category.icon} 
                  alt={`${category.title} icon`}
                  className="category-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="category-fallback" style={{display: 'none'}}>
                  {category.title.charAt(0)}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="skill-title">{category.title}</h3>
                {hoveredCategory !== index && (
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#0ea5e9',
                    marginTop: '0.3rem',
                    fontStyle: 'italic',
                    opacity: 0.8
                  }}>
                    see skills →
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
                  marginTop: '1rem'
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{
                      animation: hoveredCategory === index ? `fadeInUp 0.3s ease forwards ${skillIndex * 0.05}s` : 'none',
                      opacity: 0
                    }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`}
                      className="skill-icon-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
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