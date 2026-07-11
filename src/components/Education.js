import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Education = () => {
  const { t, lang } = useLanguage();
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
      institution: 'University of Milano - Biccoca',
      institutionUrl: 'https://www.unimib.it',
      degree: {
        en: 'Master of Artificial Intelligence in Science and Technology',
        it: 'Master in Intelligenza Artificiale in Scienza e Tecnologia',
      },
      icon: <span style={{ fontSize: '2rem' }}>🎓</span>,
      duration: '2025 - Present',
      details: { en: 'Studying', it: 'In corso' },
      gpa: ''
    },
    {
      institution: 'University of Science and Culture',
      institutionUrl: 'https://usc.ac.ir',
      degree: {
        en: 'Bachelor of Science in Computer Science',
        it: 'Laurea in Informatica',
      },
      icon: <span style={{ fontSize: '2rem' }}>🎓</span>,
      duration: '2019 - 2023',
      details: {
        en: 'Focused on software engineering, algorithms, and data structures. Completed coursework in software testing, quality assurance, and project management. Participated in coding competitions and hackathons. Final project involved developing an automated testing framework for web applications.',
        it: 'Focalizzato su ingegneria del software, algoritmi e strutture dati. Completati corsi di testing del software, controllo qualità e project management. Partecipazione a competizioni di coding e hackathon. Il progetto finale ha riguardato lo sviluppo di un framework di testing automatizzato per applicazioni web.',
      },
      gpa: '3.3/5',
      achievements: {
        en: ['Led the Discrete Mathematics Class as a TA for a Year'],
        it: ['Tenuto il corso di Matematica Discreta come assistente (TA) per un anno'],
      }
    },
    {
      institution: 'Seyedalshohada High School',
      institutionUrl: 'http://high.seyedalshohada.sch.ir/',
      degree: { en: 'High School Diploma', it: 'Diploma di Scuola Superiore' },
      icon: <span style={{ fontSize: '2rem' }}>🏫</span>,
      duration: '2015 - 2019',
      details: {
        en: 'Graduated with honors, specializing in Mathematics and Science.',
        it: 'Diplomato con lode, con specializzazione in Matematica e Scienze.',
      },
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
        }}>{t.education.title}</h2>
        <p className="section-subtitle" style={{
          fontSize: isSmallMobile ? '0.95rem' : '1.1rem',
          lineHeight: isSmallMobile ? '1.5' : '1.6'
        }}>
          {t.education.subtitle}
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
                }}>{edu.degree[lang]}</p>
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
                    color: '#E2001A',
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
              }}>{edu.details[lang]}</p>

              {edu.achievements && edu.achievements[lang] && edu.achievements[lang].length > 0 && (
                <div>
                  <h4 style={{
                    fontSize: isSmallMobile ? '1rem' : '1.1rem',
                    color: '#333',
                    marginBottom: isSmallMobile ? '0.8rem' : '1rem',
                    fontWeight: '600'
                  }}>
                    {t.education.keyAchievements}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {edu.achievements[lang].map((achievement, achIndex) => (
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
                          color: '#E2001A',
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
