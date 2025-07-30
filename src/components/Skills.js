import React from 'react';
import { 
  FaCode, FaGlobe, FaMobile, FaServer, FaCogs, FaFlask, 
  FaTachometerAlt, FaGitAlt, FaClipboardList, FaChartBar, 
  FaBug, FaTools 
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode />,
      skills: ['JavaScript', 'Python', 'Java', 'TypeScript',"JavaScript" , 'SQL', 'Bash/Shell','Rust','Solidity']
    },
    {
      title: 'Web Automation',
      icon: <FaGlobe />,
      skills: ['Selenium', 'Cypress', 'Playwright', 'Appium', 'Puppeteer', 'WebDriverIO']
    },
    {
      title: 'Mobile Automation',
      icon: <FaMobile />,
      skills: ['Appium', 'Android Emulator']
    },
    {
      title: 'API Automation',
      icon: <FaServer />,
      skills: ['Postman', 'REST Assured', 'Newman', 'Swagger', 'GraphQL', 'SOAP UI', 'Axios']
    },
    {
      title: 'Frameworks',
      icon: <FaCogs />,
      skills: ['TestNG', 'Jest', 'Mocha', 'Pytest', 'Robot Framework', 'Cucumber','Anchor','Foundry','Hardhat']
    },
    {
      title: 'Unit | Integration Tests',
      icon: <FaFlask />,
      skills: ['Jest', 'JUnit', 'Pytest', 'Mockito']
    },
    {
      title: 'Performance Tests',
      icon: <FaTachometerAlt />,
      skills: ['JMeter', 'K6']
    },
    {
      title: 'VCS | CI/CD | Environments',
      icon: <FaGitAlt />,
      skills: ['Git', 'GitHub Actions', 'Jenkins', 'GitLab CI', 'Docker', 'Kubernetes']
    },
    {
      title: 'Test Management',
      icon: <FaClipboardList />,
      skills: ['Jira', 'TestRail', 'Zephyr','ClickUp' ,'TestLink', 'Confluence', 'Trello']
    },
    {
      title: 'Reporting',
      icon: <FaChartBar />,
      skills: ['Allure', 'ExtentReports', 'TestNG Reports', 'Cucumber Reports']
    },
    {
      title: 'HTTP Monitor | Debugging Proxy | Security Analysis',
      icon: <FaBug />,
      skills: ['Charles Proxy', 'Fiddler', 'Burp Suite', 'OWASP ZAP', 'Wireshark']
    },
    {
      title: 'Other',
      icon: <FaTools />,
      skills: ['Blockchain Testing', 'Smart Contracts', 'Security Testing', 'Accessibility Testing', 'Cross-browser Testing', 'Database Testing']
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
          <div key={index} className="skill-category">
            <div className="skill-header">
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3 className="skill-title">{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 