import React, { useState, useEffect } from 'react';
import { FaUser, FaBlog, FaBriefcase, FaCogs, FaGraduationCap, FaEnvelope, FaProjectDiagram, FaCertificate, FaBars, FaTimes } from 'react-icons/fa';
import LazyImage from './LazyImage';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navItems = [
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'blog', label: 'Blog', icon: <FaBlog /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'skills', label: 'Skills', icon: <FaCogs /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'certificates', label: 'Certificates', icon: <FaCertificate /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  // Close mobile menu when clicking outside or on a nav item
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMobileOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMobileOpen && !event.target.closest('.sidebar') && !event.target.closest('.mobile-nav-toggle')) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileOpen]);

  const handleNavClick = (id) => {
    if (id === 'blog') {
      window.open('https://medium.com/@farzaadshojaei', '_blank');
    } else {
      setActiveSection(id);
    }
    // Close mobile menu when navigation item is clicked
    setIsMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Navigation Toggle Button */}
      <button 
        className="mobile-nav-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        type="button"
      >
        {isMobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Overlay */}
      <div 
        className={`sidebar-overlay ${isMobileOpen ? 'active' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="profile-img">
            <LazyImage
              src="/profile-picture.jpg"
              alt="Farzaad Shojaei"
              className="profile-image"
              placeholder={
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'pulse 1.5s ease-in-out infinite'
                }}>
                  <span style={{
                    fontSize: '2.5rem',
                    color: '#0ea5e9',
                    fontWeight: '600'
                  }}>
                    FS
                  </span>
                </div>
              }
              fallback={
                <div className="profile-initials" style={{ display: 'flex' }}>
                  FS
                </div>
              }
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
            />
          </div>
          <h2 className="sidebar-name">Farzaad Shojaei</h2>
          <p className="sidebar-title">Software QA Engineer | Blockchain & Security Enthusiast</p>
        </div>
        
        <nav>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="icon">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar; 