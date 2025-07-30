import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      info: 'farzaadshojaei@gmail.com',
      icon: <FaEnvelope />,
      link: 'mailto:farzaadshojaei@gmail.com',
      description: 'Feel free to reach out for collaboration opportunities or just to say hello!'
    },
    {
      title: 'LinkedIn',
      info: 'linkedin.com/in/farzaadshojaei',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/farzaadshojaei',
      description: 'Connect with me professionally and see my latest career updates'
    },
    {
      title: 'GitHub',
      info: 'github.com/farzaadshojaei',
      icon: <FaGithub />,
      link: 'https://github.com/farzaadshojaei',
      description: 'Check out my open-source projects and contributions'
    },
    {
      title: 'Location',
      info: 'Available for Remote Work',
      icon: <FaMapMarkerAlt />,
      link: null,
      description: 'Currently open to remote opportunities worldwide'
    },
    {
      title: 'Phone',
      info: '+989371434110',
      icon: <FaPhone />,
      link: 'tel:+989371434110',
      description: 'Available for calls during business hours (9 AM - 6 PM EST)'
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always interested in new opportunities, collaborations, and conversations about technology and testing. 
          Let's connect and explore how we can work together!
        </p>
      </div>
      
      <div className="contact-grid">
        {contactInfo.map((contact, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">
              {contact.icon}
            </div>
            <h3 className="contact-title">{contact.title}</h3>
            {contact.link ? (
              <a 
                href={contact.link} 
                className="contact-info"
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                {contact.info}
              </a>
            ) : (
              <p className="contact-info">{contact.info}</p>
            )}
            <p style={{ 
              fontSize: '0.9rem', 
              color: '#888', 
              marginTop: '1rem', 
              lineHeight: '1.4' 
            }}>
              {contact.description}
            </p>
          </div>
        ))}
      </div>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: '3rem', 
        padding: '2rem',
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
        border: '2px solid rgba(220, 20, 60, 0.1)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          color: '#000', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Let's Build Something Amazing Together!
        </h3>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#333', 
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Whether you're looking for a dedicated SDET, need consultation on test automation strategies, 
          or want to discuss the latest trends in software testing and blockchain technology, 
          I'm here to help. Don't hesitate to reach out!
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a
            href="mailto:farzaadshojaei@gmail.com"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #dc143c 0%, #8b0000 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 5px 15px rgba(220, 20, 60, 0.4)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(220, 20, 60, 0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 15px rgba(220, 20, 60, 0.4)';
            }}
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 