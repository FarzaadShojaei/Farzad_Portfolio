import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      institution: 'University of Science and Culture',
      institutionUrl: 'https://usc.ac.ir', // Add your university URL here
      degree: 'Bachelor of Science in Computer Science',
      icon: <FaGraduationCap />,
      duration: '2019 - 2023',
      details: 'Focused on software engineering, algorithms, and data structures. Completed coursework in software testing, quality assurance, and project management. Participated in coding competitions and hackathons. Final project involved developing an automated testing framework for web applications.',
      gpa: '16.73',
      achievements: [
        'Dean\'s List for 4 consecutive semesters',
        'Final project achieved 95% grade',
        'Participated in 3 hackathons with 2 winning projects',
        'Led university coding club for 2 years'
      ]
    },
    {
      institution: 'Seyedalshohada High School',
      institutionUrl: 'http://high.seyedalshohada.sch.ir/', // Add your school URL here
      degree: 'High School Diploma',
      icon: <FaSchool />,
      duration: '2015 - 2019',
      details: 'Graduated with honors, specializing in Mathematics and Science. Active member of the Computer Club and Math Olympiad team. Developed early interest in programming and technology through various computer science courses and extracurricular activities.',
      gpa: '17.34',
      achievements: [
        'Graduated with honors (Top 5% of class)',
        'Math Olympiad regional finalist',
        'Computer Club president for 2 years',
        'Perfect attendance award'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic journey and the foundation that shaped my career in technology and quality assurance
        </p>
      </div>
      
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <div className="education-icon">
                {edu.icon}
              </div>
              <div className="education-info">
                <h3>
                  <a 
                    href={edu.institutionUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="institution-link"
                  >
                    {edu.institution}
                  </a>
                </h3>
                <p className="degree">{edu.degree}</p>
                <p className="duration" style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
                  {edu.duration}
                </p>
                {edu.gpa && (
                  <p className="gpa" style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: '600', marginTop: '0.5rem' }}>
                    {edu.gpa}
                  </p>
                )}
              </div>
            </div>
            
            <div className="education-details">
              <p style={{ marginBottom: '1.5rem' }}>{edu.details}</p>
              
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#333', marginBottom: '1rem', fontWeight: '600' }}>
                  Key Achievements:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {edu.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} style={{ 
                      marginBottom: '0.5rem', 
                      paddingLeft: '1.5rem', 
                      position: 'relative',
                      color: '#555'
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        left: '0', 
                        color: '#667eea',
                        fontWeight: 'bold'
                      }}>
                        •
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 