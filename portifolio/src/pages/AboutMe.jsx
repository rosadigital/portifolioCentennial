import React from 'react';
import NavBar from '../components/NavBar';
import profilePhoto from '../assets/img_profileAbout.jpg';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <div className="container-about">
        <h1 className="title-about">
          Felipe Rosa – Software Developer & Product Manager
        </h1>

        <div className="grid-container">
          <div className="grid-item">
            <h2 className="section-title">
              About Me
            </h2>
            <p className="text-about">
              With over a decade of experience, I am a passionate "Software Developer" and "Product Manager" skilled in transforming
              business challenges into tech solutions. My expertise spans across "full-stack development", "cloud services", and "AI integration",
              helping businesses streamline their processes through modern technologies.
            </p>
            <a 
              href="../assets/FelipeRosaDeveloperAI2024.docx"
              className="button"
              download
            >
              Download My Full Resume
            </a>

          </div>

          <div className="grid-item">
            <div className="image-container">
              <img 
                src={profilePhoto} 
                alt="Felipe Rosa" 
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="welcome-box">
        <h2 className="welcome-title">
          Key Achievements
        </h2>

        <p className="text">
          - Successfully led the development of "130+ digital transformation applications", generating annual revenue of "CAD 350K".
        </p>
        <p className="text">
          - Designed and launched "MCS Tools", a platform for automating routines (RPAs) and centralizing API access, driving innovation across the company.
        </p>
        <p className="text">
          - Led the development of "Nossa Intranet", a consulting management platform used by over "350 daily users", optimizing project management and financial reporting.
        </p>
        <p className="text">
          - Recently spearheaded the creation of "Nosso Tools", the first SaaS product for tax automation, achieving over "1,000 registrations" in just four months.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
