// Centralized UI translations for English (en) and Italian (it).
// Long-form, data-specific strings (job descriptions, certificate text, etc.)
// live next to their data inside the components as { en, it } objects.
// For the Skills page, only titles/headers are translated — individual skill
// names (JavaScript, Selenium, ...) intentionally stay in English.

const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      projects: 'Projects',
      certificates: 'Certificates',
      links: 'Links',
    },
    sidebarTitle: 'Quality-Concerned Developer',
    langLabel: 'EN',

    // Home
    home: {
      greeting: "Hi, I'm Farzad Shojaei",
      subtitleA: 'Quality-Concerned Developer',
      location: 'Milano, Italy',
      lead:
        "Welcome to my portfolio! I'm a passionate Quality-Concerned Developer with 5+ years of Software Testing & Development experience, with a background in Software Development and some hands-on back-end development experience. I'm also an AI Enthusiast.",
      more: 'More',
      less: 'Less',
      p2:
        "I'm dedicated to ensuring software quality through innovative testing methodologies and cutting-edge tools. My goal is to bridge the gap between traditional QA practices and emerging technologies.",
      p3:
        'I specialize in creating robust testing frameworks for web applications, mobile apps, APIs, and blockchain platforms. My back-end development experience gives me a deeper understanding of the systems I test — from APIs and databases to server-side logic. My expertise includes automated testing, cybersecurity, and SDET practices for high-scale systems serving 15M+ users.',
      p4:
        "Beyond traditional testing, I'm passionate about AI, blockchain security, and smart contract auditing. I'm especially interested in applying AI to software quality — from self-healing test automation to intelligent test generation. I combine security research with practical QA methodologies to deliver comprehensive solutions that protect users and maintain system integrity.",
      statYears: 'Years Experience',
      statUsers: 'Served Users',
      statProjects: 'Completed Projects',
      coreTech: 'Core Technologies',
      techTags: [
        'Software Testing',
        'OWASP',
        'Software Development',
        'Solidity',
        'Blockchain Development',
        'Security Testing',
      ],
      currentInterests: 'Current Interests',
    },

    // Experience
    experience: {
      title: 'Professional Experience',
      subtitle:
        'My journey in software testing and quality assurance, working with diverse technologies and teams',
      seeMore: 'See More',
      showLess: 'Show Less',
      keyAchievements: 'Key Achievements & Responsibilities:',
    },

    // Skills (titles/headers only)
    skills: {
      title: 'Technical Skills',
      subtitle:
        'A comprehensive overview of my technical expertise across various testing domains and technologies',
      seeSkills: 'see skills →',
      tapToSee: 'tap to see skills →',
    },

    // Education
    education: {
      title: 'Education',
      subtitle:
        'My academic journey and the foundation that shaped my career in technology and quality assurance',
      keyAchievements: 'Key Achievements:',
    },

    // Projects
    projects: {
      title: 'Projects Portfolio',
      subtitle:
        'Explore my work in blockchain development and quality assurance automation',
      tabBlockchain: 'Blockchain Projects',
      tabBlockchainShort: 'Blockchain',
      tabQA: 'QA Projects',
      catBlockchain: 'Blockchain & Smart Contract Projects',
      catQA: 'Quality Assurance & Testing Automation',
      clickToView: 'Click to view on GitHub →',
    },

    // Certificates
    certificates: {
      title: 'Certifications & Credentials',
      subtitle:
        'Professional certifications that validate my expertise in software testing, automation, and emerging technologies',
      issued: 'Issued:',
      credentialId: 'Credential ID:',
      tapMore: 'Tap to see more details',
    },

    // Contact
    contact: {
      title: 'Links & Contact',
      subtitle:
        'Connect with me through various platforms and get in touch for opportunities and collaborations.',
    },
  },

  it: {
    // Navigazione
    nav: {
      about: 'Chi sono',
      experience: 'Esperienza',
      skills: 'Competenze',
      education: 'Istruzione',
      projects: 'Progetti',
      certificates: 'Certificati',
      links: 'Contatti',
    },
    sidebarTitle: 'Sviluppatore Attento alla Qualità',
    langLabel: 'IT',

    // Home
    home: {
      greeting: 'Ciao, sono Farzad Shojaei',
      subtitleA: 'Sviluppatore Attento alla Qualità',
      location: 'Milano, Italia',
      lead:
        "Benvenuto nel mio portfolio! Sono uno Sviluppatore Attento alla Qualità con oltre 5 anni di esperienza nel testing e nello sviluppo software, con una formazione nello sviluppo software e un'esperienza pratica nello sviluppo back-end. Sono anche un appassionato di IA.",
      more: 'Mostra di più',
      less: 'Mostra di meno',
      p2:
        "Mi dedico a garantire la qualità del software attraverso metodologie di testing innovative e strumenti all'avanguardia. Il mio obiettivo è colmare il divario tra le pratiche QA tradizionali e le tecnologie emergenti.",
      p3:
        "Sono specializzato nella creazione di framework di testing robusti per applicazioni web, app mobili, API e piattaforme blockchain. La mia esperienza nello sviluppo back-end mi offre una comprensione più profonda dei sistemi che testo — dalle API e database alla logica lato server. Le mie competenze includono testing automatizzato, cybersecurity e pratiche SDET per sistemi su larga scala che servono oltre 15 milioni di utenti.",
      p4:
        "Oltre al testing tradizionale, sono appassionato di IA, sicurezza blockchain e auditing di smart contract. Sono particolarmente interessato ad applicare l'IA alla qualità del software — dall'automazione dei test self-healing alla generazione intelligente dei test. Combino la ricerca sulla sicurezza con metodologie QA pratiche per offrire soluzioni complete che proteggono gli utenti e mantengono l'integrità dei sistemi.",
      statYears: 'Anni di esperienza',
      statUsers: 'Utenti serviti',
      statProjects: 'Progetti completati',
      coreTech: 'Tecnologie principali',
      techTags: [
        'Test del Software',
        'OWASP',
        'Sviluppo Software',
        'Solidity',
        'Sviluppo Blockchain',
        'Test di Sicurezza',
      ],
      currentInterests: 'Interessi Attuali',
    },

    // Esperienza
    experience: {
      title: 'Esperienza Professionale',
      subtitle:
        'Il mio percorso nel testing del software e nel controllo qualità, lavorando con tecnologie e team diversi',
      seeMore: 'Mostra di più',
      showLess: 'Mostra di meno',
      keyAchievements: 'Risultati e Responsabilità Principali:',
    },

    // Competenze (solo titoli/intestazioni)
    skills: {
      title: 'Competenze Tecniche',
      subtitle:
        'Una panoramica completa delle mie competenze tecniche nei vari ambiti e tecnologie di testing',
      seeSkills: 'vedi competenze →',
      tapToSee: 'tocca per vedere le competenze →',
    },

    // Istruzione
    education: {
      title: 'Istruzione',
      subtitle:
        'Il mio percorso accademico e le basi che hanno plasmato la mia carriera nella tecnologia e nel controllo qualità',
      keyAchievements: 'Risultati Principali:',
    },

    // Progetti
    projects: {
      title: 'Portfolio Progetti',
      subtitle:
        'Esplora il mio lavoro nello sviluppo blockchain e nell\'automazione del controllo qualità',
      tabBlockchain: 'Progetti Blockchain',
      tabBlockchainShort: 'Blockchain',
      tabQA: 'Progetti QA',
      catBlockchain: 'Progetti Blockchain e Smart Contract',
      catQA: 'Controllo Qualità e Automazione dei Test',
      clickToView: 'Clicca per vedere su GitHub →',
    },

    // Certificati
    certificates: {
      title: 'Certificazioni e Credenziali',
      subtitle:
        'Certificazioni professionali che attestano le mie competenze nel testing del software, nell\'automazione e nelle tecnologie emergenti',
      issued: 'Rilasciato:',
      credentialId: 'ID Credenziale:',
      tapMore: 'Tocca per vedere più dettagli',
    },

    // Contatti
    contact: {
      title: 'Contatti e Link',
      subtitle:
        'Connettiti con me attraverso varie piattaforme e mettiti in contatto per opportunità e collaborazioni.',
    },
  },
};

export default translations;
