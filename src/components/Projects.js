import React, { useState, useEffect } from 'react';

const Projects = () => {
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
      githubUrl: "https://github.com/FarzaadShojaei/Hardhat_Project",
      description: "A decentralized voting application built on Ethereum blockchain that ensures transparent and tamper-proof elections. Features include smart contract integration, MetaMask wallet connection, and real-time vote tracking with complete anonymity and security."
    },
    {
      title: "Hardhat Project",
      githubUrl:  "https://github.com/FarzaadShojaei/Hardhat_Project",
      description: "A comprehensive decentralized finance (DeFi) platform enabling users to swap tokens, provide liquidity, and earn rewards. Built with Solidity smart contracts, Web3.js integration, and automated market maker (AMM) functionality for seamless trading experience."
    },
    {
      title: "Simple NFT ",
      githubUrl: "https://github.com/FarzaadShojaei/Simple_Nft",
      description: "A streamlined NFT creation and management platform built with Solidity and Web3 technologies. Features smart contract development for minting unique digital assets, metadata management, and secure ownership transfer mechanisms. Includes comprehensive testing and deployment scripts for Ethereum blockchain integration."
    }
  ];

  const qaProjects = [
    {
      title: "Chatbrief",
      githubUrl: "https://github.com/FarzaadShojaei/chatBrief_TelegramBot",
      description: "A robust Selenium-based testing framework with Page Object Model (POM) architecture, data-driven testing capabilities, and comprehensive reporting. Supports cross-browser testing, parallel execution, and integration with CI/CD pipelines for continuous quality assurance."
    },
    {
      title: "Cucumber-BDD",
      githubUrl:"https://github.com/FarzaadShojaei/Cucumber-BDD",
      description: "Complete REST API testing solution using Postman, Newman, and Jest. Features automated test generation, performance testing, security validation, and detailed reporting with coverage metrics for comprehensive API quality assessment."
    },
    {
      title: "Newman",
      githubUrl: "https://github.com/FarzaadShojaei/Newman",
      description: "Cross-platform mobile testing framework using Appium and WebDriver for iOS and Android applications. Includes device farm integration, performance monitoring, accessibility testing, and automated regression test suites."
    },
    {
      title: "K6PerformanceTesting",
      githubUrl: "https://github.com/FarzaadShojaei/K6PerformanceTesting",
      description: "Scalable load testing platform built with JMeter and K6 for performance evaluation of web applications. Features distributed testing, real-time monitoring, custom metrics collection, and automated performance regression detection."
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
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(14, 165, 233, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(14, 165, 233, 0.3)';
      }}
    >
      <h3 className="project-title">
        <span className="project-link">
          {project.title}
        </span>
      </h3>
      <p className="project-description">{project.description}</p>
      <div style={{
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: '#0ea5e9',
        fontWeight: '500'
      }}>
        Click to view on GitHub →
      </div>
    </div>
  );

  return (
    <section className="section projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects Portfolio</h2>
          <p className="section-subtitle">
            Explore my work in blockchain development and quality assurance automation
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
                ? 'linear-gradient(135deg, #0ea5e9 0%, #1e40af 100%)'
                : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              color: activeTab === 'blockchain' ? 'white' : '#64748b',
              boxShadow: activeTab === 'blockchain' 
                ? '0 8px 25px rgba(14, 165, 233, 0.4)' 
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
              <span>Blockchain</span>
            ) : (
              <span>Blockchain Projects</span>
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
                ? 'linear-gradient(135deg, #0ea5e9 0%, #1e40af 100%)'
                : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              color: activeTab === 'qa' ? 'white' : '#64748b',
              boxShadow: activeTab === 'qa' 
                ? '0 8px 25px rgba(14, 165, 233, 0.4)' 
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
            {isMobile ? (
              <span>QA Projects</span>
            ) : (
              <span>QA Projects</span>
            )}
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
                Blockchain & Smart Contract Projects
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
                Quality Assurance & Testing Automation
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