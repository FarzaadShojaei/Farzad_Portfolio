import React, { useState } from 'react';

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  
  const certificates = [
    {
      id: 1,
      title: 'Certification: Blockchain Basics',
      issuer: 'Cyfrin Updraft',
      issuedDate: 'August 2025',
      credentialId: 'BBCC-ONMFTOTPQYMVB',
      image: '/images/certificates/selenium-cert.png',
      description: 'certification in blockchain basics',
      skills: ['Blockchain Fundematals', 'Wallets', 'Decentralized World']
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

