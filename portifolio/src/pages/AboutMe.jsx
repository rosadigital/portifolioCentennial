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

        <div className="grid-container-about">
          <div className="grid-item-about">
            <h2 className="section-title-about">
              About Me
            </h2>
            <p className="text-about">
              With over a decade of experience, I am a passionate "Software Developer" and "Product Manager" skilled in transforming
              business challenges into tech solutions. My expertise spans across "full-stack development", "cloud services", and "AI integration",
              helping businesses streamline their processes through modern technologies.
            </p>
            <a 
              href="../assets/FelipeRosaDeveloperAI2024.docx"
              className="button-about"
              download
            >
              Download My Full Resume
            </a>
          </div>

          <div className="grid-item-about">
            <div className="image-container-about">
              <img 
                src={profilePhoto} 
                alt="Felipe Rosa" 
                className="profile-photo-about"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="welcome-box-about">
        <h2 className="welcome-title-about">
          Key Achievements
        </h2>

        <p className="text-about">
          - Successfully led the development of "130+ digital transformation applications", generating annual revenue of "CAD 350K".
        </p>
        <p className="text-about">
          - Designed and launched "MCS Tools", a platform for automating routines (RPAs) and centralizing API access, driving innovation across the company.
        </p>
        <p className="text-about">
          - Led the development of "Nossa Intranet", a consulting management platform used by over "350 daily users", optimizing project management and financial reporting.
        </p>
        <p className="text-about">
          - Recently spearheaded the creation of "Nosso Tools", the first SaaS product for tax automation, achieving over "1,000 registrations" in just four months.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
