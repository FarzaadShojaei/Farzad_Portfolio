import React, { useState } from 'react';
import LazyImage from './LazyImage';
import { useLanguage } from '../i18n/LanguageContext';

const Experience = () => {
  const { t, lang } = useLanguage();
  const [expandedCards, setExpandedCards] = useState({});
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

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      company: 'Smartech',
      role: { en: 'Software QA Engineer', it: 'Ingegnere QA del Software' },
      logo: '/images/companies/smartech.png',
      url: 'https://smartech.ir',
      description: {
        en: 'Iran’s largest Mar-tech and Ad-tech solution providing startup that brings serves companies with more than 15 million active Users and customers.',
        it: 'La più grande startup iraniana di soluzioni Mar-tech e Ad-tech, che serve aziende con oltre 15 milioni di utenti e clienti attivi.',
      },
      detailedPoints: {
        en: [
          'Developed an AI-powered Playwright test automation framework integrated with LLM and MCP for self-healing and adaptive locator detection, significantly boosting automated test execution speed and reliability by 30%',
          'Orchestrated a comprehensive Software Testing Life Cycle (STLC), aligning QA deliverables with sprint milestones for increased transparency and predictability',
          'Automated QA workflows for bug fixes and pre-release cycles using n8n, cutting test execution time by 50% and accelerating QA cycles for faster releases',
        ],
        it: [
          'Sviluppato un framework di automazione dei test Playwright basato sull’IA, integrato con LLM e MCP per il self-healing e il rilevamento adattivo dei locator, aumentando significativamente velocità e affidabilità dell’esecuzione dei test automatizzati del 30%',
          'Orchestrato un Software Testing Life Cycle (STLC) completo, allineando i deliverable QA alle milestone degli sprint per maggiore trasparenza e prevedibilità',
          'Automatizzato i flussi di lavoro QA per bug fix e cicli pre-release con n8n, riducendo del 50% il tempo di esecuzione dei test e accelerando i cicli QA per rilasci più rapidi',
        ],
      },
      duration: 'August 2024 - February 2026'
    },
    {
      company: 'Mofid Securities',
      role: { en: 'Software Test Engineer', it: 'Ingegnere di Test del Software' },
      logo: '/images/companies/mofid.png',
      url: 'https://www.emofid.com/',
      description: {
        en: 'Iran’s largest full-service stock brokerage firm with leading private investment advisory with more than 10 million active users',
        it: 'La più grande società di intermediazione azionaria full-service dell’Iran, leader nella consulenza per investimenti privati, con oltre 10 milioni di utenti attivi',
      },
      detailedPoints: {
        en: [
          'Designed and maintained 400+ test cases in Jira, optimizing test coverage and refining product validation, as reflected in Scrum reports',
          'Expanded automated API tests in Postman, contributing to a 30% improvement in response times as verified by K6',
          'Built robust end-to-end test flows for mobile & Web clients using Appium and Cypress, reducing manual acceptance efforts by 50% based on test cases',
          'Collaborated with DevOps to improve GitLab CI workflows for smoother web and mobile versioning, resulting in faster 50% production releases.',
        ],
        it: [
          'Progettato e mantenuto oltre 400 casi di test in Jira, ottimizzando la copertura dei test e affinando la validazione del prodotto, come evidenziato nei report Scrum',
          'Ampliato i test API automatizzati in Postman, contribuendo a un miglioramento del 30% nei tempi di risposta come verificato con K6',
          'Costruito flussi di test end-to-end robusti per client mobile e web con Appium e Cypress, riducendo del 50% gli sforzi di accettazione manuale sulla base dei casi di test',
          'Collaborato con il team DevOps per migliorare i flussi GitLab CI per un versioning web e mobile più fluido, ottenendo rilasci in produzione più rapidi del 50%.',
        ],
      },
      duration: 'January 2023 - August 2024'
    },
    {
      company: 'Panco.app',
      role: { en: 'Software Tester Intern', it: 'Tirocinante Tester del Software' },
      logo: '/images/companies/panco.png',
      url: 'https://panco.me',
      description: {
        en: 'The First Social Networking Platform in Iran with more than 1 Million active users per day, Focused on playing multiple mobile games and Communicating with each other',
        it: 'La prima piattaforma di social networking in Iran con oltre 1 milione di utenti attivi al giorno, focalizzata sul gioco di molteplici giochi mobile e sulla comunicazione tra utenti',
      },
      detailedPoints: {
        en: [
          'Detected and addressed over 80 software vulnerabilities, improving system resilience by 40% and reducing end-user complaints',
          'Authored and executed 100+ manual test cases, exposing multiple critical crash scenarios in game-play environments',
        ],
        it: [
          'Individuato e risolto oltre 80 vulnerabilità software, migliorando la resilienza del sistema del 40% e riducendo i reclami degli utenti finali',
          'Redatto ed eseguito oltre 100 casi di test manuali, evidenziando molteplici scenari critici di crash negli ambienti di gioco',
        ],
      },
      duration: 'June 2022 - November 2022'
    },
    {
      company: 'Freelance Web Development',
      role: { en: 'Back End Developer', it: 'Sviluppatore Back End' },
      logo: '/images/companies/Freelance.png',
      url: '',
      description: {
        en: 'Freelance — built and maintained back-end services and REST APIs for client web projects, taking features from database schema through to deployment.',
        it: 'Freelance — sviluppo e manutenzione di servizi back-end e API REST per progetti web di clienti, seguendo le funzionalità dallo schema del database fino al deployment.',
      },
      detailedPoints: {
        en: [
          'Built and maintained back-end services and REST APIs for client web projects, taking features from database schema through to deployment, and grew from writing first scripts to owning production endpoints end to end',
          'Traced a recurring support bottleneck to unstructured ticket handling and built a scheduled ticket-response system, cutting resolution time by 20% and giving the product team a clear view of recurring customer issues',
          'Diagnosed slow-loading client dashboards caused by unindexed queries and N+1 database calls; restructured the queries and added indexing, taking page loads from several seconds down to near-instant',
          'Hardened client-facing forms and endpoints after finding unvalidated inputs, adding server-side validation and sanitization to close off injection and bad-data risks — an early spark for the security focus I carry into QA today',
        ],
        it: [
          'Sviluppato e mantenuto servizi back-end e API REST per progetti web di clienti, seguendo le funzionalità dallo schema del database fino al deployment, crescendo da semplici script alla piena gestione end-to-end degli endpoint in produzione',
          'Individuato un collo di bottiglia ricorrente nella gestione non strutturata dei ticket di supporto e costruito un sistema di risposta ai ticket pianificato, riducendo del 20% i tempi di risoluzione e offrendo al team di prodotto una visione chiara dei problemi ricorrenti dei clienti',
          'Diagnosticato dashboard clienti lente a causa di query senza indici e chiamate N+1 al database; ristrutturato le query e aggiunto indicizzazione, portando i tempi di caricamento da alcuni secondi a quasi istantanei',
          'Rafforzato form ed endpoint rivolti ai clienti dopo aver individuato input non validati, aggiungendo validazione e sanitizzazione lato server per eliminare rischi di injection e dati non validi — una prima scintilla dell\'attenzione alla sicurezza che porto ancora oggi nel mio lavoro di QA',
        ],
      },
      duration: 'February 2020 - June 2022'
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
        }}>{t.experience.title}</h2>
        <p className="section-subtitle" style={{
          fontSize: isSmallMobile ? '0.95rem' : '1.1rem',
          lineHeight: isSmallMobile ? '1.5' : '1.6'
        }}>
          {t.experience.subtitle}
        </p>
      </div>

      <div className="experience-grid" style={{
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: isSmallMobile ? '1.2rem' : '2rem'
      }}>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card" style={{
            padding: isSmallMobile ? '1.2rem' : isMobile ? '1.5rem' : '2rem',
            borderRadius: isSmallMobile ? '12px' : '15px'
          }}>
            <div className="company-header" style={{
              flexDirection: isMobile ? 'column' : 'row',
              textAlign: isMobile ? 'center' : 'left',
              gap: isMobile ? '0.8rem' : '0',
              marginBottom: isSmallMobile ? '1.2rem' : '1.5rem'
            }}>
              <div className="company-icon" style={{
                width: isSmallMobile ? '50px' : '60px',
                height: isSmallMobile ? '50px' : '60px',
                marginRight: isMobile ? '0' : '1rem',
                marginBottom: isMobile ? '0' : '0'
              }}>
                <LazyImage
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="company-logo"
                  placeholder={
                    <div style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#e2e8f0',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'pulse 1.5s ease-in-out infinite'
                    }}>
                      <span style={{
                        fontSize: isSmallMobile ? '1.2rem' : '1.5rem',
                        color: '#E2001A',
                        fontWeight: '600'
                      }}>
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                  }
                  fallback={
                    <div className="company-initials" style={{ display: 'flex' }}>
                      {exp.company.charAt(0)}
                    </div>
                  }
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '5px',
                    background: 'white',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div className="company-info">
                <h3 style={{
                  fontSize: isSmallMobile ? '1.2rem' : '1.3rem',
                  marginBottom: isSmallMobile ? '0.3rem' : '0.5rem'
                }}>
                  {exp.url ? (
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
                        e.target.style.color = '#E2001A';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = 'inherit';
                      }}
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="role" style={{
                  fontSize: isSmallMobile ? '0.95rem' : '1rem'
                }}>{exp.role[lang]}</p>
                <p className="duration" style={{
                  fontSize: isSmallMobile ? '0.85rem' : '0.9rem',
                  color: '#888',
                  marginTop: '0.5rem'
                }}>
                  {exp.duration}
                </p>
              </div>
            </div>
            <div className="experience-description" style={{
              fontSize: isSmallMobile ? '0.95rem' : '1rem',
              lineHeight: isSmallMobile ? '1.5' : '1.6'
            }}>
              <p>{exp.description[lang]}</p>
              {expandedCards[index] && (
                <div className="detailed-points" style={{ marginTop: '1rem' }}>
                  <h4 style={{
                    color: '#E2001A',
                    fontSize: isSmallMobile ? '1rem' : '1.1rem',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    {t.experience.keyAchievements}
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: '0',
                    color: '#333',
                    lineHeight: isSmallMobile ? '1.5' : '1.6',
                    fontSize: isSmallMobile ? '0.9rem' : '1rem'
                  }}>
                    {exp.detailedPoints[lang].map((point, pointIndex) => (
                      <li key={pointIndex} style={{
                        marginBottom: isSmallMobile ? '0.6rem' : '0.8rem',
                        paddingLeft: isSmallMobile ? '1.2rem' : '1.5rem',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#E2001A',
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
                    : 'linear-gradient(135deg, #E2001A 0%, #8B0000 100%)',
                  color: 'white',
                  border: 'none',
                  padding: isSmallMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: isSmallMobile ? '0.85rem' : '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 10px rgba(226, 0, 26, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(226, 0, 26, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 10px rgba(226, 0, 26, 0.3)';
                }}
              >
                {expandedCards[index] ? t.experience.showLess : t.experience.seeMore}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
