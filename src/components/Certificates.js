import React, { useState } from 'react';
import LazyImage from './LazyImage';

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  
  const certificates = [
    {
      id: 1,
      title: 'Blockchain Basics Certification',
      issuer: 'Cyfrin Updraft',
      issuedDate: 'August 2025',
      credentialId: 'BBCC-ONMFTOTPQYMVB',
      image: '/images/certificates/blockchain-basics.png',
      description: 'Comprehensive certification covering fundamental blockchain concepts, decentralized systems, and cryptocurrency technologies. This course provided deep insights into blockchain architecture, consensus mechanisms, and real-world applications.',
      skills: ['Blockchain Fundamentals', 'Cryptocurrency', 'Decentralized Systems', 'Wallets', 'Smart Contracts', 'Web3 Technology']
    },
    {
      id: 2,
      title: 'Web3 Wallet Security Basics',
      issuer: 'Cyfrin Updraft',
      issuedDate: 'August 2025',
      credentialId: 'ODLYUFKLT1HT',
      image: '/images/certificates/your-new-certificate.png',
      description: '',
      skills: ['Web3','Wallet Security']
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
              <LazyImage
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="certificate-image"
                placeholder={
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulse 1.5s ease-in-out infinite'
                  }}>
                    <span style={{ fontSize: '3rem' }}>🏆</span>
                  </div>
                }
                fallback={
                  <div className="certificate-fallback" style={{ display: 'flex' }}>
                    <div className="certificate-icon">🏆</div>
                  </div>
                }
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
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

