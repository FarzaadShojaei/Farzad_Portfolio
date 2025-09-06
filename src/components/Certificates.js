import React, { useState } from 'react';
import LazyImage from './LazyImage';

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
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
      description: 'Essential certification focusing on Web3 wallet security fundamentals, including private key management, seed phrase protection, transaction security, and best practices for secure interaction with decentralized applications. Covers common attack vectors and mitigation strategies.',
      skills: ['Web3', 'Wallet Security', 'Private Key Management', 'DApp Security', 'Cryptocurrency Safety', 'Smart Contract Interaction']
    },
    {
      id: 3,
      title: 'Fundamentals of Zero-Knowledge Proofs (ZKPs)',
      issuer: 'Cyfrin Updraft',
      issuedDate: 'September 2025',
      credentialId: 'SCXNORHSCP1C',
      image: '/images/certificates/your-new-certificate.png',
      description: 'Advanced certification covering the mathematical foundations and practical implementations of Zero-Knowledge Proofs. This comprehensive course provided deep insights into ZK-SNARKs, ZK-STARKs, privacy-preserving protocols, and scalability solutions in blockchain technology.',
      skills: ['Web3', 'Zero-Knowledge Proofs', 'ZK-SNARKs', 'ZK-STARKs', 'Privacy Protocols', 'Cryptography', 'Blockchain Scalability']
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
        }}>Certifications & Credentials</h2>
        <p className="section-subtitle" style={{
          fontSize: isSmallMobile ? '0.95rem' : '1.1rem',
          lineHeight: isSmallMobile ? '1.5' : '1.6'
        }}>
          Professional certifications that validate my expertise in software testing, automation, and emerging technologies
        </p>
      </div>
      
      <div className="certificates-grid" style={{
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: isSmallMobile ? '1.2rem' : '2rem'
      }}>
        {certificates.map((cert, index) => (
          <div 
            key={cert.id} 
            className="certificate-card"
            onMouseEnter={() => !isMobile && setHoveredCert(index)}
            onMouseLeave={() => !isMobile && setHoveredCert(null)}
            onClick={() => isMobile && setHoveredCert(hoveredCert === index ? null : index)}
            style={{
              padding: isSmallMobile ? '1.2rem' : isMobile ? '1.5rem' : '2rem',
              borderRadius: isSmallMobile ? '12px' : '15px',
              cursor: isMobile ? 'pointer' : 'default'
            }}
          >
            <div className="certificate-image-container" style={{
              height: isSmallMobile ? '150px' : '200px',
              marginBottom: isSmallMobile ? '1.2rem' : '1.5rem'
            }}>
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
                    <span style={{ fontSize: isSmallMobile ? '2.5rem' : '3rem' }}>🏆</span>
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
              <h3 className="certificate-title" style={{
                fontSize: isSmallMobile ? '1.2rem' : '1.4rem'
              }}>{cert.title}</h3>
              <p className="certificate-issuer" style={{
                fontSize: isSmallMobile ? '0.95rem' : '1rem',
                marginBottom: isSmallMobile ? '1.2rem' : '1.5rem'
              }}>{cert.issuer}</p>
              
              <div className="certificate-details" style={{
                marginBottom: isSmallMobile ? '0.8rem' : '1rem'
              }}>
                <div className="certificate-date" style={{
                  flexDirection: isSmallMobile ? 'column' : 'row',
                  alignItems: isSmallMobile ? 'flex-start' : 'center',
                  gap: isSmallMobile ? '0.3rem' : '0',
                  marginBottom: isSmallMobile ? '0.6rem' : '0.8rem'
                }}>
                  <span className="label" style={{
                    fontSize: isSmallMobile ? '0.85rem' : '0.9rem'
                  }}>Issued:</span>
                  <span className="value" style={{
                    fontSize: isSmallMobile ? '0.85rem' : '0.9rem'
                  }}>{cert.issuedDate}</span>
                </div>
                <div className="certificate-credential" style={{
                  flexDirection: isSmallMobile ? 'column' : 'row',
                  alignItems: isSmallMobile ? 'flex-start' : 'center',
                  gap: isSmallMobile ? '0.3rem' : '0'
                }}>
                  <span className="label" style={{
                    fontSize: isSmallMobile ? '0.85rem' : '0.9rem'
                  }}>Credential ID:</span>
                  <span className="value credential-id" style={{
                    fontSize: isSmallMobile ? '0.8rem' : '0.85rem',
                    padding: isSmallMobile ? '0.2rem 0.4rem' : '0.3rem 0.6rem',
                    wordBreak: isSmallMobile ? 'break-all' : 'normal'
                  }}>{cert.credentialId}</span>
                </div>
              </div>

              {hoveredCert === index && (
                <div className="certificate-expanded">
                  <p className="certificate-description" style={{
                    fontSize: isSmallMobile ? '0.9rem' : '0.95rem',
                    lineHeight: isSmallMobile ? '1.5' : '1.6',
                    marginBottom: isSmallMobile ? '0.8rem' : '1rem'
                  }}>{cert.description}</p>
                  <div className="certificate-skills" style={{
                    gap: isSmallMobile ? '0.4rem' : '0.5rem'
                  }}>
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge" style={{
                        fontSize: isSmallMobile ? '0.75rem' : '0.8rem',
                        padding: isSmallMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {isMobile && hoveredCert !== index && (
                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.85rem',
                  color: '#0ea5e9',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  Tap to see more details
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

