import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { t, lang } = useLanguage();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = React.useState(window.innerWidth <= 480);

  // Handle responsive state
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contactInfo = [
    {
      title: 'Email',
      info: 'farzaadshojaei@gmail.com',
      icon: <img src="/images/skills/gmail.png" alt="Email" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      link: 'mailto:farzaadshojaei@gmail.com',
      description: {
        en: 'Feel free to reach out for collaboration opportunities',
        it: 'Non esitare a contattarmi per opportunità di collaborazione',
      }
    },
    {
      title: 'Phone',
      info: '+393793378464',
      icon: <img src="/images/skills/phone.png" alt="Phone" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      link: 'tel:+393793378464',
      description: {
        en: 'Available for calls during business hours (9 AM - 6 PM CET)',
        it: 'Disponibile per chiamate durante l\'orario lavorativo (9:00 - 18:00 CET)',
      }
    },
    {
      title: 'LinkedIn',
      info: 'linkedin.com/in/farzad-shojaei',
      icon: <img src="/images/skills/Linkedin.png" alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      link: 'https://www.linkedin.com/in/farzad-shojaei/',
      description: {
        en: 'Connect with me professionally and see my latest career updates',
        it: 'Connettiti con me a livello professionale e segui i miei ultimi aggiornamenti di carriera',
      }
    },
    {
      title: 'GitHub',
      info: 'github.com/farzaadshojaei',
      icon: <img src="/images/skills/github.png" alt="GitHub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      link: 'https://github.com/farzaadshojaei',
      description: {
        en: 'Check out my open-source projects and contributions',
        it: 'Dai un\'occhiata ai miei progetti open-source e ai miei contributi',
      }
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
        }}>{t.contact.title}</h2>
        <p className="section-subtitle" style={{
          fontSize: isSmallMobile ? '0.95rem' : '1.1rem',
          lineHeight: isSmallMobile ? '1.5' : '1.6'
        }}>
          {t.contact.subtitle}
        </p>
      </div>
      
      <div className="contact-grid" style={{
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: isSmallMobile ? '1.2rem' : '2rem'
      }}>
        {contactInfo.map((contact, index) => (
          <div 
            key={index} 
            className={`contact-card ${contact.link ? 'clickable' : 'non-clickable'}`} 
            style={{ 
              position: 'relative',
              padding: isSmallMobile ? '1.2rem' : '2rem',
              borderRadius: isSmallMobile ? '12px' : '15px'
            }}
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
            <div className="contact-icon" style={{
              width: isSmallMobile ? '60px' : '80px',
              height: isSmallMobile ? '60px' : '80px',
              fontSize: isSmallMobile ? '1.5rem' : '2rem',
              marginBottom: isSmallMobile ? '0.8rem' : '1rem'
            }}>
              {contact.icon}
            </div>
            <h3 className="contact-title" style={{
              fontSize: isSmallMobile ? '1.1rem' : '1.2rem',
              marginBottom: isSmallMobile ? '0.4rem' : '0.5rem'
            }}>{contact.title}</h3>
            <div className="contact-info" style={{ 
              position: 'relative', 
              zIndex: 2, 
              pointerEvents: 'none',
              fontSize: isSmallMobile ? '0.9rem' : '1rem',
              wordBreak: 'break-word'
            }}>
              {contact.info}
            </div>
            <p style={{ 
              fontSize: isSmallMobile ? '0.85rem' : '0.9rem', 
              color: '#888', 
              marginTop: isSmallMobile ? '0.8rem' : '1rem', 
              lineHeight: isSmallMobile ? '1.3' : '1.4',
              position: 'relative',
              zIndex: 2,
              pointerEvents: 'none'
            }}>
              {contact.description[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
