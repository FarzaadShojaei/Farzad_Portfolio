import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('blockchain');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const blockchainProjects = [
    {
      title: "Foundry Project",
      githubUrl: "https://github.com/FarzaadShojaei/Foundry_Project",
      description: {
        en: "A decentralized voting application built on Ethereum blockchain that ensures transparent and tamper-proof elections. Features include smart contract integration, MetaMask wallet connection, and real-time vote tracking with complete anonymity and security.",
        it: "Un'applicazione di voto decentralizzata costruita sulla blockchain Ethereum che garantisce elezioni trasparenti e a prova di manomissione. Le funzionalità includono l'integrazione di smart contract, la connessione al wallet MetaMask e il tracciamento dei voti in tempo reale con anonimato e sicurezza completi.",
      },
    },
    {
      title: "Hardhat Project",
      githubUrl: "https://github.com/FarzaadShojaei/Hardhat_Project",
      description: {
        en: "A comprehensive decentralized finance (DeFi) platform enabling users to swap tokens, provide liquidity, and earn rewards. Built with Solidity smart contracts, Web3.js integration, and automated market maker (AMM) functionality for seamless trading experience.",
        it: "Una piattaforma completa di finanza decentralizzata (DeFi) che consente agli utenti di scambiare token, fornire liquidità e ottenere ricompense. Realizzata con smart contract Solidity, integrazione Web3.js e funzionalità di automated market maker (AMM) per un'esperienza di trading fluida.",
      },
    },
    {
      title: "Simple NFT ",
      githubUrl: "https://github.com/FarzaadShojaei/Simple_Nft",
      description: {
        en: "A streamlined NFT creation and management platform built with Solidity and Web3 technologies. Features smart contract development for minting unique digital assets, metadata management, and secure ownership transfer mechanisms. Includes comprehensive testing and deployment scripts for Ethereum blockchain integration.",
        it: "Una piattaforma semplificata per la creazione e gestione di NFT realizzata con Solidity e tecnologie Web3. Include lo sviluppo di smart contract per il minting di asset digitali unici, la gestione dei metadati e meccanismi sicuri di trasferimento della proprietà. Comprende script completi di testing e deployment per l'integrazione con la blockchain Ethereum.",
      },
    }
  ];

  const qaProjects = [
    {
      title: "Chatbrief",
      githubUrl: "https://github.com/FarzaadShojaei/chatBrief_TelegramBot",
      description: {
        en: "A robust Selenium-based testing framework with Page Object Model (POM) architecture, data-driven testing capabilities, and comprehensive reporting. Supports cross-browser testing, parallel execution, and integration with CI/CD pipelines for continuous quality assurance.",
        it: "Un robusto framework di testing basato su Selenium con architettura Page Object Model (POM), capacità di testing data-driven e reportistica completa. Supporta il cross-browser testing, l'esecuzione parallela e l'integrazione con pipeline CI/CD per il controllo qualità continuo.",
      },
    },
    {
      title: "Cucumber-BDD",
      githubUrl: "https://github.com/FarzaadShojaei/Cucumber-BDD",
      description: {
        en: "Complete REST API testing solution using Postman, Newman, and Jest. Features automated test generation, performance testing, security validation, and detailed reporting with coverage metrics for comprehensive API quality assessment.",
        it: "Soluzione completa di testing per API REST con Postman, Newman e Jest. Include generazione automatica dei test, performance testing, validazione di sicurezza e reportistica dettagliata con metriche di copertura per una valutazione completa della qualità delle API.",
      },
    },
    {
      title: "Newman",
      githubUrl: "https://github.com/FarzaadShojaei/Newman",
      description: {
        en: "Cross-platform mobile testing framework using Appium and WebDriver for iOS and Android applications. Includes device farm integration, performance monitoring, accessibility testing, and automated regression test suites.",
        it: "Framework di testing mobile cross-platform con Appium e WebDriver per applicazioni iOS e Android. Include l'integrazione con device farm, il monitoraggio delle performance, test di accessibilità e suite di test di regressione automatizzate.",
      },
    },
    {
      title: "K6PerformanceTesting",
      githubUrl: "https://github.com/FarzaadShojaei/K6PerformanceTesting",
      description: {
        en: "Scalable load testing platform built with JMeter and K6 for performance evaluation of web applications. Features distributed testing, real-time monitoring, custom metrics collection, and automated performance regression detection.",
        it: "Piattaforma scalabile di load testing realizzata con JMeter e K6 per la valutazione delle performance delle applicazioni web. Include testing distribuito, monitoraggio in tempo reale, raccolta di metriche personalizzate e rilevamento automatizzato delle regressioni di performance.",
      },
    }
  ];

  const ProjectCard = ({ project }) => (
    <div
      className="project-card"
      onClick={() => window.open(project.githubUrl, '_blank')}
      style={{
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(226, 0, 26, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(226, 0, 26, 0.3)';
      }}
    >
      <h3 className="project-title">
        <span className="project-link">
          {project.title}
        </span>
      </h3>
      <p className="project-description">{project.description[lang]}</p>
      <div style={{
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: '#E2001A',
        fontWeight: '500'
      }}>
        {t.projects.clickToView}
      </div>
    </div>
  );

  return (
    <section className="section projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
          gap: isMobile ? '0.8rem' : '0.5rem',
          flexWrap: 'wrap',
          padding: isMobile ? '0 1rem' : '0'
        }}>
          <button
            className={`tab-button ${activeTab === 'blockchain' ? 'active' : ''}`}
            onClick={() => setActiveTab('blockchain')}
            style={{
              padding: isMobile ? '0.8rem 1rem' : '1rem 2rem',
              borderRadius: '30px',
              border: 'none',
              fontSize: isMobile ? '0.9rem' : '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: activeTab === 'blockchain'
                ? 'linear-gradient(135deg, #E2001A 0%, #8B0000 100%)'
                : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              color: activeTab === 'blockchain' ? 'white' : '#64748b',
              boxShadow: activeTab === 'blockchain'
                ? '0 8px 25px rgba(226, 0, 26, 0.4)'
                : '0 4px 15px rgba(0, 0, 0, 0.1)',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}
          >
            <span style={{ fontSize: isMobile ? '1rem' : '1.1rem' }}>🔗</span>
            {isMobile ? (
              <span>{t.projects.tabBlockchainShort}</span>
            ) : (
              <span>{t.projects.tabBlockchain}</span>
            )}
          </button>
          <button
            className={`tab-button ${activeTab === 'qa' ? 'active' : ''}`}
            onClick={() => setActiveTab('qa')}
            style={{
              padding: isMobile ? '0.8rem 1rem' : '1rem 2rem',
              borderRadius: '30px',
              border: 'none',
              fontSize: isMobile ? '0.9rem' : '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: activeTab === 'qa'
                ? 'linear-gradient(135deg, #E2001A 0%, #8B0000 100%)'
                : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              color: activeTab === 'qa' ? 'white' : '#64748b',
              boxShadow: activeTab === 'qa'
                ? '0 8px 25px rgba(226, 0, 26, 0.4)'
                : '0 4px 15px rgba(0, 0, 0, 0.1)',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}
          >
            <span style={{ fontSize: isMobile ? '1rem' : '1.1rem' }}>🧪</span>
            <span>{t.projects.tabQA}</span>
          </button>
        </div>

        {/* Project Content */}
        <div style={{ minHeight: '500px' }}>
          {activeTab === 'blockchain' && (
            <div
              className="projects-category"
              style={{
                animation: 'fadeInSlide 0.5s ease forwards',
                opacity: 0
              }}
            >
              <h2 className="category-title" style={{ marginBottom: '2rem' }}>
                {t.projects.catBlockchain}
              </h2>
              <div className="projects-grid">
                {blockchainProjects.map((project, index) => (
                  <div
                    key={index}
                    style={{
                      animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'qa' && (
            <div
              className="projects-category"
              style={{
                animation: 'fadeInSlide 0.5s ease forwards',
                opacity: 0
              }}
            >
              <h2 className="category-title" style={{ marginBottom: '2rem' }}>
                {t.projects.catQA}
              </h2>
              <div className="projects-grid">
                {qaProjects.map((project, index) => (
                  <div
                    key={index}
                    style={{
                      animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
