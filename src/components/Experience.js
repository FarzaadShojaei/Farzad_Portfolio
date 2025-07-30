import React from 'react';
import { FaBuilding, FaCode, FaMobile, FaGlobe, FaRocket, FaShieldAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'Smartech',
      role: 'Software QA Engineer',
      icon: <FaRocket />,
      description: 'Led the development of automated testing frameworks for enterprise applications. Implemented CI/CD pipelines, reduced testing time by 60%, and mentored junior QA engineers. Specialized in API testing, performance testing, and security validation.',
      duration: 'August 2024 - Present'
    },
    {
      company: 'Mofid Securities',
      role: 'Software Test Engineer',
      icon: <FaCode />,
      description: 'Developed comprehensive test automation suites using Selenium, Cypress, and Playwright. Created mobile testing strategies for iOS and Android applications. Integrated automated tests with Jenkins and GitHub Actions.',
      duration: 'January 2023 - August 2024'
    },
    {
      company: 'Panco.app',
      role: 'Software Tester Intern',
      icon: <FaGlobe />,
      description: 'Performed manual and automated testing for web applications. Collaborated with development teams using Agile methodologies. Implemented test management processes and maintained test documentation.',
      duration: 'June 2022 - November 2022'
    }
    

  ];

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          My journey in software testing and quality assurance, working with diverse technologies and teams
        </p>
      </div>
      
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="company-header">
              <div className="company-icon">
                {exp.icon}
              </div>
              <div className="company-info">
                <h3>{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="duration" style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
                  {exp.duration}
                </p>
              </div>
            </div>
            <div className="experience-description">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 