import React, { useState } from 'react';

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({});

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
      url: 'https://smartech.com',
      description: 'Iran’s largest Mar-tech and Ad-tech solution providing startup that brings serves companies with more than 15 million active Users and customers.',
      detailedPoints: [
        'Implemented comprehensive CI/CD pipelines using Jenkins and GitHub Actions',
        'Reduced overall testing time by 60% through advanced automation strategies',
        'Mentored and trained 5+ junior QA engineers on best practices',
        'Specialized in API testing using Postman, REST Assured, and custom frameworks',
        'Conducted performance testing with JMeter for high-traffic applications',
        'Performed security validation and vulnerability assessments',
        'Established quality gates and testing standards across development teams'
      ],
      duration: 'August 2024 - Present'
    },
    {
      company: 'Mofid Securities',
      role: 'Software Test Engineer',
      logo: '/images/companies/mofid.png',
      url: 'https://mofidsecurities.com',
      description: 'Iran’s largest full-service stock brokerage firm with leading private investment advisory with more than 10 million active users',
      detailedPoints: [
        'Built robust automation suites with Selenium WebDriver and Cypress',
        'Implemented cross-browser testing strategies for web applications',
        'Created mobile testing frameworks for iOS and Android applications',
        'Integrated automated tests with CI/CD pipelines in Jenkins',
        'Developed API testing suites for microservices architecture',
        'Performed database validation and backend testing',
        'Collaborated with DevOps team on deployment automation'
      ],
      duration: 'January 2023 - August 2024'
    },
    {
      company: 'Panco.app',
      role: 'Software Tester Intern',
      logo: '/images/companies/panco.png',
      url: 'https://panco.app',
      description: 'The First Social Networking Platform in Iran with more than 1 Million active users per day, Focused on playing multiple mobile games and Communicating with each other',
      detailedPoints: [
        'Executed manual testing scenarios for web application features',
        'Created and maintained detailed test cases and test documentation',
        'Participated in daily standups and sprint planning sessions',
        'Identified and reported bugs using JIRA bug tracking system',
        'Collaborated closely with development teams on bug resolution',
        'Learned automation fundamentals with Selenium basics',
        'Contributed to test planning and strategy discussions'
      ],
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
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="company-initials" style={{display: 'none'}}>
                  {exp.company.charAt(0)}
                </div>
              </div>
              <div className="company-info">
                <h3>
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
                <p className="role">{exp.role}</p>
                <p className="duration" style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
                  {exp.duration}
                </p>
              </div>
            </div>
            <div className="experience-description">
              <p>{exp.description}</p>
              {expandedCards[index] && (
                <div className="detailed-points" style={{ marginTop: '1rem' }}>
                  <h4 style={{ color: '#0ea5e9', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '600' }}>
                    Key Achievements & Responsibilities:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: '0',
                    color: '#333',
                    lineHeight: '1.6'
                  }}>
                    {exp.detailedPoints.map((point, pointIndex) => (
                      <li key={pointIndex} style={{ 
                        marginBottom: '0.8rem', 
                        paddingLeft: '1.5rem',
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
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
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