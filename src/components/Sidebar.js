import React, { useState, useEffect } from 'react';
import { FaUser, FaBlog, FaBriefcase, FaCogs, FaGraduationCap, FaEnvelope, FaProjectDiagram, FaCertificate, FaBars, FaTimes } from 'react-icons/fa';

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
            <img 
              src="/profile-picture.jpg" 
              alt="Farzaad Shojaei" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="profile-initials">FS</div>
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