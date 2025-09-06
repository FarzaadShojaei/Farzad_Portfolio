import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LazyImage from './LazyImage';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const navItems = [
    { id: 'about', label: 'About', icon: <span style={{ fontSize: '1.2rem' }}>👤</span> },
    { id: 'experience', label: 'Experience', icon: <span style={{ fontSize: '1.2rem' }}>💼</span> },
    { id: 'skills', label: 'Skills', icon: <span style={{ fontSize: '1.2rem' }}>⚙️</span> },
    { id: 'education', label: 'Education', icon: <span style={{ fontSize: '1.2rem' }}>🎓</span> },
    { id: 'projects', label: 'Projects', icon: <img src="/images/skills/github.png" alt="Projects" style={{ width: '20px', height: '20px', objectFit: 'contain' }} /> },
    { id: 'certificates', label: 'Certificates', icon: <span style={{ fontSize: '1.2rem' }}>📜</span> },
    { id: 'contact', label: 'Links', icon: <img src="/images/skills/contact.png" alt="Links" style={{ width: '20px', height: '20px', objectFit: 'contain' }} /> },
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
    setActiveSection(id);
    // Close mobile menu when navigation item is clicked
    setIsMobileOpen(false);
  };

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Prevent rapid toggling
    if (isToggling) return;
    
    setIsToggling(true);
    setIsMobileOpen(prev => !prev);
    
    // Reset toggle lock after a short delay
    setTimeout(() => {
      setIsToggling(false);
    }, 150);
  };

  // Separate handler for touch events to ensure immediate response on iOS
  const handleTouchStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Prevent rapid toggling on touch devices too
    if (isToggling) return;
    
    setIsToggling(true);
    setIsMobileOpen(prev => !prev);
    
    setTimeout(() => {
      setIsToggling(false);
    }, 150);
  };

  return (
    <>
      {/* Mobile Navigation Toggle Button */}
      <button 
        className="mobile-nav-toggle"
        onClick={toggleMobileMenu}
        onTouchStart={handleTouchStart}
        onTouchEnd={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
        aria-label="Toggle navigation menu"
        type="button"
        style={{
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'manipulation',
          cursor: 'pointer'
        }}
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
              alt="Farzad Shojaei"
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
          <h2 className="sidebar-name">Farzad Shojaei</h2>
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