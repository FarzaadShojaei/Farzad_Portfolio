import React from 'react';
import { FaUser, FaBlog, FaBriefcase, FaCogs, FaGraduationCap, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'blog', label: 'Blog', icon: <FaBlog /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'skills', label: 'Skills', icon: <FaCogs /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const handleNavClick = (id) => {
    if (id === 'blog') {
      window.open('https://medium.com/@farzaadshojaei', '_blank');
    } else {
      setActiveSection(id);
    }
  };

  return (
    <aside className="sidebar">
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
  );
};

export default Sidebar; 