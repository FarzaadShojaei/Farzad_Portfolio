import React from 'react';

const Education = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = React.useState(window.innerWidth <= 480);

  // Handle responsive state
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const education = [
    {
      institution: 'University of Science and Culture',
      institutionUrl: 'https://usc.ac.ir', // Add your university URL here
      degree: 'Bachelor of Science in Computer Science',
      icon: <span style={{ fontSize: '2rem' }}>🎓</span>,
      duration: '2019 - 2023',
      details: 'Focused on software engineering, algorithms, and data structures. Completed coursework in software testing, quality assurance, and project management. Participated in coding competitions and hackathons. Final project involved developing an automated testing framework for web applications.',
      gpa: '3.3/5',
      achievements: [
        'Led the Discrete Mathematics Class as a TA for a Year',
        
      ]
    },
    {
      institution: 'Seyedalshohada High School',
      institutionUrl: 'http://high.seyedalshohada.sch.ir/', // Add your school URL here
      degree: 'High School Diploma',
      icon: <span style={{ fontSize: '2rem' }}>🏫</span>,
      duration: '2015 - 2019',
      details: 'Graduated with honors, specializing in Mathematics and Science.',
      gpa: '3.4/5'
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
        }}>Education</h2>
        <p className="section-subtitle" style={{
          fontSize: isSmallMobile ? '0.95rem' : '1.1rem',
          lineHeight: isSmallMobile ? '1.5' : '1.6'
        }}>
          My academic journey and the foundation that shaped my career in technology and quality assurance
        </p>
      </div>
      
      <div className="education-grid" style={{
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: isSmallMobile ? '1.2rem' : '2rem'
      }}>
        {education.map((edu, index) => (
          <div key={index} className="education-card" style={{
            padding: isSmallMobile ? '1.2rem' : isMobile ? '1.5rem' : '2rem',
            borderRadius: isSmallMobile ? '12px' : '15px'
          }}>
            <div className="education-header" style={{
              flexDirection: isMobile ? 'column' : 'row',
              textAlign: isMobile ? 'center' : 'left',
              gap: isMobile ? '0.8rem' : '0',
              marginBottom: isSmallMobile ? '1.2rem' : '1.5rem'
            }}>
              <div className="education-icon" style={{
                width: isSmallMobile ? '50px' : '60px',
                height: isSmallMobile ? '50px' : '60px',
                marginRight: isMobile ? '0' : '1rem',
                marginBottom: isMobile ? '0' : '0',
                fontSize: isSmallMobile ? '1.5rem' : '2rem'
              }}>
                {edu.icon}
              </div>
              <div className="education-info">
                <h3 style={{
                  fontSize: isSmallMobile ? '1.2rem' : '1.3rem',
                  marginBottom: isSmallMobile ? '0.3rem' : '0.5rem'
                }}>
                  <a 
                    href={edu.institutionUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="institution-link"
                  >
                    {edu.institution}
                  </a>
                </h3>
                <p className="degree" style={{
                  fontSize: isSmallMobile ? '0.95rem' : '1rem'
                }}>{edu.degree}</p>
                <p className="duration" style={{ 
                  fontSize: isSmallMobile ? '0.85rem' : '0.9rem', 
                  color: '#888', 
                  marginTop: '0.5rem' 
                }}>
                  {edu.duration}
                </p>
                {edu.gpa && (
                  <p className="gpa" style={{ 
                    fontSize: isSmallMobile ? '0.85rem' : '0.9rem', 
                    color: '#667eea', 
                    fontWeight: '600', 
                    marginTop: '0.5rem' 
                  }}>
                    {edu.gpa}
                  </p>
                )}
              </div>
            </div>
            
            <div className="education-details" style={{
              fontSize: isSmallMobile ? '0.95rem' : '1rem',
              lineHeight: isSmallMobile ? '1.5' : '1.6'
            }}>
              <p style={{ 
                marginBottom: isSmallMobile ? '1.2rem' : '1.5rem' 
              }}>{edu.details}</p>
              
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h4 style={{ 
                    fontSize: isSmallMobile ? '1rem' : '1.1rem', 
                    color: '#333', 
                    marginBottom: isSmallMobile ? '0.8rem' : '1rem', 
                    fontWeight: '600' 
                  }}>
                    Key Achievements:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} style={{ 
                        marginBottom: isSmallMobile ? '0.4rem' : '0.5rem', 
                        paddingLeft: isSmallMobile ? '1.2rem' : '1.5rem', 
                        position: 'relative',
                        color: '#555',
                        fontSize: isSmallMobile ? '0.9rem' : '1rem'
                      }}>
                        <span style={{ 
                          position: 'absolute', 
                          left: '0', 
                          color: '#667eea',
                          fontWeight: 'bold'
                        }}>
                          •
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 