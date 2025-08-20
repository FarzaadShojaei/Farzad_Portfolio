import React, { useState } from 'react';

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  
  const certificates = [
    {
      id: 1,
      title: 'Certified Selenium Professional',
      issuer: 'Selenium Certification Board',
      issuedDate: 'December 2023',
      credentialId: 'SEL-2023-7891',
      image: '/images/certificates/selenium-cert.png',
      description: 'Advanced certification in Selenium WebDriver automation and best practices',
      skills: ['Selenium WebDriver', 'Test Automation', 'Cross-browser Testing']
    },
    {
      id: 2,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issuedDate: 'October 2023',
      credentialId: 'AWS-CCP-2023-5642',
      image: '/images/certificates/aws-cert.png',
      description: 'Foundational understanding of AWS cloud services and architecture',
      skills: ['AWS Cloud', 'Cloud Architecture', 'Cloud Security']
    },
    {
      id: 3,
      title: 'ISTQB Foundation Level',
      issuer: 'International Software Testing Qualifications Board',
      issuedDate: 'June 2022',
      credentialId: 'ISTQB-FL-2022-3421',
      image: '/images/certificates/istqb-cert.png',
      description: 'Fundamental knowledge of software testing principles and practices',
      skills: ['Software Testing', 'Test Planning', 'Test Design Techniques']
    },
    {
      id: 4,
      title: 'Certified Blockchain Developer',
      issuer: 'Blockchain Council',
      issuedDate: 'August 2023',
      credentialId: 'BLC-DEV-2023-9876',
      image: '/images/certificates/blockchain-cert.png',
      description: 'Comprehensive knowledge of blockchain technology and smart contract development',
      skills: ['Blockchain', 'Smart Contracts', 'Solidity', 'Web3']
    },
    {
      id: 5,
      title: 'Cypress Test Automation',
      issuer: 'Test Automation University',
      issuedDate: 'November 2023',
      credentialId: 'TAU-CYP-2023-1234',
      image: '/images/certificates/cypress-cert.png',
      description: 'Expert-level proficiency in Cypress testing framework',
      skills: ['Cypress', 'JavaScript Testing', 'E2E Testing']
    },
    {
      id: 6,
      title: 'API Testing with Postman',
      issuer: 'Postman Academy',
      issuedDate: 'September 2023',
      credentialId: 'POST-API-2023-5678',
      image: '/images/certificates/postman-cert.png',
      description: 'Advanced API testing methodologies using Postman',
      skills: ['API Testing', 'Postman', 'REST APIs', 'GraphQL']
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Certifications & Credentials</h2>
        <p className="section-subtitle">
          Professional certifications that validate my expertise in software testing, automation, and emerging technologies
        </p>
      </div>
      
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id} 
            className="certificate-card"
            onMouseEnter={() => setHoveredCert(index)}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <div className="certificate-image-container">
              <img 
                src={cert.image} 
                alt={`${cert.title} Certificate`}
                className="certificate-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="certificate-fallback" style={{display: 'none'}}>
                <div className="certificate-icon">🏆</div>
              </div>
            </div>
            
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              
              <div className="certificate-details">
                <div className="certificate-date">
                  <span className="label">Issued:</span>
                  <span className="value">{cert.issuedDate}</span>
                </div>
                <div className="certificate-credential">
                  <span className="label">Credential ID:</span>
                  <span className="value credential-id">{cert.credentialId}</span>
                </div>
              </div>

              {hoveredCert === index && (
                <div className="certificate-expanded">
                  <p className="certificate-description">{cert.description}</p>
                  <div className="certificate-skills">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

