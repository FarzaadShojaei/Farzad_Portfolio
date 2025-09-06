import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      info: 'farzaadshojaei@gmail.com',
      icon: <img src="/images/skills/gmail.png" alt="Email" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      link: 'mailto:farzaadshojaei@gmail.com',
      description: 'Feel free to reach out for collaboration opportunities'
    },
    {
      title: 'Phone',
      info: '+989371434110',
      icon: <img src="/images/skills/phone.png" alt="Phone" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      link: 'tel:+989371434110',
      description: 'Available for calls during business hours (9 AM - 6 PM EST)'
    },
    {
      title: 'LinkedIn',
      info: 'linkedin.com/in/farzad-shojaei',
      icon: <img src="/images/skills/Linkedin.png" alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      link: 'https://www.linkedin.com/in/farzad-shojaei/',
      description: 'Connect with me professionally and see my latest career updates'
    },
    {
      title: 'GitHub',
      info: 'github.com/farzaadshojaei',
      icon: <img src="/images/skills/github.png" alt="GitHub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      link: 'https://github.com/farzaadshojaei',
      description: 'Check out my open-source projects and contributions'
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Links & Contact</h2>
        <p className="section-subtitle">
          Connect with me through various platforms and get in touch for opportunities and collaborations.
        </p>
      </div>
      
      <div className="contact-grid">
        {contactInfo.map((contact, index) => (
          <div 
            key={index} 
            className={`contact-card ${contact.link ? 'clickable' : 'non-clickable'}`} 
            style={{ position: 'relative' }}
          >
            {contact.link && (
              <a 
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                aria-label={`Contact via ${contact.title}`}
              />
            )}
            <div className="contact-icon">
              {contact.icon}
            </div>
            <h3 className="contact-title">{contact.title}</h3>
            <div className="contact-info" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
              {contact.info}
            </div>
            <p style={{ 
              fontSize: '0.9rem', 
              color: '#888', 
              marginTop: '1rem', 
              lineHeight: '1.4',
              position: 'relative',
              zIndex: 2,
              pointerEvents: 'none'
            }}>
              {contact.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact; 