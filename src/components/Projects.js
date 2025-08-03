import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('blockchain');
  const blockchainProjects = [
    {
      title: "Blockchain Voting System",
      githubUrl: "https://github.com/farzaadshojaei/blockchain-voting",
      description: "A decentralized voting application built on Ethereum blockchain that ensures transparent and tamper-proof elections. Features include smart contract integration, MetaMask wallet connection, and real-time vote tracking with complete anonymity and security."
    },
    {
      title: "DeFi Token Exchange",
      githubUrl: "https://github.com/farzaadshojaei/defi-exchange",
      description: "A comprehensive decentralized finance (DeFi) platform enabling users to swap tokens, provide liquidity, and earn rewards. Built with Solidity smart contracts, Web3.js integration, and automated market maker (AMM) functionality for seamless trading experience."
    },
    {
      title: "NFT Marketplace",
      githubUrl: "https://github.com/farzaadshojaei/nft-marketplace",
      description: "A full-featured NFT marketplace allowing users to mint, buy, sell, and auction digital assets. Includes IPFS integration for metadata storage, royalty distribution system, and comprehensive testing suite ensuring platform reliability and security."
    }
  ];

  const qaProjects = [
    {
      title: "Automated Testing Framework",
      githubUrl: "https://github.com/farzaadshojaei/selenium-framework",
      description: "A robust Selenium-based testing framework with Page Object Model (POM) architecture, data-driven testing capabilities, and comprehensive reporting. Supports cross-browser testing, parallel execution, and integration with CI/CD pipelines for continuous quality assurance."
    },
    {
      title: "API Testing Suite",
      githubUrl: "https://github.com/farzaadshojaei/api-testing-suite",
      description: "Complete REST API testing solution using Postman, Newman, and Jest. Features automated test generation, performance testing, security validation, and detailed reporting with coverage metrics for comprehensive API quality assessment."
    },
    {
      title: "Mobile App Testing Tools",
      githubUrl: "https://github.com/farzaadshojaei/mobile-testing-tools",
      description: "Cross-platform mobile testing framework using Appium and WebDriver for iOS and Android applications. Includes device farm integration, performance monitoring, accessibility testing, and automated regression test suites."
    },
    {
      title: "Load Testing Platform",
      githubUrl: "https://github.com/farzaadshojaei/load-testing-platform",
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
          gap: '1rem'
        }}>
          <button
            className={`tab-button ${activeTab === 'blockchain' ? 'active' : ''}`}
            onClick={() => setActiveTab('blockchain')}
            onMouseEnter={() => setActiveTab('blockchain')}
            style={{
              padding: '1rem 2rem',
              borderRadius: '30px',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: activeTab === 'blockchain' 
                ? 'linear-gradient(135deg, #0ea5e9 0%, #1e40af 100%)'
                : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              color: activeTab === 'blockchain' ? 'white' : '#64748b',
              boxShadow: activeTab === 'blockchain' 
                ? '0 8px 25px rgba(14, 165, 233, 0.4)' 
                : '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}
          >
            🔗 Blockchain Projects
          </button>
          <button
            className={`tab-button ${activeTab === 'qa' ? 'active' : ''}`}
            onClick={() => setActiveTab('qa')}
            onMouseEnter={() => setActiveTab('qa')}
            style={{
              padding: '1rem 2rem',
              borderRadius: '30px',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: activeTab === 'qa' 
                ? 'linear-gradient(135deg, #0ea5e9 0%, #1e40af 100%)'
                : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              color: activeTab === 'qa' ? 'white' : '#64748b',
              boxShadow: activeTab === 'qa' 
                ? '0 8px 25px rgba(14, 165, 233, 0.4)' 
                : '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}
          >
            🧪 QA Projects
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